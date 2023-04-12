import React from "react"
import { Chart as ChartJS, elements } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

export default function SectorVsLike({sectorVsLike}){
    
    const sector =[]
    const like=[]
    const int=[]
    
    Object.keys(sectorVsLike).forEach(element => {
        sector.push(element)
        like.push(sectorVsLike[element].like/sectorVsLike[element].likeCount)
        int.push(sectorVsLike[element].int/sectorVsLike[element].intCount)
    });


    const [barData, setBarData] = React.useState({
        labels: sector,
        datasets: [
        {
            label: 'Likelihood',
            backgroundColor: "",
            data: like,
            fill: true,
        },
        {
            label: 'Intensity',
            backgroundColor: "",
            data: int,
            fill: true,
        },

        ]
    });
    // set options
    const [barOptions, setBarOptions] = React.useState({
        responsive: true,
        plugins: {
            title: {
            display: true,
            text: 'Likelihood & Intensity Vs Sectors'
            },
        },
        interaction: {
            mode: 'index',
            intersect: false
        },
        scales: {
            x: {
            display: true,
            title: {
                display: true,
                text: 'Sectors'
            }
            },
            y: {
            display: true,
            title: {
                display: true,
                text: 'Avg'
            }
            }
        }
        });

    return(
        <div className="sectorVsLike">
        <Line
            data={barData}
            options={barOptions}
            />
        </div>
    )
}