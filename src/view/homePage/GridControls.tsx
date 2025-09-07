'use client'

import React, {useEffect} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import {useSelectionGrid} from "@/context/SelectionGridContext";
import {CheckboxReactHook} from "@/components/ui";

interface GridControlsProps {
    checkboxNames: string[]
    onValueChange?: (name: string, value: boolean) => void
}

function GridControls({checkboxNames, onValueChange}: GridControlsProps) {
    const {values} = useSelectionGrid();

    const methods = useForm({
        defaultValues: values
    });

    useEffect(() => {
        methods.reset(values);
    }, [values, methods]);

    return (
        <FormProvider {...methods}>
            <form className="w-48 px-4 border-l">
                {checkboxNames.map((name, index) => (
                    <div key={index}>
                        <CheckboxReactHook
                            name={name}
                            label={name}
                            onValueChange={onValueChange}
                        />
                    </div>
                ))}
            </form>
        </FormProvider>
    )
}

export default GridControls;