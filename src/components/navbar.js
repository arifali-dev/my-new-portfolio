// import Link from "next/link";

// export default function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark">
//             <div className="container">
//                 <Link className="navbar-brand" href="/"><h5>Arif Ali</h5></Link>
//                 <div>
//                     <Link className="nav-link d-inline text-white me-3" href="/">
//                         Home
//                     </Link>
//                     <Link className="nav-link d-inline text-white me-3" href="/about">
//                         About
//                     </Link> <Link className="nav-link d-inline text-white me-3" href="/projects">
//                         Projects
//                     </Link>
//                     <Link className="nav-link d-inline text-white" href="/contact">
//                         Contact
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// }
"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [showProfile, setShowProfile] = useState(false);

    const closeMenu = () => {
        const navbar = document.getElementById("navbarNav");
        if (navbar && window.bootstrap) {
            const bsCollapse = window.bootstrap.Collapse.getInstance(navbar);
            if (bsCollapse) bsCollapse.hide();
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            const navbar = document.getElementById("navbarNav");
            const toggler = document.querySelector(".navbar-toggler");

            if (
                navbar &&
                !navbar.contains(e.target) &&
                !toggler.contains(e.target)
            ) {
                closeMenu();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const isActive = (path) => pathname === path;

    return (
        <>
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-md navbar-dark fixed-top custom-navbar">
                <div className="container">
                    {/* Brand */}
                    <div className="d-flex align-items-center gap-2">
                        <Image
                            src="/profile/profile-img.png"
                            alt="Arif Ali"
                            width={36}
                            height={36}
                            className="profile-thumb"
                            onClick={() => setShowProfile(true)}
                        />

                        <Link className="navbar-brand fw-bold m-0" href="/" onClick={closeMenu}>
                            Arif Ali
                        </Link>
                    </div>

                    {/* Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu */}
                    <div className="collapse navbar-collapse custom-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto gap-3">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About", path: "/about" },
                                { name: "Projects", path: "/projects" },
                                { name: "Contact", path: "/contact" },
                            ].map((item) => (
                                <li className="nav-item" key={item.path}>
                                    <Link
                                        href={item.path}
                                        onClick={closeMenu}
                                        className={`nav-link ${isActive(item.path) ? "active-link" : ""}`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* PROFILE MODAL */}
            {showProfile && (
                <div className="profile-modal" onClick={() => setShowProfile(false)}>
                    <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src="/profile/profile-img.png"
                            alt="Arif Ali"
                            width={300}
                            height={300}
                            className="profile-large"
                        />
                        <button className="close-btn" onClick={() => setShowProfile(false)}>
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}


