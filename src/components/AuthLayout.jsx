import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux' 
import { useNavigate } from 'react-router-dom'
import { authService } from '../appwrite/auth'

export default function AuthLayout({ children, authentication = true }) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    useEffect(() => {

        authService.getCurrentUser().then((user) => {
            if (authentication && !user) {
                navigate("/login")
            } else if (!authentication && user) {
                navigate("/")
            }
            setLoader(false)
        })
    }, [navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}