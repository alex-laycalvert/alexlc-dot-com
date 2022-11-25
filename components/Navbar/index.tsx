import Link from "next/link";
import { ThreeLines } from "../icons";
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
        {
            name: "Clients",
            route: "/clients",
        },
        {
            name: "Resume",
            route: "/resume",
        },
    ];

    return (
        <nav className={styles.ALNavbar}>
            <div className={styles.dropdownMenu}>
                <button className={styles.dropdownButton}>
                    <ThreeLines />
                </button>
                <ul className={styles.dropdownLinks}>
                    {pages.map((page) => {
                        return (
                            <li key={uuid()} className={styles.navLink}>
                                <Link href={page.route}>{page.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <ul className={styles.navLinks}>
                {pages.map((page, i, arr) => {
                    return (
                        <li key={uuid()} className={styles.navLinkItem}>
                            <Link className={styles.navLink} href={page.route}>
                                {page.name}
                            </Link>
                            {i !== arr.length - 1 && (
                                <div key={uuid()} className={styles.dotSeparator}>
                                    .
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
