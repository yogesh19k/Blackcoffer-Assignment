import React from "react"
import { Chart as ChartJS} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
export default function YearVsSector({yearVsSector,sectorCount}){
    
    const year =[]
    const dataSet=[]
    sectorCount.forEach(sec =>{
        dataSet.push({
            label: sec,
            data: [],
            backgroundColor: "",
        })
    })

    Object.keys(yearVsSector).forEach(element => {
        year.push(element)
        dataSet.forEach(sec =>{
            if(sec.label in yearVsSector[element]){
                sec.data.push(yearVsSector[element][sec.label].count)
            }
            else{
                sec.data.push(0)
            }
        })
    });
    console.log(year,dataSet)

    const [barData, setBarData] = React.useState({
        labels: year,
        datasets: dataSet
    });
    // set options
    const [barOptions, setBarOptions] = React.useState({
        plugins: {
            title: {
            display: true,
            text: 'Articles published over the year in different sectors'
            },
            legend: {
                display:true,
                position: 'left',
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
                text: 'Years'
            },
            },
            y: {
            stacked: true,
            title: {
                display: true,
                text: 'Counts'}
            }
        }
    });

    return(
        <div className="yearVsSector">
            <Bar
                data={barData}
                options={barOptions}
            />
        </div>
    )
}