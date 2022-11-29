import Nav from "./Nav";
import * as icons from "../icons";

import styles from "../../styles/Book.module.scss";

interface Props {
    children: React.ReactElement;
    name: string;
    backgroundColor?: string;
    foregroundColor?: string;
    navBackgroundColor?: string;
    navForegroundColor?: string;
    pages?: string[];
    nextPage?: () => void;
    prevPage?: () => void;
    dimOnNavOpen?: boolean;
}

export default function Page({
    children,
    backgroundColor,
    foregroundColor,
    navBackgroundColor,
    navForegroundColor,
    pages,
    nextPage,
    prevPage,
}: Props) {
    return (
        <div
            className={styles.page}
            style={{
                background: backgroundColor,
                color: foregroundColor,
            }}
        >
            {pages && pages.length > 1 && (
                <Nav
                    pages={pages}
                    backgroundColor={navBackgroundColor ?? foregroundColor}
                    foregroundColor={navForegroundColor ?? backgroundColor}
                    selectedColor={""}
                />
            )}
            <div className={styles.pageContent}>{children}</div>
            {pages && pages.length > 1 && (
                <button className={styles.prevPageButton} onClick={prevPage}>
                    <icons.RightArrow color={foregroundColor || ""} />
                </button>
            )}
            {pages && pages.length > 1 && (
                <button className={styles.nextPageButton} onClick={nextPage}>
                    <icons.RightArrow color={foregroundColor || ""} />
                </button>
            )}
        </div>
    );
}
