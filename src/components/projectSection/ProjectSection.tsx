// ✅ ProjectsSection.tsx
import { useState } from "react";
import ProjectsModal from "./ProjectsModal";
import "./ProjectsSection.css";

const projects = [
  {
    media:"https://res.cloudinary.com/drwacbtjf/video/upload/v1744662640/escalera_v9srkj.mp4",
    gallery:["https://res.cloudinary.com/drwacbtjf/video/upload/v1744662640/escalera_v9srkj.mp4"
   ]
  },
  {
    media:"https://res.cloudinary.com/drwacbtjf/video/upload/v1744663142/cocina_e7ky1r.mp4",
    gallery:["https://res.cloudinary.com/drwacbtjf/video/upload/v1744663142/cocina_e7ky1r.mp4"
   ]
  },
  {
    media:"https://res.cloudinary.com/drwacbtjf/image/upload/v1744662421/vinyll_samvcc.jpg",
    gallery:["https://res.cloudinary.com/drwacbtjf/video/upload/v1744663145/dormitorio_kp6y0h.mp4"
   ]
  },
  {
    media: "https://res.cloudinary.com/drwacbtjf/video/upload/v1743193679/Video_de_WhatsApp_2025-03-28_a_las_15.29.33_b3bb240e_ydjsma.mp4",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1743193679/Video_de_WhatsApp_2025-03-28_a_las_15.29.33_b3bb240e_ydjsma.mp4",
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1743193678/Video_de_WhatsApp_2025-03-28_a_las_15.29.00_8eb9916b_yae7sv.mp4"
    ]
  },
  {
    media: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642984/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_bbfa3f27_fjlv4i.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642984/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_bbfa3f27_fjlv4i.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642983/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_92c8953b_lii0qy.jpg"
    ]
  },
  {
    media: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643048/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.35_b7203bd4_c2rls3.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643048/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.35_b7203bd4_c2rls3.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643047/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.35_b02fcae3_grx7xs.jpg"
    ]
  },
  {
    media: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643166/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_faf1dc6f_l12fpq.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643166/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_faf1dc6f_l12fpq.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643163/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_d8b9052b_jxynww.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643161/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_ca896a48_pulng6.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643158/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_023dbe16_evzf0o.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643104/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.13_aed9433d_yvtlkt.jpg"
    ]
  },
  {
    media: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643209/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_4daa45f6_vv0x0c.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643214/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.00_7f79daf0_wp0lxr.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643212/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_ebb514c7_gqgc9b.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643210/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_dd65ee00_jx5sxd.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643209/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_4daa45f6_vv0x0c.jpg"
    ]
  },
  {
    media: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744663815/banio4_ua07hp.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744663815/banio4_ua07hp.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744663812/banio3_c5gwwl.jpg"
    ]
  }
];

const ProjectsSection = () => {
  const [selectedGallery, setSelectedGallery] = useState<string[]>([]);

  return (
    <section className="projects-section">
      <h2 className="text-center mb-4">PROYECTOS</h2>
      <div className="project-gallery">
        {projects.map((project, index) => {
          const isVideo = project.media.endsWith(".mp4");

          return (
            <div
              key={index}
              className="project-item"
              onClick={() => setSelectedGallery(project.gallery)}
            >
              {isVideo ? (
                <video
                  src={project.media}
                  className="project-thumbnail"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              ) : (
                <img src={project.media} alt="Proyecto" />
              )}
            </div>
          );
        })}
      </div>
      {selectedGallery.length > 0 && (
        <ProjectsModal
          gallery={selectedGallery}
          onClose={() => setSelectedGallery([])}
        />
      )}
    </section>
  );
};

export default ProjectsSection;