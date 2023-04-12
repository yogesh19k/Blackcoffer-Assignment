import React from "react"
import { Chart as ChartJS, elements } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

export default function SectorVsCount({sectorVsCount}){
    
    const sector =[]
    const count=[]
    
    Object.keys(sectorVsCount).forEach(element => {
        sector.push(element)
        count.push(sectorVsCount[element].count)
    });

    const [barData, setBarData] = React.useState({
        labels: sector,
        datasets: [
        {
            label: 'Sectors of Articles',
            backgroundColor: "",
            data: count,
        }
        ]
    });
    
    const [barOptions, setBarOptions] = React.useState({
        responsive: true,
        plugins: {
            legend: {
            display:true,
            position: 'right',
            },
            title: {
            display: true,
            text: 'Sectors of Articles'
            }
        }
        });

    return(
        <div className="sectorVsCounts">
        <Doughnut
            data={barData}
            options={barOptions}
            />
        </div>
    )
}