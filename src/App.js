import ContactPage from "pages/ContactPage/ContactPage";
import "./App.css";
import HompPage from "./pages/HomePage/HompPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FeaturesPage from "pages/FeaturesPage/FeaturesPage";
import AboutUsPage from "pages/AboutUsPage/AboutUsPage";
import DemoPage from "pages/DemoPage/DemoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HompPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
