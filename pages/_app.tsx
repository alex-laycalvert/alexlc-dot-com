import type { AppProps } from "next/app";
import { Roboto_Flex } from '@next/font/google'
import Layout from './layout'

import "../styles/globals.scss";

const RobotoFlex = Roboto_Flex({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${RobotoFlex.style.fontFamily}
                }
            `}</style>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
