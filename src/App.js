import React from "react";
import { Route, Routes, useLocation } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./components/ui/Footer/Footer";
import TheNavBar from "./components/ui/TheNavBar/TheNavBar";
import { BusinessPage } from "./pages/Business";
import { DeveloperPage } from "./pages/Developer";
import { HomePage } from "./pages/Home";
import { SimulatorPage } from "./pages/Simulator";

export default function App() {
  const location = useLocation();

  return (
    <>
      <TheNavBar />

      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={400}>
          <Routes location={location}>
            <Route
              path="/developer"
              element={
                <main>
                  <DeveloperPage />
                  <Footer />
                </main>
              }
            />
            <Route
              path="/business"
              element={
                <main>
                  <BusinessPage />
                  <Footer />
                </main>
              }
            />
            <Route
              path="/simulator"
              element={
                <main>
                  <SimulatorPage />
                  <Footer />
                </main>
              }
            />
            <Route
              path="*"
              element={
                <main>
                  <HomePage />
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
