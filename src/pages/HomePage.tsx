import { Helmet } from 'react-helmet-async';
import {
  ContactForm,
  FirstSection,
  FlooringSections,
  QuienesSomos,
  OpinionesCarousel,
  ProjectSection,
} from "../components"; 

import { useEffect } from "react"; 
import AOS from "aos";
import "aos/dist/aos.css"; 
import "../fullpage.css"; 
import { EmbeddedReview } from "../components/opinionesSection/types";

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const reseñasEmbed: EmbeddedReview[] = [
  ];

  return (
    <>
      <Helmet>
        <title>RGB Corporation - Instalación de Pisos y Revestimientos en Jacksonville, FL</title>
        <meta name="description" content="RGB Corporation ofrece servicios profesionales de instalación de pisos flotantes y revestimientos en Jacksonville, Florida. Obtenga una cotización para su proyecto con expertos locales." />
        <meta name="keywords" content="flooring Jacksonville, floor coverings Jacksonville, floating floor installation Florida, RGB Corporation, vinyl flooring, wood flooring Jacksonville" />
        <meta name="author" content="RGB Corporation" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Jacksonville" />
        <meta name="geo.position" content="30.3322;-81.6557" />
        <meta name="ICBM" content="30.3322, -81.6557" />
        <meta property="og:title" content="RGB Corporation - Revestimientos de Pisos en Jacksonville, FL" />
        <meta property="og:description" content="Especialistas en pisos flotantes, vinílicos y de madera en Jacksonville, FL. Calidad garantizada para su hogar o negocio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rgb-corporation.com" />
        <meta property="og:image" content="https://res.cloudinary.com/drwacbtjf/image/upload/v1745328531/logo_LE_c63hwt.jpg" />
      </Helmet>

        <div className="fullpage">
          <FirstSection />
        </div>
        <div data-aos="fade-up">
          <QuienesSomos />
        </div>
        <div data-aos="fade-up" data-aos-once="true">
          <FlooringSections />
        </div>
        <div data-aos="fade-right" data-aos-once="true">
          <ProjectSection />
        </div>
        <OpinionesCarousel reviews={reseñasEmbed} itemsPerSlide={3} />
        <ContactForm />
    </>
  );
}

export default HomePage;