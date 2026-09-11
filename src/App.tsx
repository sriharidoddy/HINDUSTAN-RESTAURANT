import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialities } from './components/Specialities';
import { MenuSection } from './components/MenuSection';
import { ParallaxBanner } from './components/ParallaxBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export function App() {
  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#1c1917] font-sans selection:bg-amber-500 selection:text-stone-900">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <About />
        <Specialities />
        <MenuSection />
        <ParallaxBanner />
        <WhyChooseUs />
        <ReviewsSection />
        <GallerySection />
        <LocationSection />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed CTA for Mobile Devices */}
      <MobileBottomBar />
    </div>
  );
}

export default App;
