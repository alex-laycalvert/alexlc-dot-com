"use client";

import { useState } from "react";
import Draggable from "react-draggable";

const BusinessCard: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <Draggable
            defaultClassName={`select-none ${
                dragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            position={position}
            onStart={() => setDragging(true)}
            onStop={(_, data) => {
                setPosition(data);
                setDragging(false);
            }}
        >
            <div className="z-[100]">
                {false && position.x !== 0 && position.y !== 0 && (
                    <button
                        className="flex items-center space-x-1 bg-dark text-lg font-semibold text-gray-500 transition-colors hover:text-red"
                        onClick={reset}
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                        >
                            <path
                                fill="currentColor"
                                d="m12.78 5.28l-8 8l-.686.72l.687.72l8 8l1.44-1.44L7.936 15H21c2.755 0 5 2.245 5 5v7h2v-7c0-3.845-3.155-7-7-7H7.937l6.282-6.28l-1.44-1.44z"
                            />
                        </svg>
                        <span>Reset</span>
                    </button>
                )}
                <div className="rounded border border-darkBlue bg-dark p-2 shadow-md shadow-darkBlue transition-shadow hover:scale-[1.005] hover:shadow-lg hover:shadow-darkBlue sm:p-4">
                    <h1 className="text-3xl font-bold sm:text-5xl">
                        <div className="text-white">ALEX</div>
                        <div className="text-red">LAY-CALVERT</div>
                    </h1>
                    <h2 className="text-sm font-semibold text-gray-500 md:text-lg">
                        <i>web developer | student | u.s.m.c reservist</i>
                    </h2>
                </div>
            </div>
        </Draggable>
    );
};

export default BusinessCard;
