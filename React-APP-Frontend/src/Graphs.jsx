import React from "react"
import YearVsCount from "./charts/YearVsCount.jsx"
import SectorVsCount from "./charts/SectorVsCount.jsx"
import SectorVsLike from "./charts/SectorVsLike"
import YearVsSector from "./charts/YearVsSector"
import EndYearVsCount from "./charts/EndYearVsCount"
import SectorVsTopics from "./charts/SectorVsTopics"

import "./graphs.css"

export default function Graphs({data,filterOption}){

    return(
        <div className="Charts-group">
            <YearVsCount
                yearVsCount={data.yearVsCount}
            />
            <SectorVsCount
                sectorVsCount={data.sectorVsCount}
            />
            <SectorVsLike
                sectorVsLike={data.sectorVsLike}
            />
            <YearVsSector
                yearVsSector={data.yearVsSector}
                sectorCount={Object.keys(data.sectorVsLike)}
            />
            <EndYearVsCount
                endYearVsCount={data.endYearVsCount}
            />
            <SectorVsTopics
                sectorVsRegion={data.sectorVsRegion}
                region={filterOption.region}
            />
        </div>
    )
}