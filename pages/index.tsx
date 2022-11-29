import Book from "../components/Book";
import Page from "../components/Book/Page";
import Home from "../components/Home";
import Clients from "../components/Clients";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default function Main() {
    return (
        <Book pages={["Home", "Clients", "Resume", "Contact"]}>
            <Page
                name="Home"
                backgroundColor="linear-gradient(135deg, #161e3e 0%, #040111 100%)"
                foregroundColor="#b2d6c0"
                navBackgroundColor="#090919"
                navForegroundColor="#b2d6c0"
                dimOnNavOpen
            >
                <Home />
            </Page>
            <Page name="Clients" backgroundColor="#ED6A5A" foregroundColor="#003844">
                <Clients />
            </Page>
            <Page name="Resume" backgroundColor="#000000" foregroundColor="#FFFFFF">
                <Resume />
            </Page>
            <Page name="Contact" backgroundColor="#ED6A5A" foregroundColor="#003844">
                <Contact />
            </Page>
        </Book>
    );
}
