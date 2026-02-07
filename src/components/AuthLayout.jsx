import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authService } from '../appwrite/auth'

export default function AuthLayout({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        authService.getCurrentUser().then((user) => {
            // Case 1: Page requires auth, but user is NOT logged in
            if (authentication && !user) {
                navigate("/login")
            } 
            // Case 2: Page is for GUESTS ONLY (like Login/Signup), but user IS logged in
            // We only redirect if it's explicitly a guest-only page
            // For the Library, authentication is false, but we WANT logged-in users to stay
            /* else if (!authentication && user) {
                 navigate("/") 
            } */
            
            setLoader(false)
        })
    }, [navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}