import Typewriter from "typewriter-effect";
import { useTitleTypewriter } from "../../hooks/typewriter";

import styles from "../../styles/Home.module.scss";

export default function Home() {
    const { options, onInit } = useTitleTypewriter();

    return (
        <h1 className={styles.title}>
            <div className={styles.typewriter}>
                <Typewriter options={options} onInit={onInit} />
            </div>
        </h1>
    );
}
