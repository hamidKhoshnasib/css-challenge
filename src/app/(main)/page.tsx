import React from 'react';
import HomePage from "@/view/homePage/HomePage";
import {SelectionGridProvider} from "@/context/SelectionGridContext";

function HomePageIndex() {
    const checkboxNames = Array.from({length: 9}, (_, i) => `box${i + 1}`)

    return (
        <SelectionGridProvider initialCheckboxes={checkboxNames}>
            <HomePage checkboxNames={checkboxNames}/>
        </SelectionGridProvider>
    )
}

export default HomePageIndex;