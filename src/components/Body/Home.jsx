import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../../components/Container'
import styles from './Home.module.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles.heroWrapper}>
      <Container>
        <div className={styles.heroContent}>
          {/* Badge */}
          <div className={styles.badge}>
            <span>✨ AI-Powered Learning Platform</span>
          </div>

          {/* Main Title */}
          <h1 className={styles.title}>
            Learn Smarter with <span className={styles.highlight}>AI-Powered</span> Education
          </h1>

          {/* Subtext */}
          <p className={styles.description}>
            Get instant answers with our AI bot, access curated learning resources, 
            take interactive quizzes, and track your progress — all in one personalized platform.
          </p>

          {/* Action Buttons */}
          <div className={styles.btnGroup}>
            <button 
              className={styles.primaryBtn}
              onClick={() => navigate('/signup')}
            >
              Get Started →
            </button>
            <button 
              className={styles.secondaryBtn}
              onClick={() => navigate('/features')}
            >
              ▷ Explore Features
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home