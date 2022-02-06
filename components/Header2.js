import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';

import Image from 'next/image';
import styles from '../styles/styles.module.css';


export default function Header() {
  return (
    <Navbar bg="black" variant="dark" sticky="top" expand="lg" className={styles.header} >

<Link href="/">
      <Navbar.Brand href="/">
                        <Image
                            src='/HLD-logo.png'
                            width={120}
                            height={80}
                        />
      
      </Navbar.Brand>
      </Link>




      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">


      </Navbar.Collapse>

      <Navbar.Collapse className="justify-content-end">


      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav className={styles.nav_text+ " mr-auto"}>
          <NavDropdown renderMenuOnMount={true}  title={<span className="nav-grey-item" >ABOUT</span>} id="basic-nav-dropdown">
          <Link href="/about/company">
            <NavDropdown.Item  className = "nav-drop-item "  href="/about/company">COMPANY</NavDropdown.Item></Link>
            <Link href="/about/awards"><NavDropdown.Item  className = "nav-drop-item "href="/about/awards">AWARDS</NavDropdown.Item></Link>
          </NavDropdown>

          <NavDropdown renderMenuOnMount={true} title={<span className="nav-grey-item" >PROGRAMS</span>} id="basic-nav-dropdown">
            <Link href="/programs/practice" variant="dark" ><NavDropdown.Item  className = "nav-drop-item "variant="dark" href="/programs/practice">MEDITATIVE PRACTICE</NavDropdown.Item></Link>
            <Link href="/programs/lectures" ><NavDropdown.Item  className = "nav-drop-item "href="/programs/lectures">LECTURES</NavDropdown.Item></Link>
            <Link href="/programs/workshop" ><NavDropdown.Item  className = "nav-drop-item "href="/programs/workshop">WORKSHOPS</NavDropdown.Item></Link>
            <Link href="/programs/community" ><NavDropdown.Item  className = "nav-drop-item "href="/programs/community">COMMUNITY ENGAGEMENT</NavDropdown.Item></Link>
          </NavDropdown>

          <NavDropdown renderMenuOnMount={true} title={<span className="nav-grey-item" >EVENTS</span>} id="basic-nav-dropdown">
            <Link href="/upcoming-events" ><NavDropdown.Item  className = "nav-drop-item "href="/upcoming-events">UPCOMING EVENTS</NavDropdown.Item></Link>
            <Link href="/portfolio" ><NavDropdown.Item  className = "nav-drop-item "href="/portfolio">PORTFOLIO</NavDropdown.Item></Link>
          </NavDropdown>

        <Link href="/contact" ><Nav.Link href="/contact">{<span className="nav-grey-item" >CONTACT</span>}</Nav.Link></Link>
          {/* <NavDropdown renderMenuOnMount={true} title={<span className="nav-grey-item" >CONTACT</span>} id="basic-nav-dropdown">
            <Link href="/contact" ><NavDropdown.Item  className = "nav-drop-item "href="/contact/contact">CONTACT US</NavDropdown.Item></Link>
            <Link href="/contact/book" ><NavDropdown.Item  className = "nav-drop-item "href="/contact/book">BOOK US</NavDropdown.Item></Link>
            <Link href="/contact/subscribe"><NavDropdown.Item  className = "nav-drop-item "href="/contact/subscribe">SUBSCRIBE</NavDropdown.Item></Link>
          </NavDropdown> */}



          <Link href="/donate">
          <Nav.Item > <div className={styles.donate_btn + " mt-4"}> {<span className="nav-grey-item" >DONATE</span>} </div> </Nav.Item>
          </Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
