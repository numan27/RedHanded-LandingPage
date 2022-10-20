import React from 'react';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import VideoSection from './Components/Video Section/VideoSection';
import CarouselSection from './Components/Carousel Section/CarouselSection';
import ManualSection from './Components/Manual Section/ManualSection';
import TestimonialsSection from './Components/Testimonials/TestimonialsSection';
import Footer from './Components/Footer';
import "./CSS/style.css";
import "./CSS/MediaQueries.css";


function App() {
  return (
    <>
    <Header />
    <MainSection />
    <VideoSection />
    <CarouselSection />
    <ManualSection />
    <TestimonialsSection />
    <Footer />

    </>
  );
}

export default App;
