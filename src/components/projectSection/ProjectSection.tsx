// ✅ ProjectsSection.tsx
import { useState } from "react";
import ProjectsModal from "./ProjectsModal";
import "./ProjectsSection.css";

const projects = [
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
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642984/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.35_aa0750f8_siarvt.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642984/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_bbfa3f27_fjlv4i.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642983/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_92c8953b_lii0qy.jpg"
    ]
  },
  {
    media: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643048/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.35_b7203bd4_c2rls3.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643048/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.35_b7203bd4_c2rls3.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643047/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.35_b02fcae3_grx7xs.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643043/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.01_d609ef03_vhgyay.jpg"
    ]
  },
  {
    media: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643104/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.13_aed9433d_yvtlkt.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643104/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.13_aed9433d_yvtlkt.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643103/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.03_1963b701_oomfnv.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643102/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_c0218f62_glmlwt.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643097/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_7967b486_qmqoqy.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643099/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.00_d820ac9c_dix6kz.jpg"
    ]
  },
  {
    media: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643166/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_faf1dc6f_l12fpq.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643166/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_faf1dc6f_l12fpq.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643163/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_d8b9052b_jxynww.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643161/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_ca896a48_pulng6.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643158/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_023dbe16_evzf0o.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643154/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.00_737de658_ioa8xa.jpg"
    ]
  },
  {
    media: "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643217/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_baf7fdf1_gtdmrr.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643217/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_baf7fdf1_gtdmrr.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643216/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.00_44592a86_jeumna.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643214/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.00_7f79daf0_wp0lxr.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643212/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_ebb514c7_gqgc9b.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643210/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_dd65ee00_jx5sxd.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643209/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_4daa45f6_vv0x0c.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643207/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.58_d2a902d9_cay6bt.jpg"
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