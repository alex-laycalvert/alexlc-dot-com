import Book from "../components/Book";
import Page from "../components/Book/Page";
import Home from "../components/Home";
import Clients from "../components/Clients";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import About from "../components/About";
import * as icons from "../components/icons";

export default function Main() {
    const pages = [
        {
            name: "Home",
            icon: <icons.Home />,
        },
        {
            name: "Clients",
            icon: <icons.Users />,
        },
        {
            name: "About Me",
            icon: <icons.User />,
            hoverIcon: <icons.UserDetail />,
        },
        {
            name: "Resume",
            icon: <icons.Resume />,
        },
        {
            name: "Contact",
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
