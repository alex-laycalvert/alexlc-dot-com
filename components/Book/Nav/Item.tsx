import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Typewriter from "typewriter-effect";

import styles from "../../../styles/Book.module.scss";

export interface PageItem {
    name: string;
    icon: React.ReactNode;
    hoverIcon?: React.ReactNode;
}

interface Props {
    item: PageItem;
    color: string;
    selectedColor: string;
    selectedBackground: string;
    turnToPage: (name: string) => void;
    isCurrentPage?: boolean;
    expanded: boolean;
}

export default function Item({
    item,
    color,
    selectedColor,
    selectedBackground,
    turnToPage,
    expanded,
}: Props) {
    const ref = useRef<HTMLLIElement>(null);
    const [icon, setIcon] = useState(item.icon);
    const [scale, setScale] = useState(1);
    const [backgroundWidth, setBackgroundWidth] = useState(0);
    const [itemColor, setItemColor] = useState(color);

    const onHover = () => {
        setIcon(item.hoverIcon ?? item.icon);
        setScale(1.1);
        setBackgroundWidth(150);
        setItemColor(selectedColor);
    };

    const onLeave = () => {
        setIcon(item.icon);
        setScale(1);
        setBackgroundWidth(0);
        setItemColor(color);
    };

    const onClick = () => {
        turnToPage(item.name);
    };

    return (
        <motion.li
            ref={ref}
            className={styles.navItem}
            onHoverStart={onHover}
            onHoverEnd={onLeave}
            animate={{
                scale,
            }}
        >
            <button className={styles.navItemButton} onClick={onClick}>
                <div
                    className={styles.navItemBackground}
                    style={{
                        height: (ref.current?.clientHeight ?? 0) + 10,
                    }}
                >
                    <motion.div
                        className={styles.navItemBackgroundBody}
                        animate={{
                            width: backgroundWidth,
                        }}
                        style={{
                            background: selectedBackground,
                        }}
                    />
                    <div
                        className={styles.navItemBackgroundTriangle}
                        style={{
                            borderWidth: `${((ref.current?.clientHeight ?? 0) + 10.5) / 2}px`,
                            borderLeftColor: selectedBackground,
                            display: backgroundWidth === 0 ? "none" : "block",
                        }}
                    />
                </div>
                <div className={styles.navItemIcon} style={{ color: itemColor }}>
                    {icon}
                </div>
                {expanded && (
                    <div className={styles.navItemText} style={{ color: itemColor }}>
                        <Typewriter
                            options={{
                                delay: 60
                            }}
                            onInit={(typewriter) => {
                                typewriter.start().typeString(item.name)
                            }}
                        />
                    </div>
                )}
            </button>
        </motion.li>
    );
}
