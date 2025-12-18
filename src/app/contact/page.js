export default function Contact() {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="row justify-content-center">

                    {/* HEADER */}
                    <div className="col-md-8 text-center mb-5 contact_header">
                        <h1 className="section-title">Get In Touch</h1>
                        <p className="contact-subtext">
                            Have a project, question, or just want to say hi? I’d love to hear from you.
                        </p>
                    </div>

                    {/* FORM */}
                    <div className="col-lg-6 mb-5">
                        <form className="contact-form">
                            <div className="form-group mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group mb-4">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="form-group mb-4">
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button className="btn btn-primary w-100">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="col-lg-5 mt-5 mt-lg-0">
                        <div className="contact-info">
                            <h5>Contact Details</h5>
                            <p>📧 <a href="mailto:arif74962786@email.com">arif74962786@email.com</a></p>
                            <p>📍 India</p>
                            <p className="mt-3">Open to full-time roles, freelance & collaborations.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
