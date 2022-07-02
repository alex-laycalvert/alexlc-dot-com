import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./style.scss";
import { OrgChartComponent } from "../../../components/OrgChart";
import * as d3 from "d3";

const OrgChartPage: React.FC = () => {
    const [data, setData] = useState(null);
    let addNodeChildFunc: any = null;

    function addNode() {
        const node = {
            nodeId: "new Node",
            parentNodeId: "O-6066",
        };

        addNodeChildFunc(node);
    }

    function onNodeClick(nodeId: any) {}

    useEffect(() => {
        d3.csv(
            "https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv"
        ).then((data: any) => {
            setData(data);
        });
    }, []);

    return (
        <div>
            Click node to trigger action in parent or &nbsp;
            <button onClick={() => addNode()}>add node as root's child</button>
            <OrgChartComponent
                setClick={(click: any) => (addNodeChildFunc = click)}
                onNodeClick={onNodeClick}
                data={data}
            />
        </div>
    );
};

export default OrgChartPage;

