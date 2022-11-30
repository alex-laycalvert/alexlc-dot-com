import styles from "../../../styles/Form.module.scss";

interface Props {
    name: string;
    label?: string;
    placeHolder?: string;
    id?: string;
    onChange?: (name: string, value: string) => void;
    number?: boolean;
    decimal?: boolean;
    email?: boolean;
    username?: boolean;
    password?: boolean;
    aName?: boolean;
    area?: boolean;
    width?: number;
    height?: number;
    submitting?: boolean;
    required?: boolean;
}

export default function Text({
    name,
    label,
    placeHolder,
    id,
    onChange,
    number,
    decimal,
    email,
    username,
    password,
    aName,
    area,
    width,
    height,
    required,
}: Props) {
    const getType = (): string => {
        if (number || decimal) {
            return "number";
        }
        if (email) {
            return "email";
        }
        if (username) {
            return "username";
        }
        if (password) {
            return "password";
        }
        if (aName) {
            return "name";
        }
        return "text";
    };

    const getStep = (): string => {
        if (decimal) {
            return "any";
        }
        return "1";
    };

    const onInputChange = (e: any) => {
        if (!onChange) {
            return;
        }
        onChange(e.target.name, e.target.value);
    };

    return (
        <div className={styles.inputWrapper}>
            <label className={styles.inputLabel} htmlFor={name}>
                {label}
            </label>
            {area && (
                <textarea
                    className={`${styles.input} ${styles.textArea}`}
                    name={name}
                    placeholder={placeHolder}
                    id={id}
                    rows={height}
                    cols={width}
                    required={required}
                    onChange={onInputChange}
                />
            )}
            {!area && (
                <input
                    className={`${styles.input} ${styles.text}`}
                    name={name}
                    placeholder={placeHolder}
                    id={id}
                    type={getType()}
                    step={getStep()}
                    onChange={onInputChange}
                    required={required}
                />
            )}
        </div>
    );
}
