import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import 'tailwindcss/tailwind.css';
import '@pm/styles/globals.css';
import "@pm/styles/tailwind.css";
import './App.css';
import { ThemeProvider } from '@pm/ui/contexts/theme';
import Dashboard from "./pages/Dashboard";

function Hello() {
  return (
    <div className="bg-black">
      <div className="vertical full ltr main-section relative font-nunito text-sm font-normal antialiased">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1 className="bg-black">electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard> Hello </Dashboard>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
