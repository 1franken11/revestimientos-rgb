// ✅ ProjectsSection.tsx
import { useState, useContext } from "react";
import ProjectsModal from "./ProjectsModal";
import "./ProjectsSection.css";
import { LanguageContext } from "../../context/LanguageContext";

const projects = [
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1744662640/escalera_v9srkj.mp4",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1744662640/escalera_v9srkj.mp4",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1744663142/cocina_e7ky1r.mp4",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1744663142/cocina_e7ky1r.mp4",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744662421/vinyll_samvcc.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1744663145/dormitorio_kp6y0h.mp4",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1745276664/pr2_ssmtbp.mp4",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1745276664/pr2_ssmtbp.mp4",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642984/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_bbfa3f27_fjlv4i.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642984/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_bbfa3f27_fjlv4i.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744642983/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_92c8953b_lii0qy.jpg",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643048/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.35_b7203bd4_c2rls3.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643048/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.35_b7203bd4_c2rls3.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643047/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.35_b02fcae3_grx7xs.jpg",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1745097621/4_ek8c4k.png",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643166/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_faf1dc6f_l12fpq.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643163/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_d8b9052b_jxynww.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643161/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_ca896a48_pulng6.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643158/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.14_023dbe16_evzf0o.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643104/Imagen_de_WhatsApp_2025-02-06_a_las_18.38.13_aed9433d_yvtlkt.jpg",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643209/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_4daa45f6_vv0x0c.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643214/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.00_7f79daf0_wp0lxr.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643212/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_ebb514c7_gqgc9b.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643210/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_dd65ee00_jx5sxd.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643209/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_4daa45f6_vv0x0c.jpg",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744663815/banio4_ua07hp.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744663815/banio4_ua07hp.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744663812/banio3_c5gwwl.jpg",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744674993/Imagen_de_WhatsApp_2025-04-14_a_las_20.04.08_a4c2d3b4_wl8w8i.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744674993/Imagen_de_WhatsApp_2025-04-14_a_las_20.04.08_a4c2d3b4_wl8w8i.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744674993/Imagen_de_WhatsApp_2025-04-14_a_las_20.04.05_7840b89b_pfqgzk.jpg",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1745094934/Dise%C3%B1o_sin_t%C3%ADtulo_4_vuqym9.png",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675027/Imagen_de_WhatsApp_2025-04-14_a_las_20.04.13_bae7abbe_o96oax.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675027/Imagen_de_WhatsApp_2025-04-14_a_las_20.04.17_433f69f2_cdfjd7.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675027/Imagen_de_WhatsApp_2025-04-14_a_las_20.04.16_1a211a31_cdeqsp.jpg",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1745094213/1_f6znxe.png",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675070/Imagen_de_WhatsApp_2025-04-14_a_las_20.04.31_9e382741_phtr4q.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675070/Imagen_de_WhatsApp_2025-04-14_a_las_20.04.31_fb81321e_uxt3mx.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675071/Imagen_de_WhatsApp_2025-04-14_a_las_20.04.32_fc8e0d63_cjcmgl.jpg",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675109/Imagen_de_WhatsApp_2025-04-14_a_las_20.14.25_fa2bc361_bdefe4.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675109/Imagen_de_WhatsApp_2025-04-14_a_las_20.14.25_fa2bc361_bdefe4.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675110/Imagen_de_WhatsApp_2025-04-14_a_las_20.14.25_fa7f6a53_kjxlrc.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675108/Imagen_de_WhatsApp_2025-04-14_a_las_20.14.25_c71e2992_oqfmio.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675107/Imagen_de_WhatsApp_2025-04-14_a_las_20.14.25_126293c1_qy1sla.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675106/Imagen_de_WhatsApp_2025-04-14_a_las_20.14.25_40f6e649_g5ehxp.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744675106/Imagen_de_WhatsApp_2025-04-14_a_las_20.14.25_9e29aa50_uoudnr.jpg",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1745097993/5_bdtckd.png",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643154/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.00_737de658_ioa8xa.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643156/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.00_43204dc8_aahfpf.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744676528/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.03_d1982d0b_ocvnxg.jpg",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744676874/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_c0218f62_z3yagr.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744676874/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_c0218f62_z3yagr.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744676876/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.03_1963b701_zbq2kv.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744676871/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.00_d820ac9c_scogdi.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744676870/Imagen_de_WhatsApp_2025-02-06_a_las_18.36.59_df6941a3_plzrgt.jpg",
    ],
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1745094622/3_ejo920.png",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744676757/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.01_9315ec07_mki94l.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744676759/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_0538fda0_oieu17.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1744643217/Imagen_de_WhatsApp_2025-02-06_a_las_18.37.02_baf7fdf1_gtdmrr.jpg",
    ],
  },
];

const ProjectsSection = () => {
  const [selectedGallery, setSelectedGallery] = useState<string[]>([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number | null>(
    null
  );
  const { translations } = useContext(LanguageContext)!;

  const openGallery = (index: number) => {
    setSelectedGallery(projects[index].gallery);
    setCurrentProjectIndex(index);
  };

  const nextProject = () => {
    if (currentProjectIndex !== null) {
      const nextIndex = (currentProjectIndex + 1) % projects.length;
      setCurrentProjectIndex(nextIndex);
      setSelectedGallery(projects[nextIndex].gallery);
    }
  };

  const prevProject = () => {
    if (currentProjectIndex !== null) {
      const prevIndex =
        (currentProjectIndex - 1 + projects.length) % projects.length;
      setCurrentProjectIndex(prevIndex);
      setSelectedGallery(projects[prevIndex].gallery);
    }
  };

  return (
    <section className="projects-section">
      <h2 className="text-center mb-4">{translations.ProjectSection.title}</h2>
      <div className="project-gallery">
        {projects.map((project, index) => {
          const isVideo = project.media.endsWith(".mp4");

          return (
            <div
              key={index}
              className="project-item"
              onClick={() => openGallery(index)}
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
                onContextMenu={(e) => e.preventDefault()}
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
          onNextGallery={nextProject}
          onPrevGallery={prevProject}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
