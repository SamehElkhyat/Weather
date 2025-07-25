'use client'
<<<<<<< HEAD
import React, { useCallback, useEffect, useState, useRef } from 'react'
import logo from '../img/banner.png'
import umbrela from '../img/icon-umberella.png'
import wind from '../img/icon-wind.png'
import air from '../img/icon-compass.png'
=======
  import React, { useCallback, useEffect, useState, useRef, useLayoutEffect } from 'react'
import bannerImage from '../img/banner.png'
import humidityIcon from '../img/icon-umberella.png'
import windIcon from '../img/icon-wind.png'
import pressureIcon from '../img/icon-compass.png'
>>>>>>> master
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

<<<<<<< HEAD
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
=======
// Modern Icon Components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="21 21l-4.35-4.35"/>
  </svg>
)

const ThermometerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
  </svg>
)

const DropletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
)

const WindIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
  </svg>
)

const GaugeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 14 4-4"/>
    <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

export default function Content() {
  const [city, setCity] = useState("cairo")
  const [locationData, setLocationData] = useState([])
  const [currentWeather, setCurrentWeather] = useState([])
  const [forecastData, setForecastData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Refs for GSAP animations
  const heroRef = useRef(null)
  const selectorRef = useRef(null)
  const cardsRef = useRef(null)

  // Cities data with Arabic names
  const cities = [
    { value: "cairo", label: "Cairo", labelAr: "القاهرة" },
    { value: "alexandria", label: "Alexandria", labelAr: "الإسكندرية" },
    { value: "giza", label: "Giza", labelAr: "الجيزة" },
    { value: "sharm el sheikh", label: "Sharm El Sheikh", labelAr: "شرم الشيخ" },
    { value: "luxor", label: "Luxor", labelAr: "الأقصر" },
    { value: "aswan", label: "Aswan", labelAr: "أسوان" },
    { value: "hurghada", label: "Hurghada", labelAr: "الغردقة" },
    { value: "dahab", label: "Dahab", labelAr: "دهب" },
    { value: "siwa", label: "Siwa", labelAr: "سيوة" },
    { value: "bani suwayf", label: "Bani Suwayf", labelAr: "بني سويف" }
  ]

  // API call function
  const fetchWeatherData = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try { 
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${city}&days=5`
      )
      setIsLoading(false)
      const data = response.data
      setLocationData([data.location])
      setCurrentWeather([data.current])
      setForecastData(data.forecast.forecastday)
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.')
      setIsLoading(false)
      console.error('Weather API Error:', err)
    }
  }, [city])

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline()
    
    // Hero section animation
    tl.fromTo(heroRef.current,
      { opacity: 0, scale: 1.1 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1.5, 
        ease: "power2.out" 
      }
    )
    .fromTo(selectorRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out" 
      }, "-=0.8"
    )

    // Cards animation on scroll
    gsap.fromTo(cardsRef.current?.children || [],
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

  }, [])

  // Fetch data on city change
  useEffect(() => {
    fetchWeatherData()
  }, [fetchWeatherData])

  const getWeatherIcon = (condition) => {
    const conditionLower = condition?.toLowerCase() || ''
    if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
      return <DropletIcon />
    } else if (conditionLower.includes('wind')) {
      return <WindIcon />
    } else {
      return <ThermometerIcon />
    }
  }
  // Format date for forecast
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }
  }
  return (
    <div className="content-wrapper">
      {/* Hero Banner */}
      <motion.section 
        ref={heroRef}
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-background">
          <Image 
            src={bannerImage} 
            alt="Weather Dashboard Background"
            fill
            className="hero-image"
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
        </div>
        
        <div className="hero-content container-modern">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="hero-title text-gradient-primary">
              Professional Weather Dashboard
            </h1>
            <p className="hero-subtitle">
              Real-time weather data with advanced analytics and beautiful visualizations
            </p>
          </motion.div>
        </div>
      </motion.section>
      {/* Main Content */}
      <section className="weather-content">
        <div className="container-modern">
          {/* City Selector */}
          <motion.div 
            ref={selectorRef}
            className="city-selector-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="selector-wrapper glass-card">
              <div className="selector-header">
                <SearchIcon />
                <h3 className="selector-title">Select Location</h3>
              </div>
              
              <FormControl className="city-select" fullWidth>
                <InputLabel 
                  className="select-label"
                  sx={{ 
                    color: 'var(--color-dark-text-secondary)',
                    fontSize: 'var(--text-sm)',
                    '&.Mui-focused': { 
                      color: 'var(--color-primary-400)' 
                    }
                  }}
                >
                  Choose your city
                </InputLabel>
                <Select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="select-input"
                  sx={{
                    color: 'var(--color-dark-text-primary)',
                    fontSize: 'var(--text-base)',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-lg)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--color-primary-400)',
                      borderWidth: '2px',
                    },
                    '& .MuiSvgIcon-root': {
                      color: 'var(--color-dark-text-secondary)',
                    }
                  }}
                >
                  {cities.map((cityOption) => (
                    <MenuItem key={cityOption.value} value={cityOption.value}>
                      {cityOption.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </motion.div>
          <div ref={cardsRef} className="weather-grid">
            <AnimatePresence mode="wait">
              { error ? (
                <motion.div
                  key="error"
                  className="error-state glass-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  {console.log("ahmed2")}
                  <div className="error-content">
                    <div className="error-icon">⚠️</div>
                    <h3 className="error-title">Unable to load weather data</h3>
                    <p className="error-message">{error}</p>
                    <motion.button
                      className="retry-button btn-primary"
                      onClick={fetchWeatherData}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Try Again
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {console.log("ahmed3")}
                  {/* Current Weather Card */}
                  <motion.div 
                    className="weather-card current-weather-card glass-card hover-lift"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="card-header">
                      <div className="card-icon">
                        <ThermometerIcon />
                      </div>
                      <div className="card-title-section">
                        <h3 className="card-title">Current Weather</h3>
                        <span className="card-subtitle">Real-time conditions</span>
                      </div>
                    </div>
                    
                    <div className="card-content">
                      {currentWeather.map((weather, index) => (
                        <div key={index} className="current-weather-content">
                          <div className="temperature-section">
                            <div className="main-temperature">
                              <span className="temp-value">{Math.round(weather.temp_c)}</span>
                              <span className="temp-unit">°C</span>
                            </div>
                            <div className="condition-info">
                              <span className="condition-text">{weather.condition.text}</span>
                              <span className="feels-like">Feels like {Math.round(weather.feelslike_c)}°C</span>
                            </div>
                          </div>
                          
                          <div className="weather-metrics">
                            <div className="metric-item">
                              <div className="metric-icon">
                                <DropletIcon />
                              </div>
                              <div className="metric-info">
                                <span className="metric-label">Humidity</span>
                                <span className="metric-value">{weather.humidity}%</span>
                              </div>
                            </div>
                            
                            <div className="metric-item">
                              <div className="metric-icon">
                                <WindIcon />
                              </div>
                              <div className="metric-info">
                                <span className="metric-label">Wind Speed</span>
                                <span className="metric-value">{weather.wind_kph} km/h</span>
                              </div>
                            </div>
                            
                            <div className="metric-item">
                              <div className="metric-icon">
                                <GaugeIcon />
                              </div>
                              <div className="metric-info">
                                <span className="metric-label">Pressure</span>
                                <span className="metric-value">{weather.pressure_mb} mb</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Location Details Card */}
                  <motion.div 
                    className="weather-card location-card glass-card hover-lift"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="card-header">
                      <div className="card-icon">
                        <LocationIcon />
                      </div>
                      <div className="card-title-section">
                        <h3 className="card-title">Location Details</h3>
                        <span className="card-subtitle">Geographic information</span>
                      </div>
                    </div>
                    
                    <div className="card-content">
                      {locationData.map((location, index) => (
                        <div key={index} className="location-content">
                          <div className="location-main">
                            <h4 className="location-name">{location.name}</h4>
                            <p className="location-region">{location.region}, {location.country}</p>
                          </div>
                          
                          <div className="location-details">
                            <div className="detail-row">
                              <span className="detail-label">Coordinates</span>
                              <span className="detail-value">{location.lat}°, {location.lon}°</span>
                            </div>
                            <div className="detail-row">
                              <span className="detail-label">Timezone</span>
                              <span className="detail-value">{location.tz_id}</span>
                            </div>
                            <div className="detail-row">
                              <span className="detail-label">Local Time</span>
                              <span className="detail-value">
                                {new Date(location.localtime).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* 5-Day Forecast Card */}
                  <motion.div 
                    className="weather-card forecast-card glass-card hover-lift"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="card-header">
                      <div className="card-icon">
                        <CalendarIcon />
                      </div>
                      <div className="card-title-section">
                        <h3 className="card-title">5-Day Forecast</h3>
                        <span className="card-subtitle">Extended outlook</span>
                      </div>
                    </div>
                    
                    <div className="card-content">
                      <div className="forecast-list">
                        {forecastData.map((day, index) => {
                          const dateInfo = formatDate(day.date)
                          return (
                            <motion.div 
                              key={index} 
                              className="forecast-item"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                              whileHover={{ 
                                scale: 1.02,
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                transition: { duration: 0.2 }
                              }}
                            >
                              <div className="forecast-date">
                                <span className="forecast-day">{dateInfo.day}</span>
                                <span className="forecast-date-num">{dateInfo.date}</span>
                              </div>
                              
                              <div className="forecast-weather">
                                <div className="forecast-icon">
                                  {getWeatherIcon(day.day.condition.text)}
                                </div>
                                <div className="forecast-condition">
                                  <span className="condition-text">{day.day.condition.text}</span>
                                </div>
                              </div>
                              
                              <div className="forecast-temps">
                                <span className="temp-high">{Math.round(day.day.maxtemp_c)}°</span>
                                <span className="temp-low">{Math.round(day.day.mintemp_c)}°</span>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
>>>>>>> master
  )
}