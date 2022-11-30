import { ReactElement, cloneElement } from "react";
import { v4 as uuid } from "uuid";

import styles from "../../styles/Form.module.scss";

interface Props {
    children: ReactElement | ReactElement[];
    onChange?: (name: string, value: string) => void;
    submitting?: boolean;
}

export default function Row({ children, onChange, submitting }: Props) {
    if (!Array.isArray(children)) {
        return (
            <div className={styles.formRow}>
                {cloneElement(children, {
                    onChange,
                    submitting,
                })}
            </div>
        );
    }

    return (
        <div className={styles.formRow}>
            {children.map((child) =>
                cloneElement(child, {
                    key: uuid(),
                    onChange,
                    submitting,
                })
            )}
        </div>
    );
}
