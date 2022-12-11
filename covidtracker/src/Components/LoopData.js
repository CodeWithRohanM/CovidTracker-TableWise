import React from "react";
import "./StateWise.css";

export default function LoopData(props) {
    return <>

            <tr class="border-b border-black">
                <td id = "getStateNameFont" class="p-4 border-r-2">{props.stateName}</td>
                <td class="p-4 border-r">{props.active}</td>
                <td class="p-4 border-r">{props.confirmed}</td>
                <td class="p-4 border-r">{props.deaths}</td>
                <td class="p-4 border-r">{props.recovered}</td>
                <td class="p-4 ">{props.stateCode}</td>
            </tr>

    </>
}