"use client";
import useRevealAnimation from "../../hooks/useAnimation";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState("");
    useRevealAnimation();
    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-wrapper">

                    {/* LEFT */}
                    <div className="contact-left reveal reveal-left">
                        <h2 className="text-white">Let’s work together</h2>
                        <p>
                            I’m open to full-time roles, freelance projects, and collaborations.
                            Fill out the form and I’ll get back to you within 24–48 hours.
                        </p>

                        <div className="contact-meta">
                            <p>📧 arif74962786@email.com</p>
                            <p>📍 India</p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="contact-right reveal reveal-right">
                        <form className="contact-form">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Email Address" required />
                            <textarea rows="5" placeholder="Tell me about your project..." required />
                            <button type="submit">Send Message</button>
                            {status && <p className="form-status">{status}</p>}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
