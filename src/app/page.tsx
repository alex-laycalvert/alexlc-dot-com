import Space from "@/components/Space";
import TitleTypewriter from "@/components/TitleTypewriter";

type Props = {
    searchParams: { page?: string };
};

const Home = ({ searchParams }: Props) => {
    if (!searchParams.page) {
        searchParams.page = "home";
    }

    return (
        <main className="h-full w-full">
            <Space />
            <h1 className="absolute top-[40%] left-[40%] p-4">
                    <TitleTypewriter />
            </h1>
        </main>
    );
};

export default Home;
