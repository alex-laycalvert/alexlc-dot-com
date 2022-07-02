import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Draggable from "react-draggable";
import { OrgChart } from "../../../components/OrgChart";
import { NodeType } from "../../../components/OrgChart/Node";

const OrgChartPage: React.FC = () => {
    const [rootNode, setRootNode] = useState<NodeType>(null);

    useEffect(() => {
        setRootNode({
            id: uuid(),
            firstName: "Alex",
            lastName: "Lay-Calvert",
            rank: "Super Nerd",
            image: "/images/ProfilePic.jpeg",
            children: [
                {
                    id: uuid(),
                    firstName: "Alex",
                    lastName: "Lay-Calvert",
                    rank: "Super Nerd",
                    image: "/images/ProfilePic.jpeg",
                    children: [
                        {
                            id: uuid(),
                            firstName: "Alex",
                            lastName: "Lay-Calvert",
                            rank: "Super Nerd",
                            image: "/images/ProfilePic.jpeg",
                            children: [],
                        },
                        {
                            id: uuid(),
                            firstName: "Alex",
                            lastName: "Lay-Calvert",
                            rank: "Super Nerd",
                            image: "/images/ProfilePic.jpeg",
                            children: [],
                        },
                        {
                            id: uuid(),
                            firstName: "Alex",
                            lastName: "Lay-Calvert",
                            rank: "Super Nerd",
                            image: "/images/ProfilePic.jpeg",
                            children: [],
                        },
                        {
                            id: uuid(),
                            firstName: "Alex",
                            lastName: "Lay-Calvert",
                            rank: "Super Nerd",
                            image: "/images/ProfilePic.jpeg",
                            children: [],
                        },
                    ],
                },
                {
                    id: uuid(),
                    firstName: "Alex",
                    lastName: "Lay-Calvert",
                    rank: "Super Nerd",
                    image: "/images/ProfilePic.jpeg",
                    children: [],
                },
                {
                    id: uuid(),
                    firstName: "Alex",
                    lastName: "Lay-Calvert",
                    rank: "Super Nerd",
                    image: "/images/ProfilePic.jpeg",
                    children: [
                        {
                            id: uuid(),
                            firstName: "Alex",
                            lastName: "Lay-Calvert",
                            rank: "Super Nerd",
                            image: "/images/ProfilePic.jpeg",
                            children: [],
                        },
                        {
                            id: uuid(),
                            firstName: "Alex",
                            lastName: "Lay-Calvert",
                            rank: "Super Nerd",
                            image: "/images/ProfilePic.jpeg",
                            children: [],
                        },
                    ],
                },
                {
                    id: uuid(),
                    firstName: "Alex",
                    lastName: "Lay-Calvert",
                    rank: "Super Nerd",
                    image: "/images/ProfilePic.jpeg",
                    children: [],
                },
            ],
        });
    }, []);

    return (
        <div className="container">
            <Link to="/">Back Home</Link>
            <h1>Organization Chart</h1>
            <p>
                Proof of concept and design for an interactive and responsive
                organization chart. ***A WORK IN PROGRESS***
            </p>
            <div className="chart-container">
                <Draggable>
                    <div className="chart">
                        <OrgChart rootNode={rootNode} />
                    </div>
                </Draggable>
            </div>
        </div>
    );
};

export default OrgChartPage;
