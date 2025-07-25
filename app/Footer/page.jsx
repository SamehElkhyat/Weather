"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";
import { Autocomplete, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { gsap } from "gsap";

// Modern Icon Components
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16,18 22,12 16,6"/>
    <polyline points="8,6 2,12 8,18"/>
  </svg>
)

export default function Footer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [cityOptions, setCityOptions] = useState([
    "Cairo", "Alexandria", "Giza", "Sharm El Sheikh", "Luxor", "Aswan", 
    "Hurghada", "Dahab", "Siwa", "Bani Suwayf", "Port Said", "Suez",
    "New York", "London", "Paris", "Tokyo", "Dubai", "Istanbul"
  ])
  
  // Refs for GSAP animations
  const footerRef = useRef(null)
  const contentRef = useRef(null)
  const socialRef = useRef(null)

  // Features data
  const features = [
    { title: "Real-time Data", description: "Live weather updates every minute" },
    { title: "5-Day Forecast", description: "Extended weather predictions" },
    { title: "Global Coverage", description: "Weather data from around the world" },
    { title: "Professional UI", description: "Modern and intuitive interface" },
    { title: "Mobile Ready", description: "Optimized for all devices" },
    { title: "Dark Mode", description: "Beautiful dark theme support" }
  ]

  // Technologies data
  const technologies = [
    { name: "Next.js 14", description: "React framework" },
    { name: "React 18", description: "JavaScript library" },
    { name: "Framer Motion", description: "Animation library" },
    { name: "GSAP", description: "Professional animations" },
    { name: "Material-UI", description: "Component library" },
    { name: "Tailwind CSS", description: "Utility-first CSS" }
  ]

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline()
    
    // Footer entrance animation
    tl.fromTo(footerRef.current,
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power3.out"
      }
    )
    .fromTo(contentRef.current?.children || [],
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out",
        stagger: 0.2
      }, "-=0.8"
    )
    .fromTo(socialRef.current,
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.6, 
        ease: "back.out(1.7)"
      }, "-=0.4"
    )

  }, [])

  return (
    <motion.footer 
      ref={footerRef}
      className="modern-footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      role="contentinfo"
    >
      <div className="footer-container container-modern">
        <div ref={contentRef} className="footer-content">
          {/* Main Info Section */}
          <div className="footer-section main-section">
            <motion.div 
              className="footer-brand"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="brand-title text-gradient-primary">WeatherPro</h3>
              <p className="brand-tagline">Professional Weather Dashboard</p>
            </motion.div>
            
            <p className="footer-description">
              Experience weather like never before with our professional dashboard. 
              Get real-time data, accurate forecasts, and beautiful visualizations 
              for locations worldwide.
            </p>
            
            <div className="search-section">
              <h4 className="section-title">Quick City Search</h4>
              <Autocomplete
                freeSolo
                options={cityOptions}
                value={searchQuery}
                onChange={(event, newValue) => setSearchQuery(newValue || "")}
                onInputChange={(event, newInputValue) => setSearchQuery(newInputValue)}
                className="city-search"
                renderInput={(params) => (
                  <TextField 
                    {...params} 
                    placeholder="Search for a city..."
                    className="search-input"
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 'var(--radius-lg)',
                        color: 'var(--color-dark-text-primary)',
                        transition: 'all var(--transition-base)',
                        '& fieldset': {
                          border: 'none'
                        },
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.08)',
                          borderColor: 'rgba(255, 255, 255, 0.2)'
                        },
                        '&.Mui-focused': {
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderColor: 'var(--color-primary-400)',
                          borderWidth: '2px'
                        }
                      },
                      '& .MuiInputBase-input': {
                        color: 'var(--color-dark-text-primary)',
                        fontSize: 'var(--text-sm)',
                        '&::placeholder': {
                          color: 'var(--color-dark-text-tertiary)',
                          opacity: 1
                        }
                      },
                      '& .MuiSvgIcon-root': {
                        color: 'var(--color-dark-text-secondary)'
                      }
                    }}
                  />
                )}
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="footer-section">
            <h4 className="section-title">Features</h4>
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="feature-icon">
                    <div className="icon-dot"></div>
                  </div>
                  <div className="feature-content">
                    <h5 className="feature-title">{feature.title}</h5>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="footer-section">
            <h4 className="section-title">Built With</h4>
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="tech-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <CodeIcon />
                  <div className="tech-info">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-description">{tech.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Developer Section */}
          <div className="footer-section developer-section">
            <h4 className="section-title">Developer</h4>
            <div className="developer-card glass-card">
              <div className="developer-info">
                <div className="developer-avatar">
                  <span className="avatar-text">SS</span>
                </div>
                <div className="developer-details">
                  <h5 className="developer-name">Sameh Salih</h5>
                  <p className="developer-role">Full Stack Developer</p>
                  <div className="developer-location">
                    <MapPinIcon />
                    <span>Egypt</span>
                  </div>
                </div>
              </div>
              
              <div ref={socialRef} className="social-links">
                <motion.a 
                  href="https://github.com/SamehElkhyat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub Profile"
                >
                  <GithubIcon />
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/sameh-salih-02179b271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon />
                </motion.a>
                
                <motion.a 
                  href="mailto:sameh@example.com"
                  className="social-link email"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Send Email"
                >
                  <MailIcon />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div 
            className="footer-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
          />
          
          <div className="bottom-content">
            <div className="copyright-section">
              <p className="copyright">
                © {new Date().getFullYear()} WeatherPro Dashboard. All rights reserved.
              </p>
              <div className="legal-links">
                <a href="#privacy" className="legal-link">Privacy Policy</a>
                <span className="separator">•</span>
                <a href="#terms" className="legal-link">Terms of Service</a>
                <span className="separator">•</span>
                <a href="#cookies" className="legal-link">Cookie Policy</a>
              </div>
            </div>
            
            <motion.div 
              className="made-with-love"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span>Made with</span>
              <motion.span
                className="heart"
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#ef4444', '#f87171', '#ef4444']
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <HeartIcon />
              </motion.span>
              <span>by Sameh Salih</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}



