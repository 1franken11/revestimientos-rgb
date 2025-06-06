import { Helmet } from 'react-helmet-async';
import { ProjectSection, ContactForm } from "../components"; 
function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Flooring Installation Projects | RGB Corporation Jacksonville</title>
        <meta name="description" content="Explore our gallery of completed flooring installation projects in Jacksonville, Florida. See the quality of our work on wood, vinyl, and laminate flooring." />
        <meta name="keywords" content="Jacksonville flooring projects, flooring work, flooring gallery, finished flooring installation" />
        <meta property="og:title" content="Flooring Installation Projects - RGB Corporation" />
        <meta property="og:url" content="https://rgb-corporation.com/projects" />
      </Helmet>

      <div data-aos="fade-right" data-aos-once="true">
        <ProjectSection />
      </div>
      <ContactForm />
    </>
  );
}

export default ProjectsPage;