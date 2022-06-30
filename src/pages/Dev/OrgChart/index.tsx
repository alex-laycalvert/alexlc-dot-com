import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { v4 as uuid } from "uuid";
import "./index.scss";

interface Node {
    id: string;
}

const OrgChart: React.FC = () => {
    const [nodeLayers, setNodeLayers] = useState<Node[][]>([]);
    const [currentLayer, setCurrentLayer] = useState<number>(0);

    const addNode = () => {
        if (nodeLayers.length <= currentLayer) {
            setNodeLayers([...nodeLayers, [{ id: uuid() }]]);
            if (currentLayer === 0) setCurrentLayer(1);
            return;
        }
        let targetLayer = nodeLayers[currentLayer];
        const restLayers = nodeLayers.filter((val, i) => {
            return i !== currentLayer;
        });
        targetLayer.push({ id: uuid() });
        setNodeLayers([...restLayers, targetLayer]);
        if (nodeLayers[currentLayer].length >= 2 ** currentLayer)
            setCurrentLayer(currentLayer + 1);
    };

    return (
        <div className="container">
            <h1>Organization Chart</h1>
            <p>
                Proof of concept and design for an interactive and responsive
                organization chart.
                <button onClick={addNode}>Add Node</button>
            </p>
            <div className="org-chart-container">
                <div className="org-chart">
                    {nodeLayers.map((nodeLayer: Node[], i) => {
                        return (
                            <div key={`node-layer-${i}`} className="node-layer">
                                {nodeLayer.map((node: Node) => {
                                    return (
                                        <div
                                            key={`node-${node.id}`}
                                            className="node"
                                        ></div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default OrgChart;
