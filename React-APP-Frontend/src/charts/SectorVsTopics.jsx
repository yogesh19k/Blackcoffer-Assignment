import React from "react"
import { Chart as ChartJS} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
export default function SectorVsTopics({sectorVsRegion,region}){
    const sector =[]
    const dataSet=[]
    region.forEach(reg =>{
        if(reg !=='All')
            dataSet.push({
                label: reg,
                data: [],
                backgroundColor: "",
            })
    })

    Object.keys(sectorVsRegion).forEach(element => {
        sector.push(element)
        dataSet.forEach(reg =>{
            if(reg.label in sectorVsRegion[element]){
                reg.data.push(sectorVsRegion[element][reg.label].count)
            }
            else{
                reg.data.push(0)
            }
        })
    });

    console.log(sector,dataSet)

    const [barData, setBarData] = React.useState({
        labels: sector,
        datasets: dataSet
    });
    // set options
    const [barOptions, setBarOptions] = React.useState({
        plugins: {
            title: {
            display: true,
            text: 'Stacked Regions Counts Vs Sectors',
            },
            legend: {
                display:true,
                position: 'right',
            },
        },
        responsive: true,
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
            stacked: true,
            title: {
                display: true,
                text: 'Sectors',
            }
            },
            y: {
            stacked: true,
            title: {
                display: true,
                text: 'Counts'
            }
            }
        }
    });

    return(
        <div className="sectorVsTopics">
            <Bar
                data={barData}
                options={barOptions}
                />
        </div>
    )
}