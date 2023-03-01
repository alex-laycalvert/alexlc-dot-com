declare namespace JSX {
    interface IntrinsicElements {
        "call-us-selector": any;
        script: JSX.IntrinsicElements.script & {
            defer: string | boolean | undefined;
        };
    }
}

interface EmailData {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    body: string;
}

interface ClientInfo {
    id: string;
    name: string;
    logo: string;
    desc: string;
    link: string;
}
