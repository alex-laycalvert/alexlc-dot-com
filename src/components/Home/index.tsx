import React from 'react'
import Typed from 'react-typed'

import './styles.scss'

const Home: React.FC = () => {

    const typedStrings = [
        'Developer',
        'UofSC Student',
        'U.S. Marine',
        'Neovim User',
        'Linux Enthusiast',
        'Nerd',
        'Installed Arch Linux on the first try',
        'Compiled a C program with no errors',
        'Never remembers how to vertically align text',
    ];

    return (
        <div className="home">
            <div className="home-title">
                <div className="home-title-text">
                    <h1>Alex Lay-Calvert</h1>
                    <div className="home-title-typed">
                        <Typed
                            strings={typedStrings}
                            typeSpeed={55}
                            backSpeed={40}
                            backDelay={1000}
                            loop
                        />
                    </div>
                </div>
            </div>
                <div className="home-links">
                    <a
                        href="https://github.com/alex-laycalvert/"
                        target="#"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/alexander-lay-calvert-2179501b4/"
                        target="#"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
        </div>
    );
};

export default Home;
