import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Draggable from "react-draggable";
import "./index.scss";

interface Node {
    id: string;
    data: string;
}

const DraggableFrame: React.FC = () => {
    const [nodes, setNodes] = useState<Node[]>([]);

    const addNode = () => {
        setNodes([...nodes, { id: uuid(), data: "" }]);
    };

    return (
        <div className="container">
            <h1>Draggable Frame</h1>
            <p>
                Development and proof of concept for nested draggable
                components. The box below contains nodes that can be dragged
                around but the box itself can also be dragged to move around the
                entire frame.
                <button onClick={addNode}>Add a Node</button>
            </p>
            <div className="draggable-frame-container">
                <Draggable>
                    <div className="draggable-frame">
                        {nodes.map((node: Node) => {
                            return (
                                <Draggable
                                    key={node.id}
                                    onMouseDown={(e: MouseEvent) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                >
                                    <div className="node">{node.data}</div>
                                </Draggable>
                            );
                        })}
                    </div>
                </Draggable>
            </div>
        </div>
    );
};

export default DraggableFrame;
