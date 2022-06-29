import React from "react";
import "./index.scss";

export interface GraphNode {
    id: string;
    layer: number;
    parent: GraphNode;
    children: GraphNode[];
}

interface Props {
    node: GraphNode;
}

export const Node: React.FC<Props> = ({ node }) => {
    return (
        <div className="node">
            <h2>{node.id}</h2>
        </div>
    );
};
