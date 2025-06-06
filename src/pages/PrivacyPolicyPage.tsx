import { Helmet } from "react-helmet-async";

function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - RGB Corporation</title>
        <meta
          name="description"
          content="Learn about our privacy policy regarding the use of data on the RGB Corporation website."
        />
      </Helmet>
      <div style={{ padding: "50px", minHeight: "calc(100vh - 200px)" }}>
        <h1>Privacy Policy</h1>
        <div style={{ padding: "50px", minHeight: "calc(100vh - 200px)" }}>
          <h1>Privacy Policy</h1>
          <p>
            <strong>Last Updated:</strong> June 6, 2025
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We only collect personal information that you voluntarily provide to
            us, such as when you: fill out a contact form, request a quote, or
            subscribe to our newsletter.
          </p>
          <p>
            The personal information we may collect includes: full name, email
            address, phone number, physical address (if applicable), and
            project-related details.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries, send
            personalized quotes, provide customer support, and improve our
            website and services.
          </p>
          <p>
            We do <strong>not</strong> sell, rent, or share your personal
            information with unauthorized third parties.
          </p>

          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You
            can disable cookies through your browser settings, but this may
            affect some website functionality.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, misuse, or disclosure.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            As a resident of Florida or other regions, you have the right to
            access, correct, or delete your personal data, and to withdraw your
            consent to data processing at any time.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at:
          </p>
          <p>
            <strong>RGB Corporation</strong>
            <br />
            Jacksonville, Florida
            <br />
            Email: rgbconstructioncorp@gmail.com
            <br />
            Phone: (904) 555-1234
          </p>
        </div>
      </div>
    </>
  );
}
export default PrivacyPolicyPage;
