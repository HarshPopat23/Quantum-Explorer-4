import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../../appwrite/auth'
import styles from './Signup.module.css'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const create = async (e) => {
        e.preventDefault()
        setError("")
        try {
            // Using the authService you created in src/appwrite/auth.js
            const userData = await authService.createAccount(
                formData.email, 
                formData.password, 
                formData.name
            )
            
            if (userData) {
                // If successful, the user is logged in and sent to the dashboard
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
                <p>Create Account</p>
                <p className={styles.continue}>Join QEconsePta to start your learning journey</p>
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}

            <form onSubmit={create} className={styles.signupForm}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Enter your full name" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                    />
                </div>

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
                        placeholder="Create a password" 
                        required 
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
                    />
                </div>

                <button type="submit" className={styles.signupBtn}>Sign Up</button>
            </form>

            <div className={styles.down}>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </div>
    )
}

export default Signup