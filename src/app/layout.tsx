import InteractiveBackground from "@/components/InteractiveBackground";
import Link from "next/link";

import "@/styles/globals.css";

type Props = {
    children: React.ReactNode;
};

export const metadata = {
    title: "Alex L-C",
    description: "All about me",
};

const links = [
    {
        href: "https://github.com/alex-laycalvert",
        icon: (
            <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
            />
        ),
    },
    {
        href: "https://twitter.com/alex_layc",
        icon: (
            <path
                fill="currentColor"
                d="M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7ZM5.72 10.69c3.1 0 4.8-2.57 4.8-4.8v-.22c.33-.24.62-.54.84-.88c-.3.13-.63.22-.97.27c.35-.21.62-.54.74-.93c-.33.19-.69.33-1.07.41c-.31-.33-.75-.53-1.23-.53c-.93 0-1.69.76-1.69 1.69c0 .13.01.26.05.38c-1.4-.07-2.65-.74-3.48-1.76c-.14.25-.23.54-.23.85c0 .58.3 1.1.75 1.4c-.28 0-.54-.08-.76-.21v.02c0 .82.58 1.5 1.35 1.66c-.14.04-.29.06-.44.06c-.11 0-.21-.01-.32-.03c.21.67.84 1.16 1.57 1.17c-.58.45-1.31.72-2.1.72c-.14 0-.27 0-.4-.02c.74.48 1.63.76 2.58.76"
            />
        ),
    },
    {
        href: "https://www.linkedin.com/in/alexander-lay-calvert-2179501b4/",
        icon: (
            <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
            />
        ),
    },
    {
        href: "mailto://alex@aldevelop.com",
        icon: (
            <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            >
                <path d="M0 0h24v24H0z" />
                <path
                    fill="currentColor"
                    d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066L22 7.535z"
                />
                <path
                    fill="currentColor"
                    d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a2.999 2.999 0 0 1 2.354-1.42L5 4h14z"
                />
            </g>
        ),
    },
];

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body className="overflow-y-auto font-raleway">
                {children}
                <InteractiveBackground />
                <div className="fixed bottom-4 left-1/2 z-[100] flex translate-x-[-50%] items-center justify-center space-x-4 md:space-x-10">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            className="z-[100] text-gray-500 transition-all hover:scale-[1.1] hover:text-red"
                        >
                            <svg
                                className="h-8 w-8 rounded-full bg-dark sm:h-12 sm:w-12"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {l.icon}
                            </svg>
                        </Link>
                    ))}
                </div>
            </body>
        </html>
    );
}
