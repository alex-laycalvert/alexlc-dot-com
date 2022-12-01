import { ReactElement, cloneElement, useEffect, useState } from "react";
import { AnimatePresence, useDragControls } from "framer-motion";
import type { PageItem } from "./Nav/Item";
import Nav from "./Nav";
import * as icons from "../icons";

import styles from "../../styles/Book.module.scss";

const xFactor = 1000;

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? xFactor : -xFactor,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? xFactor : -xFactor,
            opacity: 0,
        };
    },
};

const swipeConfidenceThreshold = 1000;

const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

interface Props {
    children: ReactElement[] | ReactElement;
    pages: PageItem[];
    background?: string;
    color?: string;
    navBackground?: string;
    navColor?: string;
    navClosedColor?: string;
    navSelectedColor?: string;
    navSelectedBackground?: string;
}


export default function Book({
    children,
    pages,
    background,
    color,
    navBackground,
    navColor,
    navClosedColor,
    navSelectedColor,
    navSelectedBackground,
}: Props) {
    const [currentPage, setCurrentPage] = useState<ReactElement>();
    const [currentPageIndex, setCurrentPageIndex] = useState(-1);
    const [direction, setDirection] = useState(0);

    const dragControls = useDragControls();

    const prevPage = () => {
        if (!Array.isArray(children)) {
            return;
        }
        if (currentPageIndex - 1 < 0) {
            setCurrentPageIndex(children?.length - 1);
            return;
        }
        setDirection(-1);
        setCurrentPageIndex(currentPageIndex - 1);
    };

    const nextPage = () => {
        if (!Array.isArray(children)) {
            return;
        }
        setDirection(1);
        setCurrentPageIndex((currentPageIndex + 1) % children?.length);
    };

    const turnToPage = (name: string) => {
        if (!pages || pages.length < 1 || !Array.isArray(children)) {
            return;
        }
        const pageIndex = children.findIndex((c) => c.props?.name === name);
        if (pageIndex) {
            if (pageIndex > currentPageIndex) {
                setDirection(1);
            } else {
                setDirection(-1);
            }
            setCurrentPageIndex(pageIndex);
            return;
        }
        const index = pages.findIndex((p) => p.name === name);
        if (index < 0) {
            return;
        }
        if (index > currentPageIndex) {
            setDirection(1);
        } else {
            setDirection(-1);
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
            <Nav
                pages={pages}
                background={navBackground ?? color ?? ""}
                color={navColor ?? background ?? ""}
                closedColor={navClosedColor ?? navColor ?? ""}
                selectedColor={navSelectedColor ?? navColor ?? ""}
                selectedBackground={navSelectedBackground ?? navBackground ?? ""}
                turnToPage={turnToPage ?? ((_) => {})}
                currentPage={currentPage.props.name}
            />
            <div
                className={styles.pagesWrapper}
                style={{
                    background,
                }}
            >
                <AnimatePresence initial={false} custom={direction}>
                    {cloneElement(currentPage, {
                        pages,
                        color,
                        background,
                        nextPage,
                        prevPage,
                        currentPageIndex,
                        direction,
                        variants,
                        dragControls,
                        swipePower,
                        swipeConfidenceThreshold,
                    })}
                </AnimatePresence>
            </div>
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
        </div>
    );
}
