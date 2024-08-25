"use client"

import { ClerkProvider,  useAuth } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { AuthLoading, Authenticated, ConvexReactClient, Unauthenticated  } from "convex/react"
import { Loading } from "@/components/auth/loading"
import SignInPage from "@/components/auth/sigin"
import React from "react"

interface ConvexClientProviderProps {
    children: React.ReactNode
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!

const convex = new ConvexReactClient(convexUrl)

export const ConvexClientProvider = ({children}:ConvexClientProviderProps): React.ReactNode =>{
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <Authenticated>
                    {children}
                </Authenticated>
                <AuthLoading>
                    <Loading/>
                </AuthLoading>
                <Unauthenticated>
                    <SignInPage/>
                </Unauthenticated>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}