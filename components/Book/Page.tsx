import Nav from "./Nav";
import * as icons from "../icons";

import styles from "../../styles/Book.module.scss";

interface Props {
    children: React.ReactElement;
    backgroundColor?: string;
    foregroundColor?: string;
    nextPage?: () => void;
    prevPage?: () => void;
    multiplePages?: boolean;
}

export default function Page({
    children,
    backgroundColor,
    foregroundColor,
    nextPage,
    prevPage,
    multiplePages,
}: Props) {
    return (
        <div
            className={styles.page}
            style={{
                backgroundColor,
                color: foregroundColor,
            }}
        >
            {children}
            {multiplePages && (
                <button className={styles.prevPageButton} onClick={prevPage}>
                    <icons.RightArrowColor color={foregroundColor || ""} />
                </button>
            )}
            {multiplePages && (
                <button className={styles.nextPageButton} onClick={nextPage}>
                    <icons.RightArrowColor color={foregroundColor || ""} />
                </button>
            )}
        </div>
    );
}
