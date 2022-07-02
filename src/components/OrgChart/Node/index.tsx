import React from "react";
import "./index.scss";

export type NodeType = {
    id: string;
    firstName: string;
    lastName: string;
    rank: string;
    image: string;
    children: NodeType[];
} | null;

interface Props {
    node?: NodeType;
}

export const Node: React.FC<Props> = ({ node }) => {
    if (!node) return <></>;
    return (
        <div>
            <div className="org-chart-node-wrapper">
                <div
                    id={`org-chart-node-${node.id}`}
                    className="org-chart-node"
                >
                    <img
                        className="org-chart-node-pic"
                        src={node.image}
                        alt={`Profile for ${node.firstName} ${node.lastName}`}
                    />
                    <div className="org-chart-node-title">
                        <h1>
                            {node.firstName} {node.lastName}
                        </h1>
                        <h2>{node.rank}</h2>
                    </div>
                </div>
            </div>
            <div className="org-chart-node-children">
                {node.children &&
                    node.children.length > 0 &&
                    node.children.map((child: NodeType) => {
                        if (!child) return <></>;
                        return <Node key={child.id} node={child} />;
                    })}
            </div>
        </div>
    );
};
