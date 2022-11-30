import { ReactElement, cloneElement, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PageItem } from "./Nav/Item";

import styles from "../../styles/Book.module.scss";

interface Props {
    children: ReactElement[] | ReactElement;
    pages?: PageItem[];
}

export default function Book({ children, pages }: Props) {
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

    const turnToPage = (name: string) => {
        if (!pages || pages.length < 1 || !Array.isArray(children)) {
            return;
        }
        const pageIndex = children.findIndex((c) => c.props?.name === name);
        if (pageIndex) {
            setCurrentPageIndex(pageIndex);
            return;
        }
        const index = pages.findIndex((p) => p.name === name);
        if (index < 0) {
            return;
        }
        setCurrentPageIndex(index);
    };

    useEffect(() => {
        if (Array.isArray(children)) {
            setCurrentPageIndex(0);
            setCurrentPage(children[currentPageIndex]);
            return;
        }
        setCurrentPage(children);
    }, [children]);

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
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentPageIndex}
                    custom={1}
                    className={styles.pageAnimationWrapper}
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                >
                    {cloneElement(currentPage, {
                        pages,
                        nextPage,
                        prevPage,
                        turnToPage,
                        currentPage: currentPage.props?.name,
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
