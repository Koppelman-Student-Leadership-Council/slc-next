import React from "react";
import Link from 'next/link';
import NavLink from './NavLink'

export default function Header({ container }) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark no-flow">
            <div className="container-fluid ">
                <Link href="/"><a className="navbar-brand" href="#">
                    <img className="logo" src="/assets/logo.png" alt="Koppelman Student Leadership Council" />
                </a></Link>
                <button className="navbar-toggler no-border" align="right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 nav ms-auto no-flow">
                        <li className="nav-item">
                            <NavLink href="/about" className="link-light nav-link " >About</NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink href="/calendar" className="nav-link link-light">KSB Calendar</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink href="/events" className="nav-link link-light dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink href="/events/business-matters" className="dropdown-item" >Business Matters</NavLink>
                                <NavLink href="/events/summit" className="dropdown-item" >KSB Summit</NavLink>
                                <NavLink href="/events/learn-more" className="dropdown-item" >Learn More</NavLink>

                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink href="/community" className="nav-link link-light dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Our Community
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink href="/community/team" className="dropdown-item" >Our Team</NavLink>
                                <NavLink href="/community/clubs" className="dropdown-item" >KSB Clubs</NavLink>
                                <NavLink href="/community/contact" className="dropdown-item" >Contact Us</NavLink>

                            </ul>
                        </li>
                        <li >
                            <a className="btn btn-outline-light slc-hover-background ml-2" href="https://form.typeform.com/to/ImW405p0" target="_blank" rel="noopener noreferrer">Subscribe Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}