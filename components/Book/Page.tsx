import Nav from "./Nav";
import type { PageItem } from "./Nav/Item";
import * as icons from "../icons";

import styles from "../../styles/Book.module.scss";

interface Props {
    children: React.ReactElement;
    name: string;
    background?: string;
    color?: string;
    navBackground?: string;
    navColor?: string;
    navClosedColor?: string;
    navSelectedColor?: string;
    navSelectedBackground?: string;
    pages?: PageItem[];
    nextPage?: () => void;
    prevPage?: () => void;
    turnToPage?: (name: string) => void;
    currentPage?: string;
}

export default function Page({
    children,
    name,
    background,
    color,
    navBackground,
    navColor,
    navClosedColor,
    navSelectedColor,
    navSelectedBackground,
    pages,
    nextPage,
    prevPage,
    turnToPage,
    currentPage,
}: Props) {
    return (
        <article
            id={name}
            className={styles.page}
            style={{
                background: background,
                color: color,
            }}
        >
            {pages && pages.length > 1 && (
                <Nav
                    pages={pages}
                    background={navBackground ?? color ?? ""}
                    color={navColor ?? background ?? ""}
                    closedColor={navClosedColor ?? navColor ?? ""}
                    selectedColor={navSelectedColor ?? navColor ?? ""}
                    selectedBackground={navSelectedBackground ?? navBackground ?? ""}
                    turnToPage={turnToPage ?? ((_) => {})}
                    currentPage={currentPage}
                />
            )}
            <div className={styles.pageContent}>{children}</div>
            {pages && pages.length > 1 && (
                <button className={styles.prevPageButton} onClick={prevPage}>
                    <icons.RightArrow color={color || ""} />
                </button>
            )}
            {pages && pages.length > 1 && (
                <button className={styles.nextPageButton} onClick={nextPage}>
                    <icons.RightArrow color={color || ""} />
                </button>
            )}
        </article>
    );
}
