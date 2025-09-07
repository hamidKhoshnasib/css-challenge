'use client'

import React, {ReactNode} from 'react'
import {FieldValues, FormProvider, SubmitHandler, UseFormReturn} from 'react-hook-form'

type ReactHookFormProps<TFieldValues extends FieldValues> = {
    methods: UseFormReturn<TFieldValues>
    onSubmit: SubmitHandler<TFieldValues>
    className?: string
    children: ReactNode
}

function ReactHookForm<TFieldValues extends FieldValues>({
                                                             methods,
                                                             onSubmit,
                                                             className,
                                                             children,
                                                         }: ReactHookFormProps<TFieldValues>) {
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
                {children}
            </form>
        </FormProvider>
    )
}

export default ReactHookForm
