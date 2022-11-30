import styles from "../../../styles/Form.module.scss";

interface Props {
    label?: string;
    width?: number | string;
    height?: number | string;
    onClick?: () => void;
    onChange?: (_e: React.FormEvent) => void;
    submit?: boolean;
    reset?: boolean;
    submitting?: boolean;
    disabled?: boolean;
}

export default function Button({
    label,
    width,
    height,
    onClick,
    submit,
    reset,
    submitting,
    disabled,
}: Props) {
    const getLabel = (): string => {
        if (label) {
            return label;
        }
        if (submit) {
            return "Submit";
        }
        if (reset) {
            return "Clear";
        }
        return "Click Me";
    };

    const getType = () => {
        if (submit) {
            return "submit";
        }
        if (reset) {
            return "reset";
        }
        return "button";
    };

    return (
        <button
            className={`${styles.button} ${styles[getType()]} ${
                disabled || submitting ? styles.disabled : ""
            }`}
            type={getType()}
            onClick={onClick}
            style={{
                width,
                height,
            }}
            disabled={disabled || submitting}
        >
            <span className={styles.buttonText}>{getLabel()}</span>
        </button>
    );
}
