import Link from "next/link";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import styles from "../styles/Home.module.scss";

export default function Home() {
    const contentRef = useRef<HTMLDivElement>(null);

    const [showCopied, setShowCopied] = useState(false);

    const { scrollYProgress } = useScroll({ container: contentRef });

    useEffect(() => {
        if (!showCopied) {
            return;
        }
        setTimeout(() => {
            setShowCopied(false);
        }, 2500);
    }, [showCopied]);

    return (
        <div className={styles.container}>
            <motion.div className={styles.sideNav} style={{ scaleY: scrollYProgress }} />
            <article ref={contentRef} className={styles.ALArticle}>
                <div className={styles.section}>
                    <div className={styles.content}>
                        <h2>Hi, I&apos;m Alex</h2>
                        <div className={styles.buttonWrapper}>
                            <button className={styles.jumpToContact}>
                                <u>
                                    <i>Contact Me</i>
                                </u>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.content}>
                        <h2>About Me</h2>
                        <br />
                        <br />
                        <div className={styles.aboutMeWrapper}>
                            <Image
                                src="/assets/images/headshot.jpg"
                                alt="Alex L-C Headshot"
                                width={200}
                                height={200}
                            />
                            <p>
                                I am a Web Developer and current student at Unviersity of South
                                Carolina. I am also a U.S. Marine Reservist and work as a Data
                                Systems Administrator. I am incredibly passionate about all things
                                Computer Science and spend most of my time devloping/improving
                                applications for my clients and employers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.content}>
                        <h2>Contact Me</h2>
                        <div className={styles.contactWrapper}>
                            <p>
                                To get in touch with me about contracting and building your next app, email me at&nbsp;
                                {showCopied && (
                                    <div className={styles.copiedText}>Copied to Clipboard</div>
                                )}
                                <button
                                    onClick={(_e) => {
                                        navigator.clipboard.writeText("alex.laycalvert@gmail.com");
                                        setShowCopied(true);
                                    }}
                                >
                                    <u>
                                        <i>alex.laycalvert@gmail.com</i>
                                    </u>
                                </button>
                                <div className={styles.linkWrapper}>
                                    Or, visit my&nbsp;
                                    <Link target="blank" href="https://github.com/alex-laycalvert">
                                        <u>
                                            <i>GitHub</i>
                                        </u>
                                    </Link>
                                    &nbsp; or&nbsp;
                                    <Link
                                        target="blank"
                                        href="https://www.linkedin.com/in/alexander-lay-calvert-2179501b4/"
                                    >
                                        <u>
                                            <i>LinkedIn</i>
                                        </u>
                                    </Link>
                                    .
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
