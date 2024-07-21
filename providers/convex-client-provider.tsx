"use client"

import { ClerkProvider,  useAuth } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react"
import React from "react"

interface ConvexClientProviderProps {
    children: React.ReactNode
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!

const convex = new ConvexReactClient(convexUrl)

export const ConvexClientProvider = ({children}:ConvexClientProviderProps): React.ReactNode =>{
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}