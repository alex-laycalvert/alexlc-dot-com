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
            icon: <icons.Home />,
        },
        //{
        //    name: "Clients",
        //    icon: <icons.Users />,
        //},
        //{
        //    name: "Projects",
        //    icon: <icons.RotatingGear />,
        //},
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

    const pageProps = {
        background: "linear-gradient(135deg, #161e3e 0%, #040111 100%)",
        color: "#b2d6c0",
        navBackground: "#090919",
        navColor: "#b2d6c0",
        navSelectedColor: "#040111",
        navSelectedBackground: "#b2d6c0",
    };

    return (
        <Book pages={pages}>
            <Page name="Home" {...pageProps}>
                <Home />
            </Page>
            <Page name="Clients" {...pageProps}>
                <Clients />
            </Page>
            <Page name="Projects" {...pageProps}>
                <></>
            </Page>
            <Page name="Resume" {...pageProps}>
                <Resume />
            </Page>
            <Page name="Contact" {...pageProps}>
                <Contact />
            </Page>
        </Book>
    );
}
