import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo
                title="AL Development"
                description="AL Development - Freelance Web Development for your organization. Specialized in Node.js applications. Contact Alex Lay-Calvert at alex@aldevelop.com for more info."
                canonical="https://aldevelop.com"
                openGraph={{
                    url: "https://aldevelop.com",
                    title: "AL Development",
                    description:
                        "AL Development - Freelance Web Development for your organization. Specialized in Node.js applications. Contact Alex Lay-Calvert at alex@aldevelop.com for more info.",
                    images: [
                        {
                            url: "https://aldevelop.com/assets/images/logo.png",
                            width: 600,
                            height: 600,
                            alt: "AL Development Logo",
                            type: "image/png",
                        },
                        { url: "https://aldevelop.com/assets/images/headshot.jpg" },
                    ],
                    siteName: "AL Development",
                    profile: {
                        firstName: "Alexander",
                        lastName: "Lay-Calvert",
                        gender: "Male",
                        username: "laycalva",
                    },
                }}
            />
            <Component {...pageProps} />
        </>
    );
}
