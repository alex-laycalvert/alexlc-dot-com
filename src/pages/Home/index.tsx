import React from 'react';
import Page from '../../components/Page'
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
        'Compiled a C program with no errors',
        'Never remembers how to vertically align text',
        'Banned from Stack Overflow at the age of 13',
    ];

    return (
        <Page name="home">
                <div className="home-title">
                    <div className="home-title-text">
                        <h1>Alex Lay-Calvert</h1>
                        <div className="home-title-typed">
                            <Typewriter
                                options={{
                                    loop: true
                                }}
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
        </Page>
    );
};

export default Home;
