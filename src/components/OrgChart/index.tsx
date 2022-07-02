import React, { useLayoutEffect, useRef } from "react";
import "./style.scss";
import { OrgChart } from "d3-org-chart";

interface Props {
    data: any;
    setClick: any;
    onNodeClick: any;
    ref?: React.RefObject<HTMLDivElement>;
}

export const OrgChartComponent: React.FC<Props> = ({
    data,
    setClick,
    onNodeClick,
    ref,
}) => {
    const d3Container = useRef(null);
    let chart: any = null;

    function addNode(node: any) {
        chart.addNode(node);
    }

    setClick(addNode);

    // We need to manipulate DOM
    useLayoutEffect(() => {
        if (data && d3Container.current) {
            if (!chart) {
                chart = new OrgChart();
            }
            chart
                .container(d3Container.current)
                .data(data)
                .nodeWidth((d: any) => 200)
                .nodeHeight((d: any) => 120)
                .onNodeClick((d: any, i: number, arr: any[]) => {
                    console.log(d, "Id of clicked node ");
                    onNodeClick(d);
                })
                .nodeContent((data: any) => {
                    return `<div class="org-chart-node">
                                NODE: ${data.id}
                            </div>`;
                })
                .render();
        }
    }, [data, d3Container.current]);

    return (
        <div>
            <div ref={d3Container} />
        </div>
    );
};
