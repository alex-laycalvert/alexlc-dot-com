import Book from "../Book";
import Page from "../Book/Page";
import Home from "../Home";
import Clients from "../Clients";
import Resume from "../Resume";
import Contact from "../Contact";
import About from "../About";
import * as icons from "../icons";

interface Props {
    path: string;
}

export default function PageBook({ path }: Props) {
    const pages = [
        {
            name: "Home",
            path: "home",
            icon: <icons.Home />,
        },
        {
            name: "Clients",
            path: "clients",
            icon: <icons.Users />,
        },
        {
            name: "About Me",
            path: "about",
            icon: <icons.User />,
            hoverIcon: <icons.UserDetail />,
        },
        {
            name: "Resume",
            path: "resume",
            icon: <icons.Resume />,
        },
        {
            name: "Contact",
            path: "contact",
            icon: <icons.Mail />,
            hoverIcon: <icons.MailOpen />,
        },
    ];

    const bookProps = {
        pages,
        background: "linear-gradient(135deg, #161e3e 0%, #040111 100%)",
        color: "#b2d6c0",
        navBackground: "#090919",
        navColor: "#b2d6c0",
        navSelectedColor: "#040111",
        navSelectedBackground: "#b2d6c0",
        defaultPath: path,
    };

    return (
        <Book {...bookProps}>
            <Page name="Home">
                <Home />
            </Page>
            <Page name="Clients">
                <Clients clientBackground="#161e3e" />
            </Page>
            <Page name="About Me">
                <About />
            </Page>
            <Page name="Resume">
                <Resume />
            </Page>
            <Page name="Contact">
                <Contact />
            </Page>
        </Book>
    );
}
