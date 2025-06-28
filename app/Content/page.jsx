'use client'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import logo from '../img/banner.png'
import umbrela from '../img/icon-umberella.png'
import wind from '../img/icon-wind.png'
import air from '../img/icon-compass.png'
import './Content.css'
import Image from 'next/image'
import axios from 'axios'
import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Page() {
  const [City, setCity] = useState("cairo")
  const [product, setProduct] = useState([])
  const [Current, setCurrent] = useState([])
  const [country, setcountry] = useState([])
  const [Forrest, setForrest] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Refs for GSAP animations
  const bannerRef = useRef(null)
  const cardsRef = useRef(null)
  const selectRef = useRef(null)
  const weatherCardRef = useRef(null)
  const locationCardRef = useRef(null)
  const forecastCardRef = useRef(null)

  const getProduct = useCallback(async () => {
    setIsLoading(true)
    const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${City}`)
    setProduct([data.location])
    setIsLoading(false)
  }, [City])

  const getCountry = useCallback(async () => {
    const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${City}`)
    setcountry([data.location.name])
  }, [City])

  const getCurrent = useCallback(async () => {
    const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${City}`)
    setCurrent([data.current])
  }, [City])

  const getForrest = useCallback(async () => {
    const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${City}`)
    setForrest(data.forecast.forecastday)
  }, [City])

  // GSAP Animations
  useEffect(() => {
    // Banner animation
    gsap.fromTo(bannerRef.current,
      { scale: 1.2, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 2, 
        ease: "power2.out",
        delay: 0.5
      }
    )

    // Cards stagger animation
  
    // Select dropdown animation
    gsap.fromTo(selectRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.8 }
    )

    // Floating animation for cards
    gsap.to([weatherCardRef.current, locationCardRef.current, forecastCardRef.current], {
      y: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    })

  }, [])

  // Re-animate when city changes
  useEffect(() => {
    if (!isLoading) {
      gsap.to([weatherCardRef.current, locationCardRef.current, forecastCardRef.current], {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      })
    }
  }, [City, isLoading])

  useEffect(() => {
    getProduct()
    getCurrent()
    getCountry()
    getForrest()
  }, [City])

  return (
    <>
      {/* Hero Banner */}
      <div ref={bannerRef} className="hero-banner">
        <Image 
          className="banner-image" 
          src={logo} 
          alt="Weather Banner"
          priority
        />
        <div className="banner-overlay">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Professional Weather Dashboard
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Real-time weather data with advanced analytics
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-container">
        {/* City Selector */}
        <motion.div 
          ref={selectRef}
          className="city-selector"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Stack direction="row" justifyContent="center" sx={{ minWidth: 300 }}>
            <FormControl sx={{ width: '100%', maxWidth: 400 }}>
              <InputLabel 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  '&.Mui-focused': { color: '#fff' }
                }}
              >
                Select City
              </InputLabel>
              <Select
                value={City}
                onChange={(e) => setCity(e.target.value)}
                sx={{
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#dc3545',
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'white',
                  }
                }}
              >
                <MenuItem value="cairo">Cairo</MenuItem>
                <MenuItem value="Bani Suwayf">بني سويف</MenuItem>
                <MenuItem value="alexandria">Alexandria</MenuItem>
                <MenuItem value="giza">Giza</MenuItem>
                <MenuItem value="sharm el sheikh">Sharm El Sheikh</MenuItem>
                <MenuItem value="luxor">Luxor</MenuItem>
                <MenuItem value="aswan">Aswan</MenuItem>
                <MenuItem value="hurghada">Hurghada</MenuItem>
                <MenuItem value="dahab">Dahab</MenuItem>
                <MenuItem value="siwa">Siwa</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </motion.div>

        {/* Weather Cards Grid */}
        <div ref={cardsRef} className="cards-grid">
          {/* Current Weather Card */}
          <motion.div 
            ref={weatherCardRef}
            className="weather-card current-weather"
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="card-header">
              <h3 className="card-title">Current Weather</h3>
              <div className="card-icon">
                <Image src={umbrela} alt="Weather" width={40} height={40} />
              </div>
            </div>
            
            <div className="card-content">
              {Current.map((item, index) => (
                <div key={index} className="weather-info">
                  <div className="temperature-section">
                    <h2 className="temperature">{item.temp_c}°C</h2>
                    <p className="condition">{item.condition.text}</p>
                  </div>
                  
                  <div className="weather-details">
                    <div className="detail-item">
                      <Image src={umbrela} alt="Humidity" width={20} height={20} />
                      <span>Humidity: {item.humidity}%</span>
                    </div>
                    <div className="detail-item">
                      <Image src={wind} alt="Wind" width={20} height={20} />
                      <span>Wind: {item.wind_kph} km/h</span>
                    </div>
                    <div className="detail-item">
                      <Image src={air} alt="Pressure" width={20} height={20} />
                      <span>Pressure: {item.pressure_mb} mb</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location Details Card */}
          <motion.div 
            ref={locationCardRef}
            className="weather-card location-details"
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="card-header">
              <h3 className="card-title">Location Details</h3>
              <div className="card-icon">
                <Image src={air} alt="Location" width={40} height={40} />
              </div>
            </div>
            
            <div className="card-content">
              {product.map((item, index) => (
                <div key={index} className="location-info">
                  <div className="location-main">
                    <h2 className="city-name">{item.name}</h2>
                    <p className="country-name">{item.country}</p>
                  </div>
                  
                  <div className="location-details">
                    <div className="detail-item">
                      <span className="label">Region:</span>
                      <span className="value">{item.region}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Latitude:</span>
                      <span className="value">{item.lat}°</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Longitude:</span>
                      <span className="value">{item.lon}°</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Timezone:</span>
                      <span className="value">{item.tz_id}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Local Time:</span>
                      <span className="value">{item.localtime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5-Day Forecast Card */}
          <motion.div 
            ref={forecastCardRef}
            className="weather-card forecast-card"
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="card-header">
              <h3 className="card-title">5-Day Forecast</h3>
              <div className="card-icon">
                <Image src={wind} alt="Forecast" width={40} height={40} />
              </div>
            </div>
            
            <div className="card-content">
              <div className="forecast-list">
                {Forrest.map((day, index) => (
                  <motion.div 
                    key={index} 
                    className="forecast-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="forecast-date">
                      <span className="day">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}</span>
                      <span className="date">{new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    
                    <div className="forecast-weather">
                      <div className="forecast-temp">
                        <span className="max-temp">{day.day.maxtemp_c}°</span>
                        <span className="min-temp">{day.day.mintemp_c}°</span>
                      </div>
                      <div className="forecast-condition">
                        <span>{day.day.condition.text}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}