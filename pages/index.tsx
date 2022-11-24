import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import Article from "../components/Article";
import { DoubleUpArrow, DoubleDownArrow, Clipboard, ClipboardCheck } from "../components/icons";

import styles from "../styles/Home.module.scss";

export default function Home() {
    const [showCopied, setShowCopied] = useState(false);
    const [scrollDownOpacity, setScrollDownOpacity] = useState(1);
    const [scrollUpOpacity, setScrollUpOpacity] = useState(0);

    const { scrollYProgress } = useScroll();

    useEffect(() => {
        if (!showCopied) {
            return;
        }
        setTimeout(() => {
            setShowCopied(false);
        }, 2500);
    }, [showCopied]);

    useEffect(() => {
        scrollYProgress.onChange((latest) => {
            setScrollUpOpacity(0);
            setScrollDownOpacity(0);
            if (latest <= 0.1) {
                setScrollDownOpacity(0.5);
                return;
            }
            if (latest <= 0.05) {
                setScrollDownOpacity(1);
                return;
            }
            if (latest >= 0.9) {
                setScrollUpOpacity(0.5);
                return;
            }
            if (latest >= 0.95) {
                setScrollUpOpacity(1);
                return;
            }
        });
    }, [scrollYProgress]);

    const emailOnClick = () => {
        navigator.clipboard.writeText("alex.laycalvert@gmail.com");
        setShowCopied(true);
    };

    return (
        <Article scrollYProgress={scrollYProgress} useScrollProgress>
            <div id="home" className={styles.section}>
                <div>
                    <h2>Hi, I&apos;m Alex</h2>
                    <br />
                    <Link className={styles.textLink} href="#contact">
                        <u>
                            <i>Contact Me</i>
                        </u>
                    </Link>
                </div>
            </div>
            <div id="about" className={styles.section}>
                <div>
                    <h2>About Me</h2>
                    <div className={styles.aboutMeWrapper}>
                        <Image
                            className={styles.headshot}
                            src="/assets/images/headshot.jpg"
                            alt="Alex L-C Headshot"
                            width={150}
                            height={150}
                        />
                        <p>
                            I am a Web Developer, U.S. Marine Reservist, and student at University
                            of South Carolina. I am passionate about software developing and
                            technology and spend a lot of my freetime working on side projects and
                            learning as much as I can.
                        </p>
                    </div>
                </div>
            </div>
            <div id="contact" className={styles.section}>
                <div>
                    <h2>Contact Me</h2>
                    <br />
                    <div className={styles.contactWrapper}>
                        Email me to talk about contracting and building your next web application
                        at&nbsp;
                        <button
                            className={`${styles.emailButton} ${
                                showCopied ? styles.copiedText : ""
                            }`}
                            onClick={emailOnClick}
                        >
                            <u>
                                <i>
                                    alex.laycalvert@gmail.com
                                    {showCopied && <ClipboardCheck />}
                                    {!showCopied && <Clipboard />}
                                </i>
                            </u>
                        </button>
                        <br />
                        <br />
                        You can also find me on&nbsp;
                        <Link className={styles.textLink} href="https://github.com/alex-laycalvert">
                            <u>
                                <i>GitHub</i>
                            </u>
                        </Link>
                        &nbsp; and&nbsp;
                        <Link
                            className={styles.textLink}
                            href="https://www.linkedin.com/in/alexander-lay-calvert-2179501b4/"
                        >
                            <u>
                                <i>LinkedIn</i>
                            </u>
                        </Link>
                        .
                    </div>
                    <br />
                    <br />
                    <Link className={styles.textLink} href="#home">
                        <u>
                            <i>Back to Top</i>
                        </u>
                    </Link>
                </div>
            </div>
            <div className={styles.scrollUp} style={{ opacity: scrollUpOpacity }}>
                <DoubleUpArrow />
                Scroll Up <DoubleUpArrow />
            </div>
            <div className={styles.scrollDown} style={{ opacity: scrollDownOpacity }}>
                <DoubleDownArrow />
                Scroll Down <DoubleDownArrow />
            </div>
        </Article>
    );
}
