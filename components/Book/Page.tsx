import { DragControls, motion, useDragControls } from "framer-motion";
import styles from "../../styles/Book.module.scss";

interface Props {
    children: React.ReactElement;
    name: string;
    background?: string;
    color?: string;
    nextPage?: () => void;
    prevPage?: () => void;
    currentPageIndex?: number;
    direction?: number;
    variants?: any;
    dragControls?: DragControls;
    swipePower?: (offset: number, velocity: number) => number;
    swipeConfidenceThreshold?: number;
}

export default function Page({
    name,
    children,
    background,
    color,
    nextPage,
    prevPage,
    currentPageIndex,
    direction,
    dragControls,
    variants,
    swipePower,
    swipeConfidenceThreshold,
}: Props) {
    return (
        <motion.article
            key={currentPageIndex}
            id={name}
            custom={direction}
            className={styles.page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
                color,
                background,
            }}
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            dragControls={dragControls}
            dragListener={false}
            onPointerDown={(e: any) => {
                if (e.target.classList.contains("drag")) {
                    dragControls?.start(e);
                }
            }}
            onDragEnd={(_e, { offset, velocity }) => {
                if (!nextPage || !prevPage || !swipePower || !swipeConfidenceThreshold) {
                    return;
                }
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                    nextPage();
                } else if (swipe > swipeConfidenceThreshold) {
                    prevPage();
                }
            }}
        >
            {children}
        </motion.article>
    );
}
