import Book from "../components/Book";
import Page from "../components/Book/Page";
import Home from "../components/Home";
import Clients from "../components/Clients";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import * as icons from "../components/icons";

export default function Main() {
    const pages = [
        {
            name: "Home",
            icon: <icons.Home />
        },
        {
            name: "Clients",
            icon: <icons.Users />
        },
        {
            name: "Projects",
            icon: <icons.RotatingGear />,
        },
        {
            name: "Resume",
            icon: <icons.Resume />
        },
        {
            name: "Contact",
            icon: <icons.Mail />,
            hoverIcon: <icons.MailOpen />
        },
    ]

    return (
        <Book pages={pages}>
            <Page
                name="Home"
                background="linear-gradient(135deg, #161e3e 0%, #040111 100%)"
                color="#b2d6c0"
                navBackground="#090919"
                navColor="#b2d6c0"
                navSelectedColor="#040111"
                navSelectedBackground="#b2d6c0"
            >
                <Home />
            </Page>
            <Page
                name="Clients"
                background="#ed6a5a"
                color="#003844"
                navBackground="#003844"
                navColor="#edb45a"
                navClosedColor="#003844"
                navSelectedColor="#003844"
                navSelectedBackground="#edb45a"
            >
                <Clients />
            </Page>
            <Page name="Resume" background="#000000" color="#ffffff">
                <Resume />
            </Page>
            <Page name="Contact" background="#ed6a5a" color="#003844">
                <Contact />
            </Page>
            <Page name="Projects">
                <></>
            </Page>
        </Book>
    );
}
