import { Helmet } from 'react-helmet-async';
import { QuienesSomos, ContactForm } from "../components"; 

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - RGB Corporation - Flooring Experts</title>
        <meta name="description" content="Learn about RGB Corporation's history and commitment to quality flooring and wall covering installation in Jacksonville, Florida." />
        <meta name="keywords" content="About RGB Corporation, our flooring company, RGB history" />
        <meta property="og:title" content="About Us - RGB Corporation" />
        <meta property="og:url" content="https://rgb-corporation.com/about" />
      </Helmet>
      <div data-aos="fade-up">
        <QuienesSomos />
      </div>
      <ContactForm />
    </>
  );
}
export default AboutPage;