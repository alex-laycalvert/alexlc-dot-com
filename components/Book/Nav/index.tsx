import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import List from "./List";
import type { PageItem } from "./Item";
import * as icons from "../../icons";

import styles from "../../../styles/Book.module.scss";

interface Props {
    pages: PageItem[];
    background: string;
    color: string;
    closedColor: string;
    selectedColor: string;
    selectedBackground: string;
    turnToPage: (name: string) => void;
    currentPage?: string;
}

export default function Nav({
    pages,
    background,
    color,
    selectedColor,
    selectedBackground,
    closedColor,
    turnToPage,
    currentPage,
}: Props) {
    const [expanded, setExpanded] = useState(false);
    const [locked, setLocked] = useState(false);
    const [iconRotate, setIconRotate] = useState(0);

    const onHover = () => {
        if (locked) {
            return;
        }
        setExpanded(true);
    };

    const onLeave = () => {
        if (locked) {
            return;
        }
        setExpanded(false);
    };

    const onIconClick = () => {
        setLocked(!locked);
        setIconRotate(i => Math.abs(i - 180));
    };

    useEffect(() => {
        setIconRotate(Math.abs(iconRotate - 180));
    }, [expanded]);

    return (
        <nav
            className={`${styles.nav} ${expanded ? styles.expanded : ""}`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            style={{
                background,
                color,
            }}
        >
            {expanded && (
                <div className={styles.navLockedIcon}>
                    {locked && <icons.LockThreeLines color={color} />}
                    {!locked && <icons.UnlockThreeLines color={color} />}
                </div>
            )}
            <motion.div
                className={styles.navIcon}
                onClick={onIconClick}
                animate={{
                    rotate: iconRotate,
                }}
            >
                <icons.ThreeLines color={expanded ? color : closedColor} />
            </motion.div>
            <div className={styles.navContent}>
                <List
                    pages={pages}
                    color={color}
                    selectedColor={selectedColor}
                    selectedBackground={selectedBackground}
                    turnToPage={turnToPage}
                    currentPage={currentPage}
                    expanded={expanded}
                />
            </div>
        </nav>
    );
}
