import React from "react";
import Header from "./Header.jsx"
import Graphs from "./Graphs.jsx"
import "./App.css"

export default function App(){
    const [data,setData] = React.useState({});
    const [filter,setFilter] = React.useState({
        year:"All",
        endDate:"All",
        topic:"All",
        sector:"All",
        region:"All",
        source:"All",
        country:"All",
    });

    const [filterOption,setFilterOption] = React.useState({
        year:["All"],
        endDate:["All"],
        topic:["All"],
        sector:["All"],
        region:["All"],
        source:["All"],
        country:["All"],
    });


    const filterNames={
        year:"Year",
        endDate:"End Date",
        topic:"Topic",
        sector:"Sector",
        region:"Region",
        source:"Source",
        country:"Country",
    }


    const FilterElement=Object.keys(filterOption).map(type =>
        (<div key={type} className="filter-elements">
            <label htmlFor={type}>{filterNames[type]}:</label>
            <select
                id={type}
                name={type}
                value={filter[type]} 
                onChange={handelFilterChange}>
                {filterOption[type].map(val =>
                    <option
                        key={val}
                        value={val}
                    >{val}
                    </option>
                )}
            </select>
        </div>
        )
    )


    React.useEffect(()=>{
        fetch('/api?'+ new URLSearchParams(filter))
        .then(res => res.json())
        .then(data =>{   
                setData(data.data)
                setFilterOption({
                    ...data.filterOption
                })
            })
    },[])

    function handelClick(){
        setData({})
        fetch('/api?'+ new URLSearchParams(filter))
        .then(res => res.json())
        .then(data =>{   
                setData(data.data)
                setFilterOption({
                    ...data.filterOption
                })
            })
    }

    function resetClick(){
        setFilter({
            year:"All",
            endDate:"All",
            topic:"All",
            sector:"All",
            region:"All",
            source:"All",
            country:"All",
        })
    }


    function handelFilterChange(event){
        const {name,value}=event.target
        setFilter((oldFilter) =>{
            return{
            ...oldFilter,
            [name]:value
            }
        })
    }

    
        return(
            <div className="app">
                <Header/>
                <div className="filter">
                    <h3>Filters</h3>
                    <div className="filter-element-groups">
                        {FilterElement}
                        <button onClick={resetClick} className="button-reset">RESET</button>
                        <button onClick={handelClick} className="button-ok">OK</button>
                    </div>
                </div>
                {Object.keys(data).length>0?
                    <Graphs data={data}
                        filterOption={filterOption}
                    />
                    :<div className="Loading">
                        <h3>Loading...</h3>
                    </div>
                }
            </div>
        )
}