import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageProvider } from "./context/LanguageProvider"; // Mantenelo
import "./fullpage.css"; // Mantenelo si es para el layout global o componentes de Navbar/Footer

// 1. Importa los componentes de enrutamiento
import { Routes, Route } from 'react-router-dom';

// 2. Importa tus nuevas "páginas"
import HomePage from './pages/HomePage'; // Esta contendrá el contenido de tu App.tsx original
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NotFoundPage from './pages/NotFoundPage'; // Página para 404

// 3. Importa los componentes que son parte del layout global (ej. Navbar, Footer)
import { Navbar, Footer } from "./components"; // Asegúrate de la ruta

function App() {
  // Inicialización de AOS global para toda la aplicación
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    // 4. LanguageProvider envolviendo toda la aplicación
    <LanguageProvider>
      {/* 5. Navbar y Footer van fuera de <Routes> para que se muestren en todas las páginas */}
      <Navbar />

      {/* 6. Aquí defines las rutas de tu aplicación */}
      <Routes>
        {/* La ruta raíz "/" ahora renderiza tu nueva HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Define rutas para tus otras "páginas" */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        {/* Ruta comodín para manejar cualquier URL que no coincida (página 404) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </LanguageProvider>
  );
}

export default App;