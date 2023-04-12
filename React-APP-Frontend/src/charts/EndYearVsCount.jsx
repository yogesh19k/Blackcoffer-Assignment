import React from "react"
import { Chart as ChartJS} from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
export default function EndYearVsCount({endYearVsCount}){
    const year =[]
    const count=[]
    
    Object.keys(endYearVsCount).forEach(element => {
        year.push(element)
        count.push(endYearVsCount[element].count)
    });

    const [barData, setBarData] = React.useState({
        labels: year,
        datasets: [
        {
            label: 'Sectors Vs End-Years',
            backgroundColor: "",
            data: count,
        }
        ]
    });
    // set options
    const [barOptions, setBarOptions] = React.useState({
        responsive: true,
        plugins: {
            legend: {
            display:false,
            position: 'right',
            },
            title: {
            display: true,
            text: 'Sectors Vs End-Years'
            }
        }
        });
    return(
        <div className="endYearVsCount">
            <Doughnut 
                data={barData}
                options={barOptions}
                />
        </div>
    )
}