import { motion, MotionValue, useScroll } from "framer-motion";

import styles from "../../styles/Article.module.scss";

interface Props {
    children: JSX.Element | JSX.Element[];
    useScrollProgress?: boolean;
    scrollYProgress?: MotionValue;
}

export default function Article({ children, useScrollProgress, scrollYProgress }: Props) {
    if (!scrollYProgress) {
        scrollYProgress = useScroll().scrollYProgress;
    }

    return (
        <article className={styles.ALArticle}>
            {useScrollProgress && (
                <motion.div className={styles.sideNav} style={{ scaleX: scrollYProgress }} />
            )}
            {children}
        </article>
    );
}
