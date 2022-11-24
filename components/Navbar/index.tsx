import Link from "next/link";
import { ThreeLines } from "../icons";
import { v4 as uuid } from "uuid";

import styles from "../../styles/Navbar.module.scss";

type NavLink = {
    name: string;
    route: string;
};

interface Props {
    showDropdown: boolean;
    toggleShowDropdown: () => void;
}

export default function Navbar({ showDropdown, toggleShowDropdown }: Props) {
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

    const navbarClick = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        toggleShowDropdown();
    };

    return (
        <nav className={styles.ALNavbar}>
            <div className={styles.dropdownLinks}>
                <button className={styles.dropdownButton} onClick={navbarClick}>
                    <ThreeLines />
                </button>
                {showDropdown && (
                    <div className={styles.dropdownMenu}>
                        <ul className={styles.navLinks}>
                            {pages.map((page) => {
                                return (
                                    <li key={uuid()} className={styles.navLink}>
                                        <Link href={page.route}>{page.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
            <ul className={styles.navLinks}>
                {pages.map((page, i, arr) => {
                    return (
                        <>
                            <li key={uuid()} className={styles.navLink}>
                                <Link href={page.route}>{page.name}</Link>
                            </li>
                            {i !== arr.length - 1 && <div key={uuid()} className={styles.dotSeparator}>.</div>}
                        </>
                    );
                })}
            </ul>
        </nav>
    );
}
