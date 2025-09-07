'use client'

import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react'

type CheckboxState = Record<string, boolean>

interface SelectionGridContextType {
    values: CheckboxState
    setValue: (key: string, value: boolean) => void
}

const SelectionGridContext = createContext<SelectionGridContextType | undefined>(undefined)

export const useSelectionGrid = () => {
    const context = useContext(SelectionGridContext)
    if (!context) throw new Error('useSelectionGrid must be used within SelectionGridProvider')
    return context
}

interface ProviderProps {
    children: ReactNode
    initialCheckboxes: string[]
}

export const SelectionGridProvider = ({children, initialCheckboxes}: ProviderProps) => {
    const [values, setValues] = useState<CheckboxState>(() => {
        // Initialize with default false values
        return initialCheckboxes.reduce((acc, name) => {
            acc[name] = false
            return acc
        }, {} as CheckboxState)
    });

    const [isLoaded, setIsLoaded] = useState(false);

    // Load from sessionStorage only once on mount
    useEffect(() => {
        try {
            const saved = sessionStorage.getItem('checkboxes')
            if (saved) {
                const parsed = JSON.parse(saved) as CheckboxState;
                // Ensure all initial checkboxes are present in the state
                const initialState = initialCheckboxes.reduce((acc, name) => {
                    acc[name] = parsed[name] || false;
                    return acc;
                }, {} as CheckboxState);
                setValues(initialState);
            }
        } catch (error) {
            console.error("Failed to parse checkboxes from sessionStorage", error);
        } finally {
            setIsLoaded(true);
        }
    }, [initialCheckboxes])

    // Save to sessionStorage on change, only after initial load
    useEffect(() => {
        if (isLoaded) {
            try {
                sessionStorage.setItem('checkboxes', JSON.stringify(values))
            } catch (error) {
                console.error("Failed to save checkboxes to sessionStorage", error);
            }
        }
    }, [values, isLoaded])

    const setValue = (key: string, value: boolean) => {
        setValues((prev) => ({...prev, [key]: value}))
    }

    return (
        <SelectionGridContext.Provider value={{values, setValue}}>
            {children}
        </SelectionGridContext.Provider>
    )
}
