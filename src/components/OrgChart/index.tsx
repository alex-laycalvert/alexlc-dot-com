import React from "react";
import "./index.scss";
import { Node, NodeType } from "./Node";

interface Props {
    rootNode?: NodeType;
}

export const OrgChart: React.FC<Props> = ({ rootNode }) => {
    return (
        <div className="org-chart">
            <Node node={rootNode} />
        </div>
    );
};
