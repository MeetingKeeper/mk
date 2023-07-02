import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the type for the theme context
interface ThemeContextType {
  theme: ThemeConfig;
  toggleTheme: () => void;
  toggleSidebar: () => void;
}

interface ThemeConfig {
  locale: string;
  theme: string;
  menu: string;
  layout: string;
  rtlClass: string;
  animation: string;
  navbar: string;
  semiDark: boolean;
  sidebar: boolean;
}

export const themeConfig : ThemeConfig = {
  locale: 'en', // en, da, de, el, es, fr, hu, it, ja, pl, pt, ru, sv, tr, zh
  theme: 'dark', // light, dark, system
  menu: 'vertical', // vertical, collapsible-vertical, horizontal
  layout: 'full', // full, boxed-layout
  rtlClass: 'ltr', // rtl, ltr
  animation: '', // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
  navbar: 'navbar-sticky', // navbar-sticky, navbar-floating, navbar-static
  semiDark: false,
  sidebar: true,
};

// Create a new context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type Props = {
  children?: ReactNode;
};

// Create a provider component for the theme context
const ThemeProvider = ({ children }: Props) => {
  // Set the initial theme state
  const [theme, setTheme] = useState<ThemeConfig>(themeConfig);

  // Function to toggle the theme
  const toggleTheme = (): void => {
    setTheme((prevState) => ({
      ...prevState,
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }));
  };

  const toggleSidebar = (): void => {
    setTheme((prevState) => {
      return {
        ...prevState,
        sidebar: !prevState.sidebar,
      }
    })
  }

  // Define the values to be provided by the theme context
  const themeContextValues: ThemeContextType = {
    theme,
    toggleTheme,
    toggleSidebar,
  };

  return (
    <ThemeContext.Provider value={themeContextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };


// Custom hook to consume the theme context
export const useTheme = (): ThemeContextType => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return themeContext;
};
