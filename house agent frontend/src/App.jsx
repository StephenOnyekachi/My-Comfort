import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Landing Components
import Navbar from "./Components/Landing/Navbar";
import Footer from "./Components/Landing/Footer";
import About from "./Components/Landing/About";
import Hero from "./Components/Landing/Hero";
import PageNotFound from "./Components/Landing/PageNotFound";

// User Components
import PropertyList from "./Components/User/PropertyList";
import PropertyDetails from "./Components/User/PropertyDetails";
import Agent from "./Components/User/Agent";
import AIAgent from "./Components/User/AIAgent";
import Sell from "./Components/User/Sell";
import Rent from "./Components/User/Rent";
import GetStarted from "./Components/User/GetStarted";
import SignIn from "./Components/User/SignIn";

// Admin Components
import Dashboard from "./Components/Admin/Dashboard";
import EditProperty from "./Components/Admin/EditProperty";
import AddProperty from "./Components/Admin/AddProperty";
import AdminPropertyView from "./Components/Admin/AdminPropertyView";
import AdminAgents from "./Components/Admin/AdminAgents";
import AddAgent from "./Components/Admin/AddAgent";
import AdminAgentView from "./Components/Admin/AdminAgentView";
import EditAgent from "./Components/Admin/EditAgent";

// Effects
import {
  initPreloader,
  initSmoothScroll,
  initNavScroll,
  initSlideTop,
  initSlideLeft,
  initZoomIn,
  setupPasswordToggles,
  initMobileNav,
} from "./effects";

function App() {
  const location = useLocation();

  useEffect(() => {
    initPreloader();
    initSmoothScroll();
    initNavScroll();
    initSlideTop();
    initSlideLeft();
    initZoomIn();
    setupPasswordToggles();
    initMobileNav();
  }, []);

  // Admin pages should not show the public Navbar/Footer
  const isAdminRoute =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/adminpropertyview") ||
    location.pathname.startsWith("/addproperty") ||
    location.pathname.startsWith("/editproperty") ||
    location.pathname.startsWith("/adminagents") ||
    location.pathname.startsWith("/addagent") ||
    location.pathname.startsWith("/editagent");

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        {/* Public Navbar */}
        {!isAdminRoute && <Navbar />}

        <Routes>
          {/* ============================================
              ADMIN ROUTES
          ============================================ */}

          {/* Admin Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* All Properties */}
          <Route
            path="/adminpropertyview"
            element={<AdminPropertyView />}
          />

          {/* Single Property */}
          <Route
            path="/adminpropertyview/:id"
            element={<AdminPropertyView />}
          />

          {/* Add Property */}
          <Route
            path="/addproperty"
            element={<AddProperty />}
          />

          {/* Edit Property */}
          <Route
            path="/editproperty/:id"
            element={<EditProperty />}
          />

          {/* All Agents */}
          <Route
            path="/adminagents"
            element={<AdminAgents />}
          />

          {/* Add Agent */}
          <Route
            path="/addagent"
            element={<AddAgent />}
          />

          {/* Single Agent */}
          <Route
            path="/adminagents/:id"
            element={<AdminAgentView />}
          />

          {/* Edit Agent */}
          <Route
            path="/editagent/:id"
            element={<EditAgent />}
          />

          {/* ============================================
              LANDING / PUBLIC ROUTES
          ============================================ */}

          <Route
            path="/"
            element={<Hero />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          {/* ============================================
              USER ROUTES
          ============================================ */}

          <Route
            path="/properties"
            element={<PropertyList />}
          />

          <Route
            path="/property/:id"
            element={<PropertyDetails />}
          />

          <Route
            path="/agent"
            element={<Agent />}
          />

          <Route
            path="/aiagent"
            element={<AIAgent />}
          />

          <Route
            path="/sell"
            element={<Sell />}
          />

          <Route
            path="/rent"
            element={<Rent />}
          />

          <Route
            path="/getstarted"
            element={<GetStarted />}
          />

          <Route
            path="/signin"
            element={<SignIn />}
          />

          {/* ============================================
              404
          ============================================ */}

          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>

        {/* Public Footer */}
        {!isAdminRoute && <Footer />}
      </div>
    </div>
  );
}

export default App;
