import { useState } from "react";
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
    currentPage?: string;
}

export default function Nav({
    pages,
    background,
    color,
    selectedColor,
    selectedBackground,
    closedColor,
    currentPage,
}: Props) {
    const [expanded, setExpanded] = useState(false);
    const [locked, setLocked] = useState(false);

    const onMobile = window?.innerWidth < 800;

    const onHover = () => {
        if (locked || onMobile) {
            return;
        }
        setExpanded(true);
    };

    const onLeave = () => {
        if (locked || onMobile) {
            return;
        }
        setExpanded(false);
    };

    const onIconClick = () => {
        if (!onMobile) {
            setLocked(!locked);
            return;
        }
        setExpanded(!expanded);
    };

    const onNavigate = () => {
        if (!onMobile) {
            return;
        }
        setExpanded(false);
    }

    return (
        <nav
            className={`${styles.nav} ${expanded ? styles.expanded : ""} ${
                locked ? styles.locked : ""
            }`}
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
            <div className={styles.navIcon} onClick={onIconClick}>
                {(!onMobile || !expanded) && <icons.ThreeLines color={expanded ? color : closedColor} />}
                {onMobile && expanded && <icons.CloseX />}
            </div>
            <div className={styles.navContent}>
                <List
                    pages={pages}
                    color={color}
                    selectedColor={selectedColor}
                    selectedBackground={selectedBackground}
                    currentPage={currentPage}
                    expanded={expanded}
                    onNavigate={onNavigate}
                />
            </div>
        </nav>
    );
}
