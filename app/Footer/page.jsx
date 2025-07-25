"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";
import { Autocomplete, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Page() {
  const [top100Films, settop100Films] = useState(["Giza","Cairo"])
  
  // Refs for GSAP animations
  const footerRef = useRef(null)
  const searchRef = useRef(null)
  const textRef = useRef(null)
  const linkRef = useRef(null)

  // GSAP Animations
  useEffect(() => {
    // Footer entrance animation
    gsap.fromTo(footerRef.current,
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out",
        delay: 0.5
      }
    )

    // Search field animation
    gsap.fromTo(searchRef.current,
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8, 
        ease: "back.out(1.7)",
        delay: 1
      }
    )

    // Text animations
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        delay: 1.2
      }
    )

    // Link animation
    gsap.fromTo(linkRef.current,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        ease: "back.out(1.7)",
        delay: 1.5
      }
    )

    // Floating animation
    gsap.to(footerRef.current, {
      y: -5,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    })

  }, [])

  return (
    <motion.footer 
      ref={footerRef}
      className="modern-footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <motion.h5 
              ref={textRef}
              className="footer-title"
              whileHover={{ scale: 1.05 }}
            >
              WeatherPro Dashboard
            </motion.h5>
            <motion.p 
              className="footer-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Professional weather application with real-time data and advanced analytics. 
              Built with modern technologies for optimal performance and user experience.
            </motion.p>
            
            <motion.div
              ref={searchRef}
              className="search-section"
              whileHover={{ scale: 1.02 }}
            >
              <Autocomplete
                id="SearchEngine"
                className="modern-search"
                options={top100Films}
                renderInput={(params) => (
                  <TextField 
                    {...params} 
                    label="Search cities..."
                    className="search-input"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          transition: 'border-color 0.3s ease'
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.4)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#3b82f6'
                        }
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-focused': {
                          color: '#3b82f6'
                        }
                      },
                      '& .MuiInputBase-input': {
                        color: '#fff'
                      }
                    }}
                  />
                )}
              />
            </motion.div>
          </div>

          <div className="footer-section">
            <motion.h6 
              className="section-title"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              Features
            </motion.h6>
            <motion.ul 
              className="feature-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Real-time weather data
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                5-day forecast
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Multiple city support
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Professional UI/UX
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Responsive design
              </motion.li>
            </motion.ul>
          </div>

          <div className="footer-section">
            <motion.h6 
              className="section-title"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              Technologies
            </motion.h6>
            <motion.ul 
              className="tech-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            >
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Next.js 14
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                React 18
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                GSAP Animations
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Framer Motion
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Material-UI
              </motion.li>
            </motion.ul>
          </div>

          <div className="footer-section">
            <motion.h6 
              className="section-title"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6, duration: 0.8 }}
            >
              Developer
            </motion.h6>
            <motion.div 
              className="developer-info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.8 }}
            >
              <motion.p 
                className="developer-name"
                whileHover={{ scale: 1.05 }}
              >
                Sameh Salih
              </motion.p>
              <motion.p 
                className="developer-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.8 }}
              >
                Full Stack Developer
              </motion.p>
              <motion.div 
                className="social-links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2, duration: 0.8 }}
              >
                <motion.a 
                  href="https://www.linkedin.com/in/sameh-salih-02179b271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a 
                  href="https://github.com/SamehElkhyat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        >
          <motion.div 
            className="footer-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 3.8, duration: 1 }}
          />
          <motion.div 
            className="copyright-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
          >
            <p className="copyright">
              © 2024 WeatherPro Dashboard. All rights reserved.
            </p>
            <motion.p 
              ref={linkRef}
              className="made-with-love"
              whileHover={{ scale: 1.05 }}
            >
              Made with ❤️ by Sameh Salih
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}



