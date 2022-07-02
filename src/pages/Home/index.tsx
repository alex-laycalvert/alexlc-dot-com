import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import "./style.scss";

const Home: React.FC = () => {
    const homeTitleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log(homeTitleRef?.current?.getBoundingClientRect()?.y);
        const handleScroll = (e: any) => {
            if (!homeTitleRef.current) return;
            const yPos = homeTitleRef.current.getBoundingClientRect().y - 275;
            const blur = -yPos <= 0 ? 0 : -yPos / 15;
            homeTitleRef.current.style.filter = `blur(${blur}px)`;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="home">
            <div className="home-title">
                <div ref={homeTitleRef} className="home-title-block">
                    <div className="home-title-typed">
                        <Typed
                            strings={[
                                "Developer",
                                "Student",
                                "U.S. Marine",
                                "Alex Lay-Calvert",
                            ]}
                            typeSpeed={60}
                            backSpeed={80}
                            backDelay={1000}
                        />
                    </div>
                    <div className="home-title-links">
                        <a href="https://github.com/alex-laycalvert" target="#">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alexander-lay-calvert-2179501b4/"
                            target="#"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/laycalva/"
                            target="#"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="home-spacer"></div>

            <div className="home-content">
                <div className="text-wrapper">
                    Check out my current development projects/designs&nbsp;
                    <Link className="dev-link" to="/dev/orgchart">
                        here
                    </Link>
                    <p>Just the org chart right now, more to come...</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
