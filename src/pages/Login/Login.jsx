import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../../appwrite/auth'
import styles from './Login.module.css'

function Login() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const login = async (e) => {
        e.preventDefault()
        setError("")
        try {
            const session = await authService.login(formData.email, formData.password)
            if (session) {
             
                navigate("/dashboard")
              
                window.location.reload()
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.up}>
                <p>Welcome Back!</p>
                <p className={styles.continue}>Sign in to continue learning</p>
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}

            <form onSubmit={login} className={styles.loginForm}>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter your email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter your password" 
                        required 
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
                    />
                </div>

                <button type="submit" className={styles.signinBtn}>Sign In</button>
            </form>

            <div className={styles.down}>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </div>
    )
}

export default Login