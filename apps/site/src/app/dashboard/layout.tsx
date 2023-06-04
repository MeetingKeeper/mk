"use client";

import Sidebar from "@/components/Layouts/Sidebar";
import { useTheme } from "@/contexts/theme";
import Header from "@/components/Layouts/Header";

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div className={`${(!theme.sidebar && 'toggle-sidebar') || ''} vertical full ltr main-section relative font-nunito text-sm font-normal antialiased`}>
      <div className="relative h-full">
        <div className={`navbar-sticky main-container min-h-screen text-black dark:text-white-dark`}>
          {/* BEGIN SIDEBAR */}
          <Sidebar />
          {/* END SIDEBAR */}
          {/* BEGIN CONTENT AREA */}
          <div className="main-content h-full">
            {/* BEGIN TOP NAVBAR */}
            <Header />
            {/* END TOP NAVBAR */}
            <div className={`animate__animated p-6 h-full`}>
              {children}
              {/* BEGIN FOOTER */}
              {/* END FOOTER */}
            </div>
            {/*<Portals />*/}
          </div>
          {/* END CONTENT AREA */}
        </div>
      </div>
    </div>
  );
}
