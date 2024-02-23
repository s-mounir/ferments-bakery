import React, {useRef, useEffect, useState} from "react";
import * as d3 from "d3";

import data from "../data.json"

function Sunburst(props) {
    const filter=props.filter
    const setFilter=props.setFilter

    const width = 500;
    const height = 500;
    const radius = Math.min(width,height) / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const format = d3.format(",d");

    const partition = d3.partition()
        .size([2 * Math.PI, radius])
    const root = d3.hierarchy(data)
        .sum(function(d){return d.size});
    partition(root);

    const arc = d3.arc()
         .startAngle(function(d){return d.x0})
         .endAngle(function(d){return d.x1})
         .innerRadius(function(d){return d.y0})
         .outerRadius(function(d){return d.y1});

    function getTextTransform(d){
        const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
        const y = (d.y0 + d.y1) / 2;
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }

    function clicked(evt){
        if(filter===0){
            evt.target.setAttribute('opacity','0.5');
            setFilter(1);
        }else{
            evt.target.setAttribute('opacity','1');
            setFilter(0);
        }
    }

    return (
        <svg width={width} height={height}>
            <g id="container" transform={"translate("+width/2+","+height/2+")"} fillOpacity={0.6}>
            {root.descendants()
                .filter((d)=>d.depth)
                .map((d,i)=>(
                    <path key={`${d.data.name}-${i}`} fill={color(d)} d={arc(d)} onClick={(evt)=>clicked(evt)}>
                    </path>
                ))}
            </g>
            <g transform={"translate("+width/2+","+height/2+")"}>
                {root.descendants()
                .filter((d)=>d.depth)
                .map((d,i)=>(
                    <text key={`${d.data.name}-${i}`} transform={`rotate(${(((d.x0 + d.x1) / 2) * 180) / Math.PI - 90}) translate(${d.y0},0)`}>
                        {d.data.name}
                    </text>
                ))}
            </g>
        </svg>);
}
export default Sunburst