/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    // screens: {
    //   sm: "575px",
    //   md: "768px",
    //   lg: "1025px",
    //   xl: "1202px",
    // },
    fontFamily: {
      display: ['"CalSans-SemiBold"', "sans-serif"],
      body: ['"DM Sans"', "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      accent: "#8358FF",
      "accent-dark": "#7444FF",
      "accent-light": "#9E7CFF",
      "accent-lighter": "#B9A0FF",
      "light-base": "#F5F8FA",
      green: "#10b981",
      orange: "#FEB240",
      red: "#EF4444",
      blue: "#428AF8",
      jacarta: {
        base: "#5A5D79",
        50: "#F4F4F6",
        100: "#E7E8EC",
        200: "#C4C5CF",
        300: "#A1A2B3",
        400: "#7D7F96",
        500: "#5A5D79",
        600: "#363A5D",
        700: "#131740",
        800: "#101436",
        900: "#0D102D",
      },
    },
    boxShadow: {
      none: "none",
      sm: "0px 1px 2px 0px rgba(13, 16, 45, 0.1)",
      base: "0px 1px 2px -1px rgba(13, 16, 45, 0.1), 0px 2px 4px 0px rgba(13, 16, 45, 0.1)",
      md: "0px 2px 4px -2px rgba(13, 16, 45, 0.1), 0px 4px 6px -1px rgba(13, 16, 45, 0.1)",
      lg: "0px 4px 6px -4px rgba(13, 16, 45, 0.1), 0px 10px 15px -3px rgba(13, 16, 45, 0.1)",
      xl: "0px 8px 10px -6px rgba(13, 16, 45, 0.1), 0px 20px 25px -5px rgba(13, 16, 45, 0.1)",
      "2xl":
        "0px 25px 50px -12px rgba(13, 16, 45, 0.1), 0px 12px 24px 0px rgba(13, 16, 45, 0.1)",
      "accent-volume":
        "5px 5px 10px rgba(108, 106, 213, 0.25), inset 2px 2px 6px #A78DF0, inset -5px -5px 10px #6336E4",
      "white-volume":
        "5px 5px 10px rgba(108, 106, 212, 0.25), inset 2px 2px 6px #EEF1F9, inset -5px -5px 10px #DFE3EF",
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "normal" }],
      "2xs": ["0.8125rem", { lineHeight: "normal" }],
      sm: ["0.875rem", { lineHeight: "normal" }],
      base: ["1rem", { lineHeight: "normal" }],
      lg: ["1.25rem", { lineHeight: "normal" }],
      xl: ["1.5rem", { lineHeight: "normal" }],
      "2xl": ["1.75rem", { lineHeight: "normal" }],
      "3xl": ["2rem", { lineHeight: "normal" }],
      "4xl": ["2.25rem", { lineHeight: "normal" }],
      "5xl": ["2.5rem", { lineHeight: "normal" }],
      "6xl": ["3.5rem", { lineHeight: "normal" }],
      "7xl": ["4.25rem", { lineHeight: "normal" }],
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {
      extend: {
        borderRadius: {
          "2lg": "0.625rem",
        },
        transitionProperty: {
          height: "height",
          width: "width",
        },
        animation: {
          fly: "fly 6s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
          heartBeat: "heartBeat 1s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
          progress: "progress 5s linear",
        },
        keyframes: {
          fly: {
            "0%, 100%": { transform: "translateY(5%)" },
            "50%": { transform: "translateY(0)" },
          },
          heartBeat: {
            "0%, 40%, 80%, 100%": { transform: "scale(1.1)" },
            "20%, 60%": { transform: "scale(.8)" },
          },
          progress: {
            "0%": { width: "0%" },
            "100%": { width: "100%" },
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#4361ee',
          light: '#eaf1ff',
          'dark-light': 'rgba(67,97,238,.15)',
        },
        secondary: {
          DEFAULT: '#805dca',
          light: '#ebe4f7',
          'dark-light': 'rgb(128 93 202 / 15%)',
        },
        success: {
          DEFAULT: '#00ab55',
          light: '#ddf5f0',
          'dark-light': 'rgba(0,171,85,.15)',
        },
        danger: {
          DEFAULT: '#e7515a',
          light: '#fff5f5',
          'dark-light': 'rgba(231,81,90,.15)',
        },
        warning: {
          DEFAULT: '#e2a03f',
          light: '#fff9ed',
          'dark-light': 'rgba(226,160,63,.15)',
        },
        info: {
          DEFAULT: '#2196f3',
          light: '#e7f7ff',
          'dark-light': 'rgba(33,150,243,.15)',
        },
        dark: {
          DEFAULT: '#3b3f5c',
          light: '#eaeaec',
          'dark-light': 'rgba(59,63,92,.15)',
        },
        black: {
          DEFAULT: '#0e1726',
          light: '#e3e4eb',
          'dark-light': 'rgba(14,23,38,.15)',
        },
        white: {
          DEFAULT: '#ffffff',
          light: '#e0e6ed',
          dark: '#888ea8',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      spacing: {
        4.5: '18px',
      },
      boxShadow: {
        '3xl': '0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-invert-headings': theme('colors.white.dark'),
            '--tw-prose-invert-links': theme('colors.white.dark'),
            h1: { fontSize: '40px', marginBottom: '0.5rem', marginTop: 0 },
            h2: { fontSize: '32px', marginBottom: '0.5rem', marginTop: 0 },
            h3: { fontSize: '28px', marginBottom: '0.5rem', marginTop: 0 },
            h4: { fontSize: '24px', marginBottom: '0.5rem', marginTop: 0 },
            h5: { fontSize: '20px', marginBottom: '0.5rem', marginTop: 0 },
            h6: { fontSize: '16px', marginBottom: '0.5rem', marginTop: 0 },
            p: { marginBottom: '0.5rem' },
            li: { margin: 0 },
            img: { margin: 0 },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
