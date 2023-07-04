"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
    {
        href: "https://github.com/alex-laycalvert",
        icon: (
            <svg
                className="h-12 w-12 rounded-full bg-dark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                />
            </svg>
        ),
    },
    {
        href: "mailto://alex@aldevelop.com",
        icon: (
            <svg
                className="h-12 w-12 rounded-full bg-dark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
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
            </svg>
        ),
    },
];

export default function Page() {
    const [cellSize /*setCellSize*/] = useState(40);
    const [cellChar, setCellChar] = useState("+");
    const [cellFontSize, setCellFontSize] = useState(1);
    //const [bgColor, setBgColor] = useState("#000000");
    //const [cellColor, setCellColor] = useState("#ffffff");
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [hoveredItem, setHoveredItem] = useState({ r: -100, c: -100 });
    const [menuOpen, setMenuOpen] = useState(false);

    const updateDimensions = () => {
        setDimensions({
            width: window.innerWidth / cellSize,
            height: window.innerHeight / cellSize,
        });
    };

    const keydown = (e: { key: string }) => {
        if (e.key === "ArrowUp") {
            setCellFontSize((p) => (p < 7 ? p + 1 : p));
        } else if (e.key === "ArrowDown") {
            setCellFontSize((p) => (p > 1 ? p - 1 : p));
        } else {
            setCellChar(e.key);
        }
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        window.addEventListener("keydown", keydown);
        return () => {
            window.removeEventListener("resize", updateDimensions);
            window.removeEventListener("keydown", keydown);
        };
    }, []);

    return (
        <main className="flex h-screen w-full flex-col overflow-hidden bg-dark p-6">
            <nav className="flex w-full items-center justify-center text-white">
                <Link className="z-[100]" href="/">
                    <Image
                        src="/logo.png"
                        alt="AL Development Logo"
                        width={45}
                        height={45}
                    />
                </Link>
                {false && (
                    <button
                        className={`!ml-auto h-12 w-12 rounded-full p-2 text-white transition-all hover:rotate-90 hover:bg-white hover:text-darkBlue ${
                            menuOpen ? "rotate-90 bg-white text-darkBlue" : ""
                        }`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill="currentColor"
                                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86a2.929 2.929 0 0 1 0 5.858z"
                            />
                        </svg>
                        {menuOpen && false && (
                            <div className="absolute h-64 w-64 translate-x-11 translate-y-[-2.5rem] rounded bg-darkBlue shadow"></div>
                        )}
                    </button>
                )}
            </nav>
            <div className="flex h-full w-full flex-col flex-col flex-col items-center justify-center">
                <div>
                    <h1 className="text-3xl font-bold sm:text-5xl md:text-5xl lg:text-5xl">
                        <div className="text-white">ALEX</div>
                        <div className="text-orange">LAY-CALVERT</div>
                    </h1>
                    <h2 className="text-sm text-green md:text-lg">
                        <i>
                            web developer | student | USMC reservist
                        </i>
                    </h2>
                </div>
            </div>
            <div className="flex w-full items-center justify-center space-x-4 md:space-x-12">
                {links.map((l) => (
                    <Link
                        key={l.href}
                        href={l.href}
                        className="z-[100] text-green transition-all hover:scale-[1.1] hover:text-orange"
                    >
                        {l.icon}
                    </Link>
                ))}
            </div>
            <div className="absolute left-0 top-0 flex flex h-full w-full flex-col overflow-hidden">
                {Array.from({ length: dimensions.height }, (_, r) => (
                    <div key={`ROW_${r}`} className="flex h-full w-full">
                        {Array.from({ length: dimensions.width }, (_, c) => {
                            const isHoveredItem =
                                r === hoveredItem.r && c === hoveredItem.c;
                            const isNextToHoveredItem =
                                r >= hoveredItem.r - 1 &&
                                r <= hoveredItem.r + 1 &&
                                c >= hoveredItem.c - 1 &&
                                c <= hoveredItem.c + 1 &&
                                !isHoveredItem;
                            const isAlmostNextToHoveredItem =
                                r >= hoveredItem.r - 2 &&
                                r <= hoveredItem.r + 2 &&
                                c >= hoveredItem.c - 2 &&
                                c <= hoveredItem.c + 2 &&
                                !isNextToHoveredItem &&
                                !isHoveredItem;
                            let cellFontSizeString = "";
                            if (cellFontSize === 1) {
                                cellFontSizeString = "text-base";
                            } else if (cellFontSize === 2) {
                                cellFontSizeString = "text-lg";
                            } else if (cellFontSize === 3) {
                                cellFontSizeString = "text-xl";
                            } else if (cellFontSize === 4) {
                                cellFontSizeString = "text-2xl";
                            } else if (cellFontSize === 5) {
                                cellFontSizeString = "text-3xl";
                            } else if (cellFontSize === 6) {
                                cellFontSizeString = "text-4xl";
                            } else if (cellFontSize === 7) {
                                cellFontSizeString = "text-5xl";
                            }
                            return (
                                <div
                                    key={`ITEM_${r}-${c}`}
                                    className={`flex w-full select-none items-center justify-center ${cellFontSizeString} font-light text-white transition-[opacity] duration-200 ease-in-out ${
                                        isHoveredItem
                                            ? "scale-[1.7]"
                                            : "opacity-[20%]"
                                    } ${
                                        isNextToHoveredItem
                                            ? "scale-[1.5] opacity-[50%]"
                                            : ""
                                    } ${
                                        isAlmostNextToHoveredItem
                                            ? "scale-[1.2] opacity-[30%]"
                                            : ""
                                    }`}
                                    onMouseEnter={() =>
                                        setHoveredItem({ r, c })
                                    }
                                >
                                    {cellChar}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </main>
    );
}
