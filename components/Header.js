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
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Our Community
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link href="/community/team" ><li><a class="dropdown-item" href="#">Our Team</a></li></Link>
                                <Link href="/community/clubs"><li><a class="dropdown-item" href="#">KSB Clubs</a></li></Link>
                                <Link href="/community/contact"><li><a class="dropdown-item" href="#">Contact Us</a></li></Link>

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