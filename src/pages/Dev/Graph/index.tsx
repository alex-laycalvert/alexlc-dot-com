import React, { useState, useEffect } from "react";
import GraphContainer from "../../../components/GraphContainer";
import { GraphNode } from "../../../components/GraphContainer/Node";
import "./index.scss";

const Graph: React.FC = () => {
    const [graphNodeLayers, setGraphNodeLayers] = useState<GraphNode[][]>([]);

    useEffect(() => {}, []);
    return (
        <div>
            <h1>Graph</h1>
            <p>
                This is a proof of concept of graphing nodes onto a web app
                screen
            </p>
            <div>
                <GraphContainer nodeLayers={graphNodeLayers} />
            </div>
        </div>
    );
};

export default Graph;
