import { Helmet } from 'react-helmet-async';
import { FlooringSections, ContactForm } from "../components"; 

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Flooring Installation Services | RGB Corporation</title>
        <meta name="description" content="Discover the full range of wood, vinyl, and laminate flooring installation services offered by RGB Corporation in Jacksonville, Florida. Experts in flooring for your home or business.." />
        <meta name="keywords" content="Jacksonville flooring services, wood flooring installation, vinyl flooring, laminate flooring Florida, flooring" />
        <meta property="og:title" content="Flooring Installation Services - RGB Corporation" />
        <meta property="og:url" content="https://rgb-corporation.com/services" />
      </Helmet>

      <div data-aos="fade-up" data-aos-once="true">
        <FlooringSections />
      </div>
      <ContactForm />
    </>
  );
}

export default ServicesPage;