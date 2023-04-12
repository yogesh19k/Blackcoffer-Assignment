import React from "react"
import { Chart as ChartJS, elements } from 'chart.js/auto'
import { Bar, Line, Pie } from 'react-chartjs-2'

export default function YearVsCount({yearVsCount}){
    
    const year =[]
    const count=[]
    
    Object.keys(yearVsCount).forEach(element => {
        year.push(element)
        count.push(yearVsCount[element].count)
    });

    const [barData, setBarData] = React.useState({
        labels: year,
        datasets: [
        {
            label: 'Published articles',
            backgroundColor: '',
            borderColor: '',
            data: count,
            fill:true
        }
        ]
    });
    // set options
    const [barOptions, setBarOptions] = React.useState({
            responsive: true,
            plugins: {
            title: {
                display: true,
                text: 'Articles published since 2007 '
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
                text: 'Year'
                }
            },
            y: {
                display: true,
                title: {
                display: true,
                text: 'Counts'
                }
            }
            }
        });

    return(
        <div className="yearVsCount">
            <Line
                data={barData}
                options={barOptions}
                />
        </div>
    )
}