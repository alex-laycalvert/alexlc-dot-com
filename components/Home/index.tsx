import Typewriter from "typewriter-effect";

import styles from "../../styles/Home.module.scss";

export default function Home() {
    const typedStrings = ["Developer", "U.S. Marine", "Linux Enthusiast", "Neovim User"];

    return (
        <div className={styles.container}>
            <Typewriter
                options={{
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(40)
                        .changeDeleteSpeed(30)
                        .typeString("Hi, I'm Alex")
                        .pauseFor(2000)
                        .deleteChars(4)
                        .pauseFor(500)
                        .typeString("a ");
                    typedStrings.forEach((str) => {
                        typewriter
                            .typeString(str)
                            .pauseFor(1200)
                            .deleteChars(str.length)
                            .pauseFor(500);
                    });
                    typewriter.start();
                }}
            />
        </div>
    );
}
