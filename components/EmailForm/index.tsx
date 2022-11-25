import { FormEvent, useRef, useState } from "react";
import styles from "../../styles/EmailForm.module.scss";
import { Clipboard, ClipboardCheck, CloseX } from "../icons";

interface EmailData {
    name: string;
    email: string;
    subject: string;
    body: string;
}

export default function EmailForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const [emailData, setEmailData] = useState<EmailData>({
        name: "",
        email: "",
        subject: "",
        body: "",
    });
    const [sending, setSending] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showErrorNotification, setShowErrorNotification] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const onSubmit = async (e: FormEvent) => {
        setSending(true);
        try {
            e.preventDefault();
            let url = process.env.API_URL || "http://localhost:";
            url += process.env.PORT || 3000;
            url += "/api/email";
            const response = await fetch(url, {
                method: "post",
                body: JSON.stringify(emailData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const json = await response.json();
                throw new Error(json.error);
            }
            console.log(response);
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 5000);
            clearForm();
        } catch (e) {
            console.error(e);
            setShowErrorNotification(true);
            setTimeout(() => {
                setShowErrorNotification(false);
            }, 5000);
        }
        setSending(false);
    };

    const clearForm = () => {
        if (!formRef.current) {
            return;
        }
        formRef.current.reset();
    };

    const onChange = (e: any) => {
        if (!e.target) {
            return;
        }
        setEmailData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const closeNotification = () => {
        setShowNotification(false);
        setShowErrorNotification(false);
    };

    const onClickEmail = () => {
        navigator.clipboard.writeText("alex@aldevelop.com");
        setCopiedEmail(true);
        setTimeout(() => {
            setCopiedEmail(false);
        }, 3000);
    };

    return (
        <div className={styles.emailFormWrapper}>
            <form ref={formRef} className={styles.emailForm} action="none" onSubmit={onSubmit}>
                <div className={styles.inputWrapper}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="name"
                        name="name"
                        placeholder="Name"
                        onChange={onChange}
                        required
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={onChange}
                        required
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        onChange={onChange}
                        required
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="body">Message</label>
                    <textarea name="body" placeholder="Message" onChange={onChange} required />
                </div>
                <div className={styles.buttonWrapper}>
                    <button
                        className={`${styles.sendEmailButton} ${
                            sending ? styles.disabledButton : ""
                        }`}
                        type="submit"
                        disabled={sending}
                    >
                        Send
                    </button>
                    <button
                        className={`${styles.resetFormButton} ${
                            sending ? styles.disabledButton : ""
                        }`}
                        type="reset"
                        disabled={sending}
                    >
                        Clear
                    </button>
                </div>
            </form>
            {showNotification && (
                <div className={styles.emailNotification}>
                    Email sent successfully!
                    <button className={styles.closeNotificationButton} onClick={closeNotification}>
                        <CloseX />
                    </button>
                </div>
            )}
            {showErrorNotification && (
                <div className={styles.emailErrorNotification}>
                    <div className={styles.emailErrorText}>
                        Email failed to send. Please contact&nbsp;
                        <button className={styles.notificationEmailLink} onClick={onClickEmail}>
                            alex@aldevelop.com
                            {!copiedEmail && <Clipboard />}
                            {copiedEmail && <ClipboardCheck />}
                        </button>
                    </div>
                    <button className={styles.closeNotificationButton} onClick={closeNotification}>
                        <CloseX />
                    </button>
                </div>
            )}
        </div>
    );
}
