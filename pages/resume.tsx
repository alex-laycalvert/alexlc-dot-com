import Article from "../components/Article";

import styles from "../styles/Resume.module.scss";

export default function Resume() {
    return (
        <Article>
            <div className={styles.container}>
                <object
                    className={styles.resumeFrame}
                    data="/assets/documents/resume.pdf"
                    type="application/pdf"
                />
            </div>
        </Article>
    );
}
