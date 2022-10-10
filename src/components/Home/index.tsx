import React from 'react'
import Typewriter from 'typewriter-effect';

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
        'That was a lie',
        'It took me 2 days',
        'And giving up my first born child',
        'Compiled a C program with no errors',
        'After two hours of looking at Stack Overflow',
        'Never remembers how to vertically align text',
    ];

    return (
        <div className="home">
            <div className="home-title">
                <div className="home-title-text">
                    <h1>Alex Lay-Calvert</h1>
                    <div className="home-title-typed">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.changeDelay(70);
                                typewriter.changeDeleteSpeed(100);
                                typedStrings.forEach((str) => {
                                    typewriter
                                        .typeString(str)
                                        .pauseFor(900)
                                        .deleteAll()
                                        .pauseFor(250);
                                });
                                typewriter.start();
                            }}
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
