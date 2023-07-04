import Link from "next/link";

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

export default function Page() {
    return (
        <main className="flex h-screen w-full flex-col overflow-hidden bg-dark p-6">
            <div className="flex h-full w-full flex-col flex-col flex-col items-center justify-center">
                <div className="z-[100] rounded border border-darkBlue bg-dark p-2 sm:p-4">
                    <h1 className="text-3xl font-bold sm:text-5xl">
                        <div className="text-white">ALEX</div>
                        <div className="text-red">LAY-CALVERT</div>
                    </h1>
                    <h2 className="text-sm text-blue-400 md:text-lg">
                        <i>web developer | student | u.s.m.c reservist</i>
                    </h2>
                </div>
                <Link
                    className="z-[100] mt-4 flex items-center justify-center space-x-1 rounded-full border border-dark bg-red px-4 py-1 font-semibold text-white transition-all duration-100 hover:border-red hover:bg-dark hover:text-red"
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                        >
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2zm-5-4v-6" />
                            <path d="M9.5 14.5L12 17l2.5-2.5" />
                        </g>
                    </svg>
                    <div>Resume</div>
                </Link>
            </div>
            <div className="flex w-full items-center justify-center space-x-4 md:space-x-10">
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
        </main>
    );
}
