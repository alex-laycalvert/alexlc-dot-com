import { ReactElement, FormEvent, cloneElement, useState, useRef } from "react";
import { v4 as uuid } from "uuid";

import styles from "../../styles/Form.module.scss";

interface Props {
    children: ReactElement | ReactElement[];
    onSubmit: ((data: any) => void) | ((data: any) => Promise<void>);
}

export default function Form({ children, onSubmit }: Props) {
    const data = useRef<any>({});
    const [submitting, setSubmitting] = useState(false);

    const onFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        await onSubmit(data.current);
        setSubmitting(false);
    };

    const onChange = (name: string, value: string) => {
        data.current[name] = value;
    };

    const formProps = {
        className: styles.form,
        action: "none",
        onSubmit: onFormSubmit,
    };

    if (!Array.isArray(children)) {
        return (
            <form {...formProps}>
                {cloneElement(children, {
                    submitting,
                    onChange,
                })}
            </form>
        );
    }

    return (
        <form {...formProps}>
            {children.map((child) =>
                cloneElement(child, {
                    key: uuid(),
                    submitting,
                    onChange,
                })
            )}
        </form>
    );
}
