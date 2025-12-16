import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Link className="navbar-brand" href="/">Arif</Link>

                <div>
                    <Link className="nav-link d-inline text-white me-3" href="/about">
                        About
                    </Link>
                    <Link className="nav-link d-inline text-white" href="/projects">
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    );
}
