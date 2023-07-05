"use client";
import { useEffect, useState } from "react";

export default function InteractiveBackground() {
    const [cellSize /*setCellSize*/] = useState(40);
    const [cellChar, setCellChar] = useState("+");
    const [cellFontSize, setCellFontSize] = useState(1);
    //const [bgColor, setBgColor] = useState("#000000");
    //const [cellColor, setCellColor] = useState("#ffffff");
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [hoveredItem, setHoveredItem] = useState({ r: -100, c: -100 });

    const updateDimensions = () => {
        setDimensions({
            width: window.innerWidth / cellSize,
            height: window.innerHeight / cellSize,
        });
    };

    const keydown = (e: { key: string; preventDefault: () => void }) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            setCellFontSize((p) => (p < 7 ? p + 1 : p));
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            setCellFontSize((p) => (p > 1 ? p - 1 : p));
        } else if (
            ![
                " ",
                "NumLock",
                "Backspace",
                "Enter",
                "Pause",
                "ScrollLock",
                "PrintScreen",
                "Home",
                "End",
                "Delete",
                "Insert",
                "PageUp",
                "PageDown",
                "Shift",
                "Control",
                "Meta",
                "Alt",
                "Escape",
                "Tab",
                "ArrowLeft",
                "ArrowRight",
            ].includes(e.key)
        ) {
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
        <div className="fixed left-0 top-0 flex flex h-full w-full flex-col overflow-hidden">
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
                                onMouseEnter={() => setHoveredItem({ r, c })}
                            >
                                {cellChar}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
