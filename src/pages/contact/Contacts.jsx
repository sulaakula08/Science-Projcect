import React, { useState } from "react";
import "./Contacts.css";

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="contacts-container page-enter">
            <div className="contacts-header animate-fade-in">
                <h1>Contact Us</h1>
                <p>
                    Have questions? We'd love to hear from you. Send us a
                    message and we'll respond as soon as possible.
                </p>
            </div>

            <div className="contacts-content">
                <div className="contact-info">
                    <div className="info-card animate-scale-in delay-1">
                        <h3>Email</h3>
                        <p>kurbangaliyeva.alima@nisa.edu.kz</p>
                    </div>

                    <div className="info-card animate-scale-in delay-3">
                        <h3>Address</h3>
                        <p>
                            Улица Хусейн бен Талал, 19 <br />
                            Нура район, Астана, Z05H8H1
                        </p>
                    </div>
                </div>

                <div className="contact-form animate-fade-in delay-2">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="theme-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="theme-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="theme-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="theme-input"
                            />
                        </div>
                        <button type="submit" className="btn-submit hover-lift">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
