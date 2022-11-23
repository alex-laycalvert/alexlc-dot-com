import Link from "next/link";
import { v4 as uuid } from "uuid";

import styles from "../../styles/Navbar.module.scss";

type NavLink = {
    name: string;
    route: string;
};

export default function Navbar() {
    const pages: NavLink[] = [
        {
            name: "Home",
            route: "/",
        },
        //{
        //    name: "Projects",
        //    route: "/projects",
        //},
        //{
        //    name: "Clients",
        //    route: "/clients",
        //},
        {
            name: "Resume",
            route: "/resume",
        },
    ];

    return (
        <nav className={styles.ALNavbar}>
            <ul className={styles.navLinks}>
                {pages.map((page, i, arr) => {
                    return (
                        <>
                            <li className={styles.navLink}>
                                <Link href={page.route}>{page.name}</Link>
                            </li>
                            {i !== arr.length - 1 && <div className={styles.dotSeparator}>.</div>}
                        </>
                    );
                })}
            </ul>
        </nav>
    );
}
