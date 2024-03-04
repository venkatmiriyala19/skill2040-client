
import React from 'react';
import { Link } from 'react-scroll';
import NavItem from './NavItem.jsx';
import NavButtons from './NavButtons.jsx';
import ProgressBar from './ProgressBar.jsx';
import './styles/Nav.css';

export default function Nav() {
    return (
        <>
            <header className="header" id="header">
                <nav className="nav container">

                    <Link to="home" smooth={true} duration={500} className="nav__logo">
                    <i className="fa-solid fa-bullseye"></i>
                    </Link>

                    <ul className="nav__list grid">
                        <NavItem to="/skill2040/home" icon="uil-estate" label="Home" className="link" />
                        <NavItem to="/skill2040/courses" icon="uil-user" label="Courses" className="link" />
                        <NavItem to="/skill2040/coding" icon="uil-user" label="Coding" className="link" />
                        <NavItem to="/skill2040/interview" icon="uil-briefcase-alt" label="Interview" />
                        <NavItem to="/skill2040/jobs" icon="uil-briefcase-alt" label="Jobs" className="link" />
                    </ul>

                    <div className='user_icon
                    '>

                        <NavItem to="interview" icon="uil-briefcase-alt" label="VenkataKousik" />
                        <i className="fa-solid fa-user"></i>
                    </div>
                </nav>
            </header>
        </>

    );
};