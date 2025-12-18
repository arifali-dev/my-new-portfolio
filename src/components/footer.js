"use client";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center text-center text-md-start">

                    {/* LEFT - NAME */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5 className="footer-brand">Arif Ali</h5>
                        <p className="footer-text sm-text-center">
                            Frontend Developer building modern and responsive web experiences.
                        </p>
                    </div>

                    {/* CENTER - SOCIAL LINKS */}
                    <div className="col-md-4 mb-3 mb-md-0 text-center">
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/YOUR_USERNAME" target="_blank">
                                <Image src="/social/linkedin.svg" alt="LinkedIn" width={28} height={28} />
                            </a>

                            <a href="https://github.com/YOUR_USERNAME" target="_blank">
                                <Image src="/social/git-icon.svg" alt="github" width={28} height={28} />
                            </a>

                            <a href="https://twitter.com/YOUR_USERNAME" target="_blank">
                                <Image src="/social/twitter.svg" alt="LinkedIn" width={28} height={28} />
                            </a>

                            <a href="https://instagram.com/YOUR_USERNAME" target="_blank">
                                <Image src="/social/instagram.svg" alt="LinkedIn" width={28} height={28} />
                            </a>

                            <a href="https://facebook.com/YOUR_USERNAME" target="_blank">
                                <Image src="/social/facebook.svg" alt="LinkedIn" width={28} height={28} />
                            </a>
                        </div>
                    </div>


                    {/* RIGHT - COPYRIGHT */}
                    <div className="col-md-4 text-center text-md-end">
                        <p className="footer-copy">
                            © {new Date().getFullYear()} Arif Ali
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
