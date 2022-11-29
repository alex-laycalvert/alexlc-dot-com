import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as icons from "../icons";

import styles from "../../styles/Book.module.scss";

interface Props {
    pages: string[];
    backgroundColor?: string;
    foregroundColor?: string;
    selectedColor?: string;
}

export default function Nav({ pages, backgroundColor, foregroundColor, selectedColor }: Props) {
    const [expanded, setExpanded] = useState(false);
    const [locked, setLocked] = useState(false);
    const [iconRotate, setIconRotate] = useState(0);
    const [width, setWidth] = useState(0);

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
            setWidth(200);
            return
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
                <icons.ThreeLines color={foregroundColor} />
            </motion.div>
            {expanded && (
                <div className={styles.navLockedIcon}>
                    {locked && <icons.LockThreeLines color={foregroundColor} />}
                    {!locked && <icons.UnlockThreeLines color={foregroundColor} />}
                </div>
            )}
            <motion.div
                className={styles.navContent}
                style={{
                    background: backgroundColor,
                    color: foregroundColor,
                }}
                animate={{
                    width,
                }}
            ></motion.div>
        </nav>
    );
}
