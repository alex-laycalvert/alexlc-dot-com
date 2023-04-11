"use client";

import Typewriter from "typewriter-effect";

const addStyle = (str: string): string => {
    return `<span style="background: linear-gradient(135deg, #5335cf 0%, #de005e 25%, #f66e48 50%, #de005e 75%, #5335cf 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${str}</span>`;
};

const TitleTypewriter: React.FC = () => {
    return (
        <h1 className="text-5xl font-extrabold text-lightGreen">
            <Typewriter
                options={{
                    cursor: "_",
                }}
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(500)
                        .changeDelay(130)
                        .typeString("Hi")
                        .pauseFor(1000)
                        .changeDelay(70)
                        .typeString(
                            ", I'm <span style='color: #51B899'>Alex</span>"
                        )
                        .pauseFor(1000)
                        .typeString(` and I'm a ${addStyle("Developer")}`)
                        .pauseFor(750)
                        .deleteChars(9)
                        .pauseFor(500)
                        .typeString(addStyle("Student"))
                        .pauseFor(750)
                        .deleteChars(7)
                        .pauseFor(500)
                        .typeString(addStyle("Linux User"))
                        .pauseFor(750)
                        .deleteChars(10)
                        .pauseFor(500)
                        .typeString(addStyle("10x Developer ..."))
                        .pauseFor(1000)
                        .typeString(" <i>I wish</i>")
                        .pauseFor(750)
                        .deleteChars(24)
                        .pauseFor(500)
                        .typeString(addStyle("Human"))
                        .start();
                }}
            />
        </h1>
    );
};

export default TitleTypewriter;
