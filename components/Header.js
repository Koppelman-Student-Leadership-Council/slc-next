import React from "react";
import Link from 'next/link';

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
                            <Link href="/about">
                            <a class="nav-link active" aria-current="page" href="header">About</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/calendar" ><a class="nav-link" href="#">KSB Calendar</a></Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link href="/events/business-matters" ><li><a class="dropdown-item" href="#">Business Matters</a></li></Link>
                                <Link href="/events/summit"><li><a class="dropdown-item" href="#">KSB Summit</a></li></Link>
                                <Link href="/events/learn-more" >
                                <li><a class="dropdown-item" href="#">Learn More</a></li>
                                </Link>
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
                        <li className="btn btn-outline-success mr-5">Subscribe Us</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}