/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

