import React from "react";
import Link from 'next/link';
import NavLink from './NavLink'

export default function Header({ container }) {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link href="/"><a class="navbar-brand" href="#">Student Leadership Club</a></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0  ms-auto">
                        <li class="nav-item">
                            <NavLink href="/about" className="nav-link" >About</NavLink>
                        </li>
                        <li class="nav-item">

                            <NavLink href="/calendar" className="nav-link" >KSB Calendar</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                            <NavLink href="/events" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </NavLink>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink href="/events/business-matters" className="dropdown-item" >Business Matters</NavLink>
                                <NavLink href="/events/summit" className="dropdown-item" >KSB Summit</NavLink>
                                <NavLink href="/events/learn-more" className="dropdown-item" >Learn More</NavLink>

                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <NavLink href="/community" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Our Community
                            </NavLink>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink href="/community/team" className="dropdown-item" >Our Team</NavLink>
                                <NavLink href="/community/clubs" className="dropdown-item" >KSB Clubs</NavLink>
                                <NavLink href="/community/contact" className="dropdown-item" >Contact Us</NavLink>

                            </ul>
                        </li>
                        <li >
                            <a className="btn btn-outline-success mr-5" href="https://form.typeform.com/to/ImW405p0" target="_blank">Subscribe Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}