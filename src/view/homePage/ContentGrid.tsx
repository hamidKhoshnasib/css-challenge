'use client'

import React from 'react'

interface ContentGridProps {
    items: string[]
}

export default function ContentGrid({ items }: ContentGridProps) {
    return (
        <div className="flex-1 grid grid-cols-3 auto-rows-[180px] gap-4">
            {items.length > 0 ? (
                items.map((name,index) => (
                    <div
                        key={index}
                        className="w-full h-full bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold overflow-hidden transform transition-transform"
                    >
                        {name}
                    </div>
                ))
            ) : (
                <div className="col-span-3 row-span-3 flex items-center justify-center text-gray-500">
                    <p>Select a box to display it here</p>
                </div>
            )}
        </div>
    )
}
