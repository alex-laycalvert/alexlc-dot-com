import Form, { FormRow, Text, Button } from "../Form";

import styles from "../../styles/Contact.module.scss";

export default function Contact() {
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

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>Contact Me</h2>
                <Form onSubmit={onSubmit}>
                    <FormRow>
                        <Text
                            name="firstName"
                            label="First Name"
                            placeHolder="First Name"
                            required
                        />
                        <Text name="lastName" label="Last Name" placeHolder="Last Name" required />
                    </FormRow>
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
        </div>
    );
}
