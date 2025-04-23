import React, { useEffect, useRef, ReactNode } from "react";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
}

const SectionWithNavbarOffset: React.FC<Props> = ({ id, className, children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMargin = () => {
      const navbar = document.querySelector("nav.navbar") as HTMLElement;
      if (navbar && sectionRef.current) {
        sectionRef.current.style.marginTop = `${navbar.offsetHeight }px`;
      }
    };

    updateMargin(); 
    window.addEventListener("resize", updateMargin);

    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  return (
    <section ref={sectionRef} id={id} className={className}>
      {children}
    </section>
  );
};

export default SectionWithNavbarOffset;
