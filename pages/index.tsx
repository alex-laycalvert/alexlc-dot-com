import Typewriter from "typewriter-effect";

import styles from "../styles/Home.module.scss";

export default function Home() {
    const typedStrings = ["Developer", "U.S. Marine", "Linux Enthusiast", "Neovim User"];

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1 className={styles.nameHeader}>Hi, I&apos;m Alex</h1>
                <div className={styles.aboutMeWrapper}>
                    <div className={styles.typewriter}>
                        <Typewriter
                            options={{
                                loop: true,
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
        </div>
    );
}
