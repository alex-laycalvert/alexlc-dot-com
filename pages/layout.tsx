import Head from "next/head";

import styles from "../styles/Layout.module.scss";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Head>
                <title>AL Development</title>
                <meta name="description" content="AL Development - Alex L-C" />
                <meta
                    name="keywords"
                    content="AL Development, AL Develop, aldevelop.com, aldevelopment, aldevelop, Alex LC, Alex, L-C, Alexander Lay-Calvert, Alexander Laycalvert, Alex Laycalvert, Dev, Development, Web, Web Dev, Web App, Application, Alex Lay-Calvert, Alex, Alexander, Node, Javascript, Typescript, Contracting"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.pageWrapper}>{children}</div>
            </main>
        </>
    );
}
