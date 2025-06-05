import React, { useState, useContext } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import { LanguageContext } from "../../context/LanguageContext";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import ImageComparison from "../imageComparison/ImageComparison";
const ContactForm: React.FC = () => {
  const { translations } = useContext(LanguageContext)!;

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    cel: "",
    message: "",
    contactType: "budget"
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailData = {
      name: `${formData.name} ${formData.surname}`,
      email: formData.email,
      cel: formData.cel,
      notes: formData.message,
      contact_type: formData.contactType,
      to_email: import.meta.env.VITE_TO_EMAIL,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID_1,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_1,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY_1
      );

      // SOLO en producción intentá enviar el segundo mail
      if (import.meta.env.VITE_EMAILJS_SERVICE_ID_2 &&
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2 &&
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY_2) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID_2,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2,
          emailData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY_2
        );
      }

      setStatusMessage(translations.ContactForm.successMessage);
      setFormData({ name: "", surname: "", email: "", cel:"", message: "", contactType: "budget" });
      console.log("Correos enviados.");
    } catch (error) {
      console.log("Error al enviar los correos:", error);
      setStatusMessage(translations.ContactForm.errorMessage);
    }
  };



  const comparisons = [
    {
      before: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742854747/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_023dbe16_ylkdxr.jpg",
      after: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742854663/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.13_e9174645_lgkbqk.jpg",
      alt: "Antes y después",
    },
    {
      before: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675408/after_cropped_torjpp.jpg",
      after: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675408/before_cropped_f6ovi7.jpg",
      alt: "Antes y después",
    },
    {
      before: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742854491/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.13_3294c619_mqj5ug.jpg",
      after: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742854491/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.13_183997cd_qypyal.jpg",
      alt: "Antes y después",
    }
  ];
  const encodedMessage = encodeURIComponent(
    "Hello, I would like more information about your services"
  );
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>{translations.ContactForm.title}</h2>
        <p>{translations.ContactForm.description}</p>

        <div className="social-icons">
          <a href="https://www.instagram.com/rgb_corp/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon instagram" size={30} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61562097362152" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon facebook" size={30} />
          </a>
          <a href={`https://wa.me/19044225380?text=${encodedMessage}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon whatsapp" size={30} />
          </a>
          <hr /><hr />
        </div>
        <div className="image-comparison-section">
          <ImageComparison comparisons={comparisons} />
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={sendEmail}>
          <label htmlFor="contactType">{translations.ContactForm.subject}</label>
          <select id="contactType" value={formData.contactType} onChange={handleChange} required>
            <option value="budget">{translations.ContactForm.ask}</option>
            <option value="other">{translations.ContactForm.another}</option>
          </select>

          <label htmlFor="name">{translations.ContactForm.name}</label>
          <input
            type="text"
            id="name"
            placeholder={translations.ContactForm.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="surname">{translations.ContactForm.surname}</label>
          <input
            type="text"
            id="surname"
            placeholder={translations.ContactForm.surnamePlaceholder}
            value={formData.surname}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">{translations.ContactForm.email}</label>
          <input
            type="email"
            id="email"
            placeholder={translations.ContactForm.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="cel">{translations.ContactForm.cel}</label>
          <input
            type="tel"
            id="cel"
            placeholder={translations.ContactForm.celPlaceholder}
            value={formData.cel}
            onChange={handleChange}
          />

          <label htmlFor="message">{translations.ContactForm.message}</label>
          <textarea
            id="message"
            placeholder={translations.ContactForm.messagePlaceholder}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">{translations.ContactForm.sendButton}</button>
        </form>

        {statusMessage && (
          <p className={statusMessage.includes("error") ? "error-message" : "success-message"}>{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;