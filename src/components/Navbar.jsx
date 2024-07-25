import React from "react";
import '../styles.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className="pass-me">&lt;</span>Pass<span className="pass-me">/&gt;</span>Me</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto" >
                        
                        <li className="nav-item">
                        <a className="nav-link" href="https://github.com/AnIrUdHtEmBe/FrontEndProject.git">GitHub</a>
                        </li>
                        
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Contact Me
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="https://g.co/kgs/sE52tvJ">Mail</a></li>
                            <li><a className="dropdown-item" href="https://www.instagram.com/">Instagram</a></li>
                            <li><a className="dropdown-item" href="https://in.linkedin.com/">LinkedIn</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}