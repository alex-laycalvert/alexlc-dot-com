import { useRouter } from "next/router";
import PageBook from "../components/PageBook";
export default function Main() {
    const {
        query: { path },
    } = useRouter();

    return <PageBook path={path as string} />;
}
