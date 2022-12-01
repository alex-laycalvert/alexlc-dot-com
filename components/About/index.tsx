import Image from "next/image";

import styles from "../../styles/About.module.scss";

export default function About() {
    return (
        <div className={styles.container + ' drag'}>
            <div className={styles.aboutMeWrapper}>
                <h2 className={styles.headerText}>About me</h2>
                <hr className={styles.aboutMeDivider} />
                <div className={styles.aboutMeDetails}>
                    <Image
                        className={styles.aboutMeHeadshot}
                        src="/assets/images/headshot.jpg"
                        alt="Alex L-C Headshot"
                        width={200}
                        height={200}
                    />
                    <div className={styles.aboutMeDetailsTextWrapper}>
                        <p className={styles.aboutMeDetailsText}>
                            My name is Alex and I am a web developer, student, and Marine Reservist
                            based out of Columbia, SC. I have been working in the IT industry for
                            about 3 years now, a lot of that time being in System/Network
                            administration.
                        </p>
                        <p className={styles.aboutMeDetailsText}>
                            My main passion is in technology and most of my time is spent working on
                            professional and personal programming projects. I pride myself in being
                            able to always accomplish my company&apos;s and clients&apos; missions,
                            regardless of the hurdles along to way.
                        </p>
                    </div>
                </div>
                <div className={styles.aboutMeFooter}>
                    <i className={styles.aboutMeFooterText}>
                        I don&apos;t always the answer to every problem, but I ALWAYS find it.
                    </i>
                </div>
            </div>
        </div>
    );
}
