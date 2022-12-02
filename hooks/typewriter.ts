import { Options, TypewriterClass } from "typewriter-effect";

export function useTitleTypewriter() {
    // TODO: Pull strings from database
    const typedStrings = [
        "Developer",
        "Student",
        "Freelancer",
        "U.S. Marine",
        "Linux Enthusiast",
        "Neovim User",
    ];

    const options: Partial<Options> = {
        loop: true,
    };

    const onInit = (typewriter: TypewriterClass) => {
        typewriter
            .changeDelay(40)
            .changeDeleteSpeed(30)
            .typeString("Hi, I'm Alex")
            .pauseFor(2000)
            .deleteChars(4)
            .pauseFor(500)
            .typeString("a ");
        typedStrings.forEach((str) => {
            typewriter.typeString(str).pauseFor(1200).deleteChars(str.length).pauseFor(500);
        });
        typewriter.start();
    };

    return {options, onInit};
}
