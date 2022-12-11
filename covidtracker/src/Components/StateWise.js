import React, { useEffect, useState } from "react";
import LoopData from "./LoopData";
import "./StateWise.css"

export default function StateWise() {

    const [data, setData] = useState([]);


    const getCovidData = () => {
        const apiData = fetch("https://data.covid19india.org/data.json");
        apiData.then(respone => respone.json())
            .then(actualData => setData(actualData.statewise));
    }


    useEffect(() => {
        getCovidData();
    }, []);


    return <>

        <div class="w-full h-screen p-12 justify-center flex bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
            <div class="overflow-y-auto shadow-2xl h-5/6 border-2 border-black rounded-xl">
                <table class="h-full">
                    <thead class="text-xl border-b-2 border-red-400 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                        <tr id="getStateNameFont">
                            <th class="p-4 border-r">State</th>
                            <th class="p-4 border-r">Active</th>
                            <th class="p-4 border-r">Confirmed</th>
                            <th class="p-4 border-r">Deaths</th>
                            <th class="p-4 border-r">Recovered</th>
                            <th class="p-4 s">StateCode</th>
                        </tr>
                    </thead>

                    <tbody id = "getDataFont" class="text-center bg-gradient-to-r from-green-300 to-purple-400">

                        {
                            data.map((currentValue, index) => {
                                return <LoopData key={index} stateName={currentValue.state} active={currentValue.active} confirmed={currentValue.confirmed} recovered={currentValue.recovered} deaths={currentValue.deaths} stateCode={currentValue.statecode} />
                            })

                        }
                    </tbody>


                </table>
            </div>

        </div>

    </>
}