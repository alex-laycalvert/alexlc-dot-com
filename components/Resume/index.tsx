import { useEffect } from "react";
import Image from "next/image";
import { Button } from "../Form/";

import styles from "../../styles/Resume.module.scss";
import Link from "next/link";

export default function Resume() {
    const parseResume = async () => {};

    useEffect(() => {
        parseResume();
    }, []);

    return (
        <div className={styles.container + " drag"}>
            <div className={styles.resumeWrapper}>
                <h2 className={styles.resumeHeaderText}>My Resume</h2>
                <Link
                    className={styles.buttonLink}
                    href="/assets/documents/resume.pdf"
                    target="_blank"
                    download="Alex_Lay-Calvert_Resume"
                >
                    <Button width="100%" label="Download a Copy" submit />
                </Link>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.resumeImage}
                        src="/assets/documents/resume-0.jpg"
                        alt="Alex L-C Resume Page 1"
                        height={100}
                        width={350}
                    />
                    <Image
                        className={styles.resumeImage}
                        src="/assets/documents/resume-1.jpg"
                        alt="Alex L-C Resume Page 2"
                        height={100}
                        width={350}
                    />
                </div>
            </div>
        </div>
    );
}
