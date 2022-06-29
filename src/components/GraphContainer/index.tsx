import React from "react";
import { Node, GraphNode } from "./Node";
import "./index.scss";

interface Props {
    nodeLayers: GraphNode[][];
}

const GraphContainer: React.FC<Props> = ({ nodeLayers }) => {
    return <div className="graph"></div>;
};

export default GraphContainer;
