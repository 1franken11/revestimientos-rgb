export interface Translations {
  Menu: {
    home: string;
    instagram: string;
    Reviews: string;
    improveSpace: string;
    QuienesSomos: string;
    contact: string;
    floors: string;
    corp: string;
  };
  SLIDES: {
    caption: string;
  }[];
  Instagram: {
    title: string;
    prev: string;
    next: string;
    page: string;
    of: string;
    alt: string[];
  };
  ImageComparison: {
    title: string;
    description: string;
    before: string;
    after: string;
  };
  ProjectSection:{
    title: string;
  };
  Reviews:{
    title: string;
  };
  Button:{
    Close: string;
  }
  VideoSection: {
    title: string;
    videoTitle: string;
  };
  QuienesSomos: {
    title: string;
    specialty: {
      title: string;
      description: string;
    };
    whyChooseUs: {
      title: string;
      items: string[];
    };
    commitment: {
      title: string;
      description: string[];
    };
    services: {
      title : string;
      description: string[];
    }     
floorTypes: string[];   
cabinets: string[];     
materials: string[];   
  };
  FlooringSections: {
    title: string;
    options: {
      Vinyl: string;
      tile: string;
      laminate: string;
      wood: string;
    };
    descriptions: {
      Vinyl: { title: string; description: string }[];
      tile: { title: string; description: string }[];
      laminate: { title: string; description: string }[];
      wood: { title: string; description: string }[];
    };
  };
  ContactForm: {
    title: string;
    description: string;
    name: string;
    namePlaceholder: string;
    surname: string;
    surnamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    sendButton: string;
    successMessage: string;
    errorMessage: string;
  };
}