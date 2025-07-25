"use client"
import React, { useState, useEffect, useRef } from "react"
import "./Navbar.css"
import logo from "./Weather.png"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Container,
  Divider,
} from "@mui/material"
import Image from "next/image"
import Link from "next/link"

// Simple icon components in case Material-UI icons don't work
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
)

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin)
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Refs for GSAP animations
  const navbarRef = useRef(null)
  const logoRef = useRef(null)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const drawerRef = useRef(null)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  // GSAP Animations
  useEffect(() => {
    // Navbar entrance animation
    gsap.fromTo(navbarRef.current,
      { y: -100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power3.out",
        delay: 0.5
      }
    )

    // Logo animation
    gsap.fromTo(logoRef.current,
      { scale: 0, rotation: -180 },
      { 
        scale: 1, 
        rotation: 0, 
        duration: 1, 
        ease: "back.out(1.7)",
        delay: 0.8
      }
    )

    // Menu button animation
    gsap.fromTo(buttonRef.current,
      { x: 100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out",
        delay: 1.2
      }
    )

    // Floating animation for logo
    gsap.to(logoRef.current, {
      y: -5,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    })

    // Scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
        gsap.to(navbarRef.current, {
          background: "rgba(15, 20, 25, 0.95)",
          backdropFilter: "blur(20px)",
          duration: 0.3
        })
      } else {
        setScrolled(false)
        gsap.to(navbarRef.current, {
          background: "rgba(15, 20, 25, 0.8)",
          backdropFilter: "blur(10px)",
          duration: 0.3
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Drawer animations
  useEffect(() => {
    if (open) {
      gsap.fromTo(drawerRef.current,
        { x: '100%', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
    } else {
      gsap.to(drawerRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      })
    }
  }, [open])

  return (
    <>
      <motion.Box 
        ref={navbarRef}
        className={`navbar-container ${scrolled ? 'scrolled' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AppBar 
          className="modern-navbar"
          position="fixed"
          elevation={0}
        >
          <Container maxWidth="xl">
            <Toolbar className="toolbar-content">
              {/* Logo Section */}
              <motion.div 
                ref={logoRef}
                className="logo-section"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.6 }
                }}
              >
                <Typography className="logo-text" variant="h4" component="div">
                  <Image 
                    alt="Weather Dashboard" 
                    src={logo} 
                    className="logo-image"
                    width={50}
                    height={50}
                  />
                  <span className="logo-title">WeatherPro</span>
                </Typography>
              </motion.div>

              {/* Navigation Menu */}
              <motion.div 
                ref={menuRef}
                className="nav-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <nav className="desktop-nav">
                  <Link href="#home" className="nav-link">
                    <span>Home</span>
                  </Link>
                  <Link href="#weather" className="nav-link">
                    <span>Weather</span>
                  </Link>
                  <Link href="#forecast" className="nav-link">
                    <span>Forecast</span>
                  </Link>
                  <Link href="#about" className="nav-link">
                    <span>About</span>
                  </Link>
                </nav>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                ref={buttonRef}
                className="action-buttons"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href='https://www.linkedin.com/in/sameh-salih-02179b271/'>
                    <Button 
                      className="contact-btn"
                      variant="contained"
                      onClick={toggleDrawer(true)}
                    >
                      <span className="btn-text">Contact</span>
                      <span className="btn-icon">→</span>
                    </Button>
                  </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <IconButton
                  className="mobile-menu-btn"
                  onClick={toggleDrawer(true)}
                  sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
              </motion.div>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        className="mobile-drawer"
        PaperProps={{
          className: "drawer-paper"
        }}
      >
        <motion.div 
          ref={drawerRef}
          className="drawer-content"
        >
          <div className="drawer-header">
            <Typography variant="h6" className="drawer-title">
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer(false)} className="close-btn">
              <CloseIcon />
            </IconButton>
          </div>
          
          <Divider className="drawer-divider" />
          
          <List className="drawer-list">
            <ListItem className="drawer-item">
              <Link href="#home" className="drawer-link">
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem className="drawer-item">
              <Link href="#weather" className="drawer-link">
                <ListItemText primary="Weather" />
              </Link>
            </ListItem>
            <ListItem className="drawer-item">
              <Link href="#forecast" className="drawer-link">
                <ListItemText primary="Forecast" />
              </Link>
            </ListItem>
            <ListItem className="drawer-item">
              <Link href="#about" className="drawer-link">
                <ListItemText primary="About" />
              </Link>
            </ListItem>
          </List>
          
          <Divider className="drawer-divider" />
          
          <div className="drawer-footer">
            <Link href='https://www.linkedin.com/in/sameh-salih-02179b271/'>
              <Button 
                className="drawer-contact-btn"
                variant="contained"
                fullWidth
              >
                Contact Developer
              </Button>
            </Link>
          </div>
        </motion.div>
      </Drawer>
    </>
  )
}
