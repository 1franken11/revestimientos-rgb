import { Helmet } from 'react-helmet-async'; 
import { ContactForm } from "../components"; 

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact - RGB Corporation - Flooring Installation in Jacksonville</title>
        <meta name="description" content="Contact us to request a free estimate for laminate, vinyl, or wood flooring installation in Jacksonville, Florida. RGB Corporation is here to help." />
        <meta name="keywords" content="Contact RGB Corporation, flooring quotes, flooring installers Jacksonville, RGB phone, RGB email" />
        <meta property="og:title" content="Contact - RGB Corporation" />
        <meta property="og:description" content="Get a free estimate for your flooring project in Jacksonville, FL. Experts in installation and coatings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rgb-corporation.com/contact" />
        {/*imagen en redes sociales */}
        {/* <meta property="og:image" content="https://rgb-corporation.com/images/contact-us.jpg" /> */}
      </Helmet>

      <div style={{ padding: '50px', minHeight: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h1>Contact us for your Flooring Project</h1>
        <p>We're ready to help you with your flooring needs in Jacksonville, Florida. Send us a message or give us a call.</p>
        
        <ContactForm />

        <div style={{ marginTop: '30px' }}>
          <h3>Direct Contact Information</h3>
          <p>Teléfono: +1 (904) 4225380</p>
          <p>Email: rgbconstructioncorp@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default ContactPage;