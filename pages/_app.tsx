import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";

import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleShowDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
            <Head>
                <title>AL Development</title>
                <meta name="description" content="AL Development - Alex L-C" />
                <meta
                    name="keywords"
                    content="Dev, Development, Web, Web Dev, Web App, Application, Alex Lay-Calvert, Alex, Alexander, Node, Javascript, Typescript, Contracting"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                onClick={() => {
                    setShowDropdown(false);
                }}
            >
                <Header showDropdown={showDropdown} toggleShowDropdown={toggleShowDropdown} />
                <Component {...pageProps} />
            </main>
        </>
    );
}
