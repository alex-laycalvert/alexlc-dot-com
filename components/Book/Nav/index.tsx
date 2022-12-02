import { useState } from "react";
import List from "./List";
import type { PageItem } from "./Item";
import { useDimensions } from "../../../hooks/dimensions";
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
    const [screenWidth, _] = useDimensions();

    const onHover = () => {
        if (locked || screenWidth <= 800) {
            return;
        }
        setExpanded(true);
    };

    const onLeave = () => {
        if (locked || screenWidth <= 800) {
            return;
        }
        setExpanded(false);
    };

    const onIconClick = () => {
        if (screenWidth > 800) {
            setLocked(!locked);
            return;
        }
        setExpanded(!expanded);
    };

    const onNavigate = () => {
        if (screenWidth > 800) {
            return;
        }
        setExpanded(false);
    };

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
                {(screenWidth > 800 || !expanded) && (
                    <icons.ThreeLines color={expanded ? color : closedColor} />
                )}
                {screenWidth <= 800 && expanded && <icons.CloseX />}
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
