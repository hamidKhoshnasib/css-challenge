'use client'

import React from 'react'
import {Controller, FieldValues, Path, useFormContext} from 'react-hook-form'

interface CheckboxReactHookProps<T extends FieldValues> {
    name: Path<T>
    label: string
    onValueChange?: (name: Path<T>, value: boolean) => void
}

function CheckboxReactHook<T extends FieldValues>({
                                                 name,
                                                 label,
                                                 onValueChange,
                                             }: CheckboxReactHookProps<T>) {
    const {control} = useFormContext<T>()

    return (
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <label
                    className="flex items-center space-x-3 cursor-pointer p-2">
                    <input
                        type="checkbox"
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        checked={field.value || false}
                        onChange={(e) => {
                            const newValue = e.target.checked
                            field.onChange(newValue)
                            if (onValueChange) {
                                onValueChange(name, newValue)
                            }
                        }}
                    />
                    <span className="text-gray-800 font-medium">{label}</span>
                </label>
            )}
        />
    )
}

export default CheckboxReactHook
