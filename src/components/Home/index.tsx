import Typed from "react-typed";
import "./index.scss";
import Navbar from "../Navbar";

const Home = () => {
    return (
        <div className="home">
            <div className="home-title">
                <div className="home-title-typed">
                    <Typed
                        strings={[
                            "Developer",
                            "Student",
                            "U.S. Marine",
                            "Alex Lay-Calvert",
                        ]}
                        typeSpeed={60}
                        backSpeed={80}
                        backDelay={1000}
                    />
                </div>
                <div className="home-title-links">
                    <a href="https://github.com/alex-laycalvert">GitHub</a>
                    <a href="https://www.linkedin.com/in/alexander-lay-calvert-2179501b4/">
                        LinkedIn
                    </a>
                </div>
            </div>
            <div className="home-content">
                <h1>Coming soon to a web browser near you...</h1>
            </div>
        </div>
    );
};

export default Home;
