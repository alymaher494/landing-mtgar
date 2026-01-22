import React from 'react';
import { useTranslation } from 'react-i18next';

// Layout Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

// Sections
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import Marquee from "./sections/Marquee/Marquee";
import SplitSection from "./sections/SplitSection/SplitSection";
import Clients from "./sections/Clients/Clients";
import Gallery from "./sections/Gallery/Gallery";
import WhyChoose from "./sections/WhyChoose/WhyChoose";
import FAQ from "./sections/FAQ/FAQ";
import Contact from "./sections/Contact/Contact";

function App() {
    const { t } = useTranslation();

    return (
        <div className="app-container">
            <Header />
            <main>
                <Hero />
                <Services />
                <Marquee />
                <SplitSection />
                <Gallery />
                <Clients />
                <WhyChoose />
                <FAQ />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;
