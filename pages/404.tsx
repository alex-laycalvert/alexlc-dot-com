import Link from "next/link";

import "../styles/404.module.scss";

export default function PageNotFound() {
    return (
        <>
            Page not found. <Link href="/">Return to home</Link>
        </>
    );
}
