import React from 'react';
import Icon from '../Icon';

import './styles.scss'

interface Props {
    currentPage: string;
};

const NavBar: React.FC<Props> = ({
    currentPage
}) => {
    return (
        <nav className="page-navbar">
            {
                currentPage !== 'home' &&
                <a href="/home">
                    <Icon
                        name="home-icon"
                        alt="Home Icon"
                    />&nbsp;
                    Home
                </a>
            }
            {
                currentPage !== 'about' &&
                <a href="/about">
                    <Icon
                        name="user-icon"
                        alt="User Icon"
                    />&nbsp;
                    About Me
                </a>
            }
            {
                currentPage !== 'projects' &&
                <a href="/projects">
                    <Icon
                        name="project-icon"
                        alt="Project Icon"
                    />&nbsp;
                    Projects
                </a>
            }
            {
                currentPage !== 'resume' &&
                <a href="/resume">
                    <Icon
                        name="resume-icon"
                        alt="Resume Icon"
                    />&nbsp;
                    Resume
                </a>
            }
        </nav>
    );
};

export default NavBar;
