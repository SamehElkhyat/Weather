'use client'
import React, { useState, useEffect } from 'react'
import Content from './Content/page.jsx'
import Footer from './Footer/page.jsx'
import Navbar from './Navbar/page.jsx'
import { ThemeProvider } from './components/ThemeProvider'
import { motion, AnimatePresence } from 'framer-motion'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Simulate loading with progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    out: {
      opacity: 0,
      scale: 1.05,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  }

  const loadingVariants = {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            variants={loadingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="loading-screen"
            role="status"
            aria-label="Loading weather application"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'var(--gradient-surface)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 'var(--z-overlay)',
              gap: 'var(--space-8)'
            }}
          >
            {/* Loading Spinner */}
            <motion.div
              className="loading-spinner"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                width: 80,
                height: 80,
                border: '4px solid rgba(59, 130, 246, 0.2)',
                borderTop: '4px solid var(--color-primary-500)',
                borderRadius: '50%',
                position: 'relative'
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 60,
                  height: 60,
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  filter: 'blur(2px)'
                }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="loading-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                textAlign: 'center',
                maxWidth: '400px'
              }}
            >
              <motion.h2
                className="loading-title"
                style={{
                  color: 'var(--color-dark-text-primary)',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-bold)',
                  margin: '0 0 var(--space-2) 0',
                  fontFamily: 'var(--font-display)'
                }}
              >
                WeatherPro
              </motion.h2>
              
              <motion.p
                className="loading-subtitle"
                style={{
                  color: 'var(--color-dark-text-secondary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-medium)',
                  margin: '0 0 var(--space-6) 0'
                }}
              >
                Loading your professional weather dashboard...
              </motion.p>

              {/* Progress Bar */}
              <div
                className="progress-container"
                style={{
                  width: '100%',
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-full)',
                  overflow: 'hidden',
                  marginBottom: 'var(--space-2)'
                }}
              >
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    height: '100%',
                    background: 'var(--gradient-primary)',
                    borderRadius: 'var(--radius-full)'
                  }}
                />
              </div>

              <motion.span
                className="progress-text"
                style={{
                  color: 'var(--color-dark-text-tertiary)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-medium)'
                }}
              >
                {Math.round(loadingProgress)}%
              </motion.span>
            </motion.div>

            {/* Loading Animation Dots */}
            <motion.div
              className="loading-dots"
              style={{
                display: 'flex',
                gap: 'var(--space-2)',
                position: 'absolute',
                bottom: 'var(--space-16)'
              }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [-10, 0, -10],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  style={{
                    width: 8,
                    height: 8,
                    background: 'var(--color-primary-500)',
                    borderRadius: '50%'
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            className="app-content"
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Skip to main content for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50">
              Skip to main content
            </a>

            <Navbar />
            
            <main 
              id="main-content" 
              className="main-content"
              style={{
                flex: '1',
                paddingTop: '120px', // Account for fixed navbar
                position: 'relative'
              }}
            >
              <Content />
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}
