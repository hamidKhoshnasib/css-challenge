'use client'

import React from 'react'
import GridControls from "@/view/homePage/GridControls";
import ContentGrid from "@/view/homePage/ContentGrid";
import {useSelectionGrid} from "@/context/SelectionGridContext";

function HomePage({checkboxNames}: { checkboxNames: string[] }) {
    const {values, setValue} = useSelectionGrid()
    const gridItems = checkboxNames.filter((name) => values[name])

    return (
        <div className="flex flex-1 overflow-hidden min-h-screen gap-4">
            <GridControls checkboxNames={checkboxNames} onValueChange={setValue}/>
            <ContentGrid items={gridItems}/>
        </div>
    )
}

export default HomePage