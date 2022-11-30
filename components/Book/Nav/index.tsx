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
}

export default function Nav({
    pages,
    background,
    color,
    selectedColor,
    selectedBackground,
    closedColor,
    turnToPage,
}: Props) {
    const [expanded, setExpanded] = useState(false);
    const [locked, setLocked] = useState(false);
    const [iconRotate, setIconRotate] = useState(0);
    const [width, setWidth] = useState<number | "auto">(0);

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
        setIconRotate(Math.abs(iconRotate - 180));
    };

    useEffect(() => {
        setIconRotate(Math.abs(iconRotate - 180));
        if (expanded) {
            setWidth("auto");
            return;
        }
        setWidth(0);
    }, [expanded]);

    return (
        <nav className={styles.nav} onMouseLeave={onLeave}>
            <motion.div
                className={styles.navIcon}
                onMouseEnter={onHover}
                onClick={onIconClick}
                animate={{
                    rotate: iconRotate,
                }}
            >
                <icons.ThreeLines color={expanded ? color : closedColor} />
            </motion.div>
            {expanded && (
                <div className={styles.navLockedIcon}>
                    {locked && <icons.LockThreeLines color={color} />}
                    {!locked && <icons.UnlockThreeLines color={color} />}
                </div>
            )}
            <motion.div
                className={styles.navContent}
                style={{
                    background,
                    color,
                }}
                animate={{
                    width,
                }}
            >
                {expanded && (
                    <List
                        pages={pages}
                        color={color}
                        selectedColor={selectedColor}
                        selectedBackground={selectedBackground}
                        turnToPage={turnToPage}
                    />
                )}
            </motion.div>
        </nav>
    );
}
