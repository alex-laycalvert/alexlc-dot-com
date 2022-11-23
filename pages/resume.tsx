import Article from "../components/Article";

import styles from "../styles/Resume.module.scss";

export default function Resume() {
    return (
        <Article>
            <div className={styles.container}>
                <iframe className={styles.resumeFrame} src="/assets/documents/resume.pdf" />
            </div>
        </Article>
    );
}
