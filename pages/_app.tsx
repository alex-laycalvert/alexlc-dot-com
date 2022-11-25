import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";

import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>AL Development</title>
                <meta name="description" content="AL Development - Alex L-C" />
                <meta
                    name="keywords"
                    content="Dev, Development, Web, Web Dev, Web App, Application, Alex Lay-Calvert, Alex, Alexander, Node, Javascript, Typescript, Contracting"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <Component {...pageProps} />
            </main>
        </>
    );
}
