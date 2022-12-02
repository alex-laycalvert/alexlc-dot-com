import Link from "next/link";
import { useRef, useState } from "react";
import Typewriter from "typewriter-effect";

import styles from "../../../styles/Book.module.scss";

export interface PageItem {
    name: string;
    path: string;
    icon: React.ReactNode;
    hoverIcon?: React.ReactNode;
}

interface Props {
    item: PageItem;
    color: string;
    selectedColor: string;
    selectedBackground: string;
    isCurrentPage?: boolean;
    expanded: boolean;
    onNavigate: () => void;
}

export default function Item({
    item,
    color,
    selectedColor,
    selectedBackground,
    expanded,
    onNavigate,
}: Props) {
    const ref = useRef<HTMLLIElement>(null);
    const [hovering, setHovering] = useState(false);

    const onHover = () => {
        setHovering(true);
    };

    const onLeave = () => {
        setHovering(false);
    };

    return (
        <li ref={ref} className={styles.navItem} onMouseEnter={onHover} onMouseLeave={onLeave}>
            <Link
                className={styles.navItemLink}
                href={item.path}
                onClick={onNavigate}
                style={{ background: hovering ? selectedBackground : "" }}
            >
                <div
                    className={styles.navItemIcon}
                    style={{ color: hovering ? selectedColor : color }}
                >
                    {hovering && <>{item.hoverIcon ?? item.icon}</>}
                    {!hovering && <>{item.icon}</>}
                </div>
                {expanded && (
                    <div
                        className={styles.navItemText}
                        style={{ color: hovering ? selectedColor : color }}
                    >
                        <Typewriter
                            options={{
                                delay: 60,
                            }}
                            onInit={(typewriter) => {
                                typewriter.start().typeString(item.name);
                            }}
                        />
                    </div>
                )}
            </Link>
        </li>
    );
}
