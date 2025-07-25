"use client"
import React, { useState, useEffect, useRef } from "react"
import "./Navbar.css"
import logo from "./Weather.png"
<<<<<<< HEAD
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
=======
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "../components/ThemeProvider"

// Modern Icon Components
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
>>>>>>> master
  </svg>
)

const CloseIcon = () => (
<<<<<<< HEAD
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
=======
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/>
    <polyline points="7,7 17,7 17,17"/>
  </svg>
)

// Language Toggle Component
const LanguageToggle = ({ currentLang = 'en', onToggle }) => (
  <motion.button
    onClick={onToggle}
    className="language-toggle"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label={`Switch to ${currentLang === 'en' ? 'Arabic' : 'English'}`}
  >
    <span className="lang-text">{currentLang === 'en' ? 'ع' : 'EN'}</span>
  </motion.button>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')
>>>>>>> master
  
  // Refs for GSAP animations
  const navbarRef = useRef(null)
  const logoRef = useRef(null)
<<<<<<< HEAD
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const drawerRef = useRef(null)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
=======
  const navLinksRef = useRef(null)
  const actionsRef = useRef(null)

  // Navigation items
  const navItems = [
    { href: "#home", label: "Home", labelAr: "الرئيسية" },
    { href: "#weather", label: "Weather", labelAr: "الطقس" },
    { href: "#forecast", label: "Forecast", labelAr: "التوقعات" },
    { href: "#about", label: "About", labelAr: "حول" },
  ]

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  // Handle language toggle
  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en'
    setCurrentLang(newLang)
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', newLang)
>>>>>>> master
  }

  // GSAP Animations
  useEffect(() => {
<<<<<<< HEAD
    // Navbar entrance animation
    gsap.fromTo(navbarRef.current,
=======
    const tl = gsap.timeline()
    
    // Navbar entrance animation
    tl.fromTo(navbarRef.current,
>>>>>>> master
      { y: -100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
<<<<<<< HEAD
        ease: "power3.out",
        delay: 0.5
      }
    )

    // Logo animation
    gsap.fromTo(logoRef.current,
=======
        ease: "power3.out"
      }
    )
    .fromTo(logoRef.current,
>>>>>>> master
      { scale: 0, rotation: -180 },
      { 
        scale: 1, 
        rotation: 0, 
        duration: 1, 
<<<<<<< HEAD
        ease: "back.out(1.7)",
        delay: 0.8
      }
    )

    // Menu button animation
    gsap.fromTo(buttonRef.current,
      { x: 100, opacity: 0 },
=======
        ease: "back.out(1.7)"
      }, "-=0.8"
    )
    .fromTo(navLinksRef.current?.children || [],
      { y: -30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.6"
    )
    .fromTo(actionsRef.current,
      { x: 50, opacity: 0 },
>>>>>>> master
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8, 
<<<<<<< HEAD
        ease: "power2.out",
        delay: 1.2
      }
=======
        ease: "power2.out"
      }, "-=0.4"
>>>>>>> master
    )

    // Floating animation for logo
    gsap.to(logoRef.current, {
<<<<<<< HEAD
      y: -5,
      duration: 3,
=======
      y: -3,
      duration: 2,
>>>>>>> master
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    })

<<<<<<< HEAD
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
=======
  }, [])

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !navbarRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        {currentLang === 'ar' ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      <motion.nav 
        ref={navbarRef}
        className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-container">
          {/* Logo Section */}
          <motion.div 
            ref={logoRef}
            className="logo-section"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <Link href="#home" className="logo-link" aria-label="WeatherPro Home">
              <div className="logo-wrapper">
                <Image 
                  src={logo} 
                  alt="WeatherPro Logo" 
                  width={48}
                  height={48}
                  className="logo-image"
                  priority
                />
                <div className="logo-text">
                  <h1 className="logo-title text-gradient-primary">
                    {currentLang === 'ar' ? 'ويذر برو' : 'WeatherPro'}
                  </h1>
                  <span className="logo-subtitle">
                    {currentLang === 'ar' ? 'لوحة قيادة احترافية' : 'Professional Dashboard'}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div ref={navLinksRef} className="desktop-nav hide-mobile">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link 
                  href={item.href} 
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{currentLang === 'ar' ? item.labelAr : item.label}</span>
                  <div className="nav-link-indicator" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div ref={actionsRef} className="action-buttons">
            {/* Language Toggle */}
            <LanguageToggle 
              currentLang={currentLang} 
              onToggle={toggleLanguage}
            />
            
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Contact Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hide-mobile"
            >
              <Link 
                href='https://www.linkedin.com/in/sameh-salih-02179b271/'
                className="contact-btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact developer on LinkedIn"
              >
                <span className="btn-text">
                  {currentLang === 'ar' ? 'تواصل' : 'Contact'}
                </span>
                <ArrowIcon />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="mobile-menu-btn show-mobile"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <CloseIcon /> : <MenuIcon />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                className="mobile-menu"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
              >
                <div className="mobile-menu-content">
                  <div className="mobile-menu-header">
                    <h2 className="mobile-menu-title">
                      {currentLang === 'ar' ? 'القائمة' : 'Menu'}
                    </h2>
                  </div>

                  <nav className="mobile-nav-links" role="navigation">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Link 
                          href={item.href} 
                          className="mobile-nav-link"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>{currentLang === 'ar' ? item.labelAr : item.label}</span>
                          <ArrowIcon />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mobile-menu-footer">
                    <Link 
                      href='https://www.linkedin.com/in/sameh-salih-02179b271/'
                      className="mobile-contact-btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>
                        {currentLang === 'ar' ? 'تواصل مع المطور' : 'Contact Developer'}
                      </span>
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
>>>>>>> master
    </>
  )
}
