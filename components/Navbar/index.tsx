import { useState } from "react";
import { v4 as uuid } from "uuid";
import * as icons from "../icons";

import styles from "../../styles/Navbar.module.scss";

export default function Navbar() {
    const [expanded, setExpanded] = useState(false);

    const navItems = [
        {
            text: "Home",
            path: "/",
            icon: icons.Home,
        },
        {
            text: "Clients",
            path: "/clients",
            icon: icons.Users,
        },
        {
            text: "Resume",
            path: "/resume",
            icon: icons.Resume,
        },
    ];

    const onNavIconClick = () => {
        setExpanded(!expanded);
    };

    return (
        <nav className={`${styles.nav} ${expanded ? styles.expanded : ""}`}>
            <button className={styles.navIcon} onClick={onNavIconClick}>
                <icons.ThreeLines />
            </button>
            {!expanded && <div className={styles.navLockedIcon}>
                <icons.UnlockThreeLines />
            </div>}
            {expanded && <div className={styles.navLockedIcon}>
                <icons.LockThreeLines />
            </div>}
            <hr className={styles.navDivider} />
            <div className={styles.navContent}>
                {navItems.map((item) => (
                    <div key={uuid()} className={styles.navItem}>
                        <div className={styles.navItemIcon}>
                            <item.icon />
                        </div>
                        <div className={styles.navItemText}>{item.text}</div>
                    </div>
                ))}
            </div>
        </nav>
    );
}
