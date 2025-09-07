'use client'

import React, { ReactNode } from 'react'
import { Header, Footer } from '@/components/layout'

interface DashboardLayoutProps {
    children: ReactNode
}

function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 p-4 bg-gray-50">{children}</main>
            <Footer />
        </div>
    )
}

export default DashboardLayout
