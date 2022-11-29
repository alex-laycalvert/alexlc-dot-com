import { ReactElement, cloneElement, useEffect, useState } from "react";
//import PageContainer from "./PageContainer";

import styles from "../../styles/Book.module.scss";

interface Props {
    children: ReactElement[] | ReactElement;
}

export default function Book({ children }: Props) {
    const [currentPage, setCurrentPage] = useState<ReactElement>();
    const [currentPageIndex, setCurrentPageIndex] = useState(-1);

    const prevPage = () => {
        if (!Array.isArray(children)) {
            return;
        }
        if (currentPageIndex - 1 < 0) {
            setCurrentPageIndex(children.length - 1);
            return;
        }
        setCurrentPageIndex(currentPageIndex - 1);
    };

    const nextPage = () => {
        if (!Array.isArray(children)) {
            return;
        }
        setCurrentPageIndex((currentPageIndex + 1) % children.length);
    };

    useEffect(() => {
        if (Array.isArray(children)) {
            setCurrentPageIndex(0);
            setCurrentPage(children[currentPageIndex]);
            return;
        }
        setCurrentPage(children);
    }, []);

    useEffect(() => {
        if (currentPageIndex < 0 || !Array.isArray(children)) {
            return;
        }
        setCurrentPage(children[currentPageIndex]);
    }, [currentPageIndex]);

    if (!currentPage) {
        return <></>;
    }

    return (
        <div className={styles.book}>
            {cloneElement(currentPage, {
                nextPage,
                prevPage,
                multiplePages: Array.isArray(children) && children.length > 1,
            })}
        </div>
    );
}
