/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import { ScrollToTop } from "./components/ScrollToTop";
import { PageTransition } from "./components/PageTransition";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";

export default function App() {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-white">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <div key={location.pathname}>
              <Routes location={location}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              </Routes>
            </div>
          </AnimatePresence>
        </main>

        <Footer />
        <Chatbot />
      </div>
    </ErrorBoundary>
  );
}
