import { useTheme } from "@pm/ui";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import PageForm from "./form";

interface Props {
  children?: React.ReactNode;
}

const Dashboard = ({ children }: Props) => {
  const { theme } = useTheme();
  console.log("theme", theme.sidebar)

  return (
    <div className={`vertical ${(!theme.sidebar && 'toggle-sidebar') || ''} w-full h-full full ltr main-section relative font-nunito text-sm font-normal antialiased`}>
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
              <PageForm />
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

export default Dashboard;
