import { useState } from "react";
import Form, { FormRow, Text, Button } from "../Form";
import { useDimensions } from "../../hooks/dimensions";
import * as icons from "../icons";

import styles from "../../styles/Contact.module.scss";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const [screenWidth, _] = useDimensions();

    const onSubmit = async (data: EmailData) => {
        try {
            const response = await fetch("/api/email", {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                console.log("sent email successfully");
            }
        } catch (e) {}
    };

    const onEmailClick = () => {
        navigator.clipboard.writeText("alex@aldevelop.com");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <div className={styles.contactWrapper}>
            <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>Contact Me</h2>
                <hr className={styles.contactDivider} />
                Want to talk about building your next great idea or just get in contact with me?
                Fill out the form below.
                <br />
                <br />
                <Form onSubmit={onSubmit}>
                    {(screenWidth > 800 && (
                        <FormRow>
                            <Text
                                name="firstName"
                                label="First Name"
                                placeHolder="First Name"
                                required
                            />
                            <Text
                                name="lastName"
                                label="Last Name"
                                placeHolder="Last Name"
                                required
                            />
                        </FormRow>
                    )) || (
                        <>
                            <FormRow>
                                <Text
                                    name="firstName"
                                    label="First Name"
                                    placeHolder="First Name"
                                    required
                                />
                            </FormRow>
                            <FormRow>
                                <Text
                                    name="lastName"
                                    label="Last Name"
                                    placeHolder="Last Name"
                                    required
                                />
                            </FormRow>
                        </>
                    )}
                    <FormRow>
                        <Text name="email" label="Email" placeHolder="Email" email required />
                    </FormRow>
                    <FormRow>
                        <Text name="subject" label="Subject" placeHolder="Subject" required />
                    </FormRow>
                    <FormRow>
                        <Text
                            name="body"
                            label="Message"
                            placeHolder="Message"
                            height={4}
                            area
                            required
                        />
                    </FormRow>
                    <FormRow>
                        <Button label="Send" width="47%" submit />
                        <Button width="47%" reset />
                    </FormRow>
                </Form>
            </div>
            <p className={styles.contactFooter}>
                I typically reply within 24 hours. If you don&apos;t hear back from me, check your
                spam/junk folder or email me directly at&nbsp;
                <span className={styles.emailCopyButton} onClick={onEmailClick}>
                    alex@aldevelop.com
                    <span className={`${styles.emailToolTip} ${copied ? styles.copied : ""}`}>
                        {copied && (
                            <>
                                Email Copied!&nbsp;
                                <icons.ClipboardCheck />
                            </>
                        )}
                        {!copied && (
                            <>
                                Click to copy to clipboard&nbsp;
                                <icons.Clipboard />
                            </>
                        )}
                    </span>
                </span>
            </p>
        </div>
    );
}
