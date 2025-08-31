import React, { useState, useRef, useEffect } from "react";
import "./AIKbot.css";

const AIKbot = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            role: "assistant",
            text: "Hi! I am AIKbot. Ask me about IB Lab Reports.",
        },
    ]);
    const [input, setInput] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isDragActive, setIsDragActive] = useState(false);
    const listRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed && selectedFiles.length === 0) return;
        const parts = [];
        if (trimmed) parts.push(trimmed);
        if (selectedFiles.length > 0) {
            const filesDesc = selectedFiles
                .map((f) => `${f.name} (${Math.round(f.size / 1024)} KB)`) 
                .join(", ");
            parts.push(`Files: ${filesDesc}`);
        }
        const userMessage = { id: Date.now(), role: "user", text: parts.join("\n") };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setSelectedFiles([]);

        try {
            const history = [...messages, userMessage].map((m) => ({ role: m.role, content: m.text }));
            const resp = await fetch("http://localhost:5000/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: history }),
            });
            const data = await resp.json();
            const replyText = data.reply || "";
            setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, role: "assistant", text: replyText || "(no reply)" },
            ]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, role: "assistant", text: "Sorry, the AI service is unavailable." },
            ]);
        }
    };

    const handleFileClick = () => {
        if (fileInputRef.current) fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;
        setSelectedFiles((prev) => [...prev, ...files]);
        e.target.value = "";
    };

    const handleRemoveFile = (index) => {
        setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(true);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
        const files = Array.from(e.dataTransfer.files || []);
        if (files.length > 0) {
            setSelectedFiles((prev) => [...prev, ...files]);
        }
    };

    return (
        <div className="aikbot-page page-enter">
            <header className="aikbot-header animate-fade-in">
                <h1>AIKbot</h1>
            </header>

            <div className="aikbot-card animate-scale-in">
                <div className="chat-list" ref={listRef}>
                    {messages.map((m) => (
                        <div key={m.id} className={`chat-bubble ${m.role}`}>
                            {m.text}
                        </div>
                    ))}
                </div>

                <form
                    className={`chat-input ${
                        isDragActive ? "drag-active" : ""
                    }`}
                    onSubmit={handleSend}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    {selectedFiles.length > 0 && (
                        <div className="file-chips" aria-label="Selected files">
                            {selectedFiles.map((file, idx) => (
                                <div
                                    className="chip"
                                    key={`${file.name}-${idx}`}
                                >
                                    <span className="chip-name">
                                        {file.name}
                                    </span>
                                    <span className="chip-size">
                                        {Math.round(file.size / 1024)} KB
                                    </span>
                                    <button
                                        type="button"
                                        className="chip-remove"
                                        aria-label={`Remove ${file.name}`}
                                        onClick={() => handleRemoveFile(idx)}
                                        title="Remove file"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about variables, uncertainties, graphs, evaluation..."
                        className="theme-input"
                        rows="1"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSend(e);
                            }
                        }}
                    />

                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="visually-hidden"
                        aria-hidden="true"
                        tabIndex={-1}
                    />
                    <button
                        type="button"
                        className="icon-btn btn-file"
                        onClick={handleFileClick}
                        aria-label="Upload file"
                        title="Upload file"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <polyline
                                points="14,2 14,8 20,8"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <line
                                x1="16"
                                y1="13"
                                x2="8"
                                y2="13"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <line
                                x1="16"
                                y1="17"
                                x2="8"
                                y2="17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <polyline
                                points="10,9 9,9 8,9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <button
                        type="submit"
                        className="btn-submit"
                        aria-label="Send message"
                        title="Send"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AIKbot;
