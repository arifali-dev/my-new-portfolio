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

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top custom-navbar">
            <div className="container">
                <Link className="navbar-brand fw-bold" href="/">
                    Arif Ali
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item text-white">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-primary px-3" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

