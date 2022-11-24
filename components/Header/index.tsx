import Image from "next/image";
import Typewriter from "typewriter-effect";
import Navbar from "../Navbar";

import styles from "../../styles/Header.module.scss";

interface Props {
    showDropdown: boolean;
    toggleShowDropdown: () => void;
}

export default function Header({ showDropdown, toggleShowDropdown }: Props) {
    const typedStrings = ["Developer", "U.S. Marine", "Linux Enthusiast", "Neovim User"];

    return (
        <header className={styles.ALHeader}>
            <div className={styles.side}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/assets/images/logo.png"
                        alt="AL Development Logo"
                        width={75}
                        height={75}
                    />
                </div>
                <h1>Alex L-C</h1>
                <div className={styles.dotSeparator}>.</div>
                <div className={styles.typewriter}>
                    <Typewriter
                        options={{
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter.changeDelay(70);
                            typewriter.changeDeleteSpeed(100);
                            typedStrings.forEach((str) => {
                                typewriter.typeString(str).pauseFor(900).deleteAll().pauseFor(250);
                            });
                            typewriter.start();
                        }}
                    />
                </div>
            </div>
            <div className={`${styles.side} ${styles.right}`}>
                <Navbar showDropdown={showDropdown} toggleShowDropdown={toggleShowDropdown} />
            </div>
        </header>
    );
}
