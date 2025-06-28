'use client'
import React, { useState, useEffect } from 'react'
import Content from './Content/page.jsx'
import Footer from './Footer/page.jsx'
import Navbar from './Navbar/page.jsx'
import { motion, AnimatePresence } from 'framer-motion'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth page transition
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95
    },
    in: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    out: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  }

  const loadingVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          variants={loadingVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="loading-screen"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1e202b 0%, #323544 100%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              width: 60,
              height: 60,
              border: '4px solid rgba(255, 255, 255, 0.3)',
              borderTop: '4px solid #dc3545',
              borderRadius: '50%',
              boxShadow: '0 0 20px rgba(220, 53, 69, 0.5)'
            }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              position: 'absolute',
              marginTop: 100,
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 300,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Loading Weather Data...
          </motion.h2>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
        >
          <Navbar/>
          <Content/>
          <Footer/>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
