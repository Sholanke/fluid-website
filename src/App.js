import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./components/ui/Footer/Footer";
import TheNavBar from "./components/ui/TheNavBar/TheNavBar";
import { AboutPage } from "./pages/About";
import { BusinessPage } from "./pages/Business";
import { DeveloperPage } from "./pages/Developer";
import { HomePage } from "./pages/Home";
import { SimulatorPage } from "./pages/Simulator";
import "aos/dist/aos.css";
import Aos from "aos";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);

    Aos.init({
      duration: 400,
    });
    Aos.refreshHard();
  }, [location]);

  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={400}>
          <Routes location={location}>
            <Route
              path="/"
              element={
                <main>
                  <TheNavBar />
                  <HomePage />
                  <Footer />
                </main>
              }
            />
            <Route
              path="/developer"
              element={
                <main>
                  <TheNavBar />
                  <DeveloperPage />
                  <Footer />
                </main>
              }
            />
            <Route
              path="/business"
              element={
                <main>
                  <TheNavBar />
                  <BusinessPage />
                  <Footer />
                </main>
              }
            />
            <Route
              path="/simulator"
              element={
                <main>
                  <TheNavBar />
                  <SimulatorPage />
                  <Footer hasForm={false} />
                </main>
              }
            />
            <Route
              path="/about"
              element={
                <main>
                  <TheNavBar />
                  <AboutPage />
                  <Footer />
                </main>
              }
            />
            <Route
              path="*"
              element={
                <main>
                  <TheNavBar />
                  <br />
                  <br />
                  <br />
                  <div className="app-container">
                    <div className="app-container__section">
                      <h1>Not Found</h1>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <Footer />
                </main>
              }
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      {/* <Footer /> */}
    </>
  );
}
