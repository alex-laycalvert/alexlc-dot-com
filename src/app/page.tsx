import Image from "next/image";
import Link from "next/link";
import PageSection from "@/components/PageSection";
import BusinessCard from "@/components/BusinessCard";
import GradientText from "@/components/GradientText";

export default function Page() {
    return (
        <main className="overflow-hidden bg-dark">
            <PageSection id="home" center>
                <BusinessCard />
                <Link
                    className="z-[100] mt-4 flex items-center justify-center space-x-1 rounded-full border border-red bg-dark px-4 py-1 font-semibold text-red transition-all duration-200 hover:border-red hover:bg-red hover:text-dark"
                    href="/Resume-Alex-Lay-Calvert.pdf"
                    target="_blank"
                    download
                >
                    <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        >
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2zm-5-4v-6" />
                            <path d="M9.5 14.5L12 17l2.5-2.5" />
                        </g>
                    </svg>
                    <div>Resume</div>
                </Link>
            </PageSection>
            <PageSection id="about" center>
                <div className="flex flex-col items-center space-x-8 lg:flex-row">
                    <Image
                        className="z-[100] mb-10 w-48 rounded border border-darkBlue shadow-lg shadow-darkBlue md:w-80 lg:mb-0"
                        src="/headshot.jpg"
                        alt="headshot"
                        width={614}
                        height={921}
                        priority
                    />
                    <div className="flex h-full w-5/6 flex-col space-y-4 md:w-160">
                        <h2 className="z-[100] text-3xl font-semibold text-white md:text-5xl">
                            Hi, I&apos;m&nbsp;
                            <span className="font-extrabold text-red">
                                Alex
                            </span>
                        </h2>
                        <h3 className="text-sm font-[500] text-gray-200 md:text-base">
                            <i>
                                I don&apos;t know the answer now, but I can
                                guarantee you I will find it.
                            </i>
                        </h3>
                        <hr className="border-red" />
                        <p className="z-[100] text-sm font-[500] !leading-10 text-gray-300 md:text-base">
                            I am a{" "}
                            <b className="text-base text-white">
                                web developer
                            </b>{" "}
                            and currently finishing my Computer Science degree
                            at the{" "}
                            <GradientText
                                text="University of South Carolina"
                                link="https://sc.edu/"
                                className="text-base font-bold"
                            />{" "}
                            I also am in the{" "}
                            <b className="text-base text-white">
                                Marine Corps Reserves
                            </b>{" "}
                            as a{" "}
                            <b className="text-base text-white">
                                Data Systems Adminsitrator
                            </b>{" "}
                            so my entire life revolves around technology. I have
                            been working in the tech industry for{" "}
                            <b className="text-base text-white">2 years</b> now
                            and have mainly been focused on{" "}
                            <GradientText
                                text="TypeScript/JavaScript"
                                link="https://www.typescriptlang.org"
                                className="text-base font-bold"
                            />{" "}
                            and frameworks like{" "}
                            <GradientText
                                text="Next.js"
                                link="https://nextjs.org/"
                                className="text-base font-bold"
                            />{" "}
                            and{" "}
                            <GradientText
                                text="React.js"
                                link="https://react.dev/"
                                className="text-base font-bold"
                            />
                            .
                        </p>
                        <div className="!mt-auto z-[100] font-[500] text-white">
                            Clients:{" "}
                            {[
                                {
                                    name: "Essential Personnel",
                                    link: "https://essper.com/",
                                },
                                {
                                    name: "Atlantic Avenue Mortgage",
                                    link: "https://atlanticavenuemortgage.com/",
                                },
                            ].map((c, i, arr) => (
                                <span key={c.name}>
                                    <GradientText
                                        text={c.name}
                                        link={c.link}
                                        className="text-sm font-bold md:text-lg"
                                    />
                                    {i < arr.length - 1 && <>, </>}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </PageSection>
            <div className="h-20"></div>
        </main>
    );
}
