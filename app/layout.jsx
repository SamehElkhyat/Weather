<<<<<<< HEAD
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather",
  description: "website help you to know the weather details",
=======
import { Inter, Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./styles/design-system.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata = {
  title: "WeatherPro - Professional Weather Dashboard",
  description: "Premium weather application with real-time data, 5-day forecasts, and advanced analytics. Built with modern UI/UX principles.",
  keywords: "weather, forecast, dashboard, professional, real-time, analytics",
  authors: [{ name: "Sameh Salih" }],
  openGraph: {
    title: "WeatherPro - Professional Weather Dashboard",
    description: "Premium weather application with real-time data and advanced analytics",
    type: "website",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
>>>>>>> master
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body className={inter.className}>
      
        {children}

        
        </body>
=======
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Dark mode detection and initialization
              (function() {
                function getThemePreference() {
                  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                    return localStorage.getItem('theme');
                  }
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                
                function setTheme(theme) {
                  document.documentElement.setAttribute('data-theme', theme);
                  localStorage.setItem('theme', theme);
                }
                
                const theme = getThemePreference();
                setTheme(theme);
                
                // Listen for system theme changes
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                  if (!localStorage.getItem('theme')) {
                    setTheme(e.matches ? 'dark' : 'light');
                  }
                });
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <div id="root" className="app-root">
          {children}
        </div>
      </body>
>>>>>>> master
    </html>
  );
}
