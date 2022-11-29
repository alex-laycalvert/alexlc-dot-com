import Book from "../components/Book";
import Page from "../components/Book/Page";
//import Typewriter from "typewriter-effect";
//
//import styles from "../styles/Home.module.scss";

export default function Home() {
    //const typedStrings = ["Developer", "U.S. Marine", "Linux Enthusiast", "Neovim User"];

    return (
        <Book>
            <Page backgroundColor="#7EBBE0" foregroundColor="#003844">
                <h1>Hello, World!</h1>
            </Page>
            <Page backgroundColor="#ED6A5A" foregroundColor="#003844">
                <h1>Maybe, World?</h1>
            </Page>
            <Page backgroundColor="#000000" foregroundColor="#FFFFFF">
                <h1>Goodbye, World!</h1>
            </Page>
        </Book>
    );
}

/*
 *
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1 className={styles.nameHeader}>
                    <div className={styles.typewriter}>
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
                </h1>
            </div>
        </div>
    );
    */
