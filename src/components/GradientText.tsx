"use client";

import Link from "next/link";

type Props = {
    className?: string;
    text: string;
    link?: string;
};

const GradientText: React.FC<Props> = ({ className, text, link }) => {
    if (link) {
        return (
            <Link
                href={link}
                target="_blank"
                className={`!bg-clip-text !text-transparent ${
                    className ?? ""
                } bg-gradientText transition-all`}
                onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.setProperty("--r", "50%");
                }}
                onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.setProperty("--r", "0%");
                }}
                onMouseMove={(e) => {
                    const target = e.target as HTMLElement;
                    const { x, y } = target.getBoundingClientRect();
                    target.style.setProperty("--x", `${e.clientX - x}px`);
                    target.style.setProperty("--y", `${e.clientY - y}px`);
                }}
            >
                {text}
            </Link>
        );
    }

    return (
        <span
            className={`bg-gradientText !bg-clip-text !text-transparent ${
                className ?? ""
            }`}
            onMouseMove={(e) => {
                const target = e.target as HTMLElement;
                const { x, y } = target.getBoundingClientRect();
                target.style.setProperty("--x", `${e.clientX - x}px`);
                target.style.setProperty("--y", `${e.clientY - y}px`);
            }}
        >
            {text}
        </span>
    );
};

export default GradientText;
