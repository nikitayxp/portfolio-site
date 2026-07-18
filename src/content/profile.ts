export type Locale = "pt" | "en";

export type TimelineItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  stack: string[];
  summary: string;
  link: string;
};

export type ProfileContent = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  summary: string;
  ctaPrimary: string;
  ctaSecondary: string;
  sections: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
  };
  skills: {
    supportAndHardware: string[];
    languages: string[];
    webAndCloud: string[];
    tools: string[];
    design: string[];
  };
  projects: ProjectItem[];
  experience: TimelineItem[];
  education: string[];
  languagesSpoken: string[];
};

export const profileContent: Record<Locale, ProfileContent> = {
  pt: {
    name: "Nikita Slobodeniuc",
    title: "Junior IT Technician & Aspiring Developer",
    location: "Lisboa, Portugal",
    email: "nikitayxp@gmail.com",
    phone: "+351 937 855 313",
    linkedin: "https://linkedin.com/in/nikita-slobodeniuc",
    github: "https://github.com/nikitayxp",
    resumeUrl: "/CV_Nikita_Slobodeniuc_PT.pdf",
    summary:
      "Tecnico de IT junior com experiencia pratica em suporte tecnico, onboarding e configuracao de ambientes Windows. Neste momento a aprofundar desenvolvimento de software com foco em C#, SQL, Next.js e Supabase.",
    ctaPrimary: "Ver Projetos",
    ctaSecondary: "Falar Comigo",
    sections: {
      about: "Sobre Mim",
      skills: "Competencias",
      projects: "Projetos",
      experience: "Experiencia",
      education: "Educacao",
      contact: "Contacto",
    },
    skills: {
      supportAndHardware: [
        "Formatacao e manutencao de PCs",
        "Onboarding e setup de novos colaboradores",
        "Configuracao e troubleshooting de Windows",
      ],
      languages: ["C# (intermedio)", "SQL (intermedio)", "C++ (basico)", "JavaScript", "Kotlin"],
      webAndCloud: ["Next.js", "Supabase", "Firebase", "Vercel", "HTML5", "CSS3"],
      tools: ["Git & GitHub", "VS Code", "Microsoft 365"],
      design: ["Canva (avancado)", "Photopea", "iMovie"],
    },
    projects: [
      {
        name: "LyftTrack",
        stack: ["Next.js", "Supabase", "Tailwind CSS"],
        summary:
          "Aplicacao web para registo e acompanhamento de treinos, com autenticacao, historico e visualizacao de progresso em interface responsiva.",
        link: "https://lyfttrack-site.vercel.app",
      },
    ],
    experience: [
      {
        role: "Estagiario de Informatica",
        company: "Wellow Network, Lisboa",
        period: "Mai 2025 - Jul 2025",
        highlights: [
          "Formatacao e manutencao de dispositivos da empresa",
          "Configuracao integral de PCs e ambientes Windows para onboarding",
          "Instalacao de software empresarial e resolucao de incidencias",
        ],
      },
      {
        role: "Estagiario de Informatica",
        company: "Colegio Integrado Monte Maior, Lisboa",
        period: "Mai 2024 - Jul 2024",
        highlights: [
          "Apoio na manutencao de equipamentos informaticos",
          "Assistencia tecnica a professores e alunos",
          "Suporte em edicao de video e imagem para projetos escolares",
        ],
      },
    ],
    education: [
      "CTeSP em Desenvolvimento de Software (em curso) - ISTEC Lisboa (2025 - Presente)",
      "Curso Tecnico de Gestao e Programacao de Sistemas Informaticos - Escola Pedro Alexandrino (2022 - 2025)",
    ],
    languagesSpoken: ["Portugues (C2)", "Romeno (C2)", "Ingles (B1-B2)"],
  },
  en: {
    name: "Nikita Slobodeniuc",
    title: "Junior IT Technician & Full-Stack Developer",
    location: "Loures, Lisbon, Portugal",
    email: "nikitayxp@gmail.com",
    phone: "+351 937 855 313",
    linkedin: "https://linkedin.com/in/nikita-slobodeniuc",
    github: "https://github.com/nikitayxp",
    resumeUrl: "/CV_Nikita_Slobodeniuc_EN.pdf",
    summary:
      "Junior IT technician with hands-on experience in technical support, onboarding and Windows environment setup. Currently deepening software development skills with a focus on C#, SQL, Next.js and Supabase.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Me",
    sections: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    skills: {
      supportAndHardware: [
        "PC formatting and maintenance",
        "Onboarding and workstation setup",
        "Windows configuration and troubleshooting",
      ],
      languages: ["C# (intermediate)", "SQL (intermediate)", "C++ (basic)", "JavaScript", "Kotlin"],
      webAndCloud: ["Next.js", "Supabase", "Firebase", "Vercel", "HTML5", "CSS3"],
      tools: ["Git & GitHub", "VS Code", "Microsoft 365"],
      design: ["Canva (advanced)", "Photopea", "iMovie"],
    },
    projects: [
      {
        name: "LyftTrack",
        stack: ["Next.js", "Supabase", "Tailwind CSS"],
        summary:
          "Web application for workout tracking with authentication, training history and progress visualization in a responsive interface.",
        link: "https://lyfttrack-site.vercel.app",
      },
    ],
    experience: [
      {
        role: "IT Intern",
        company: "Wellow Network, Lisbon",
        period: "May 2025 - Jul 2025",
        highlights: [
          "Company device maintenance and formatting",
          "Full Windows workstation setup for employee onboarding",
          "Business software installation and incident resolution",
        ],
      },
      {
        role: "IT Intern",
        company: "Colegio Integrado Monte Maior, Lisbon",
        period: "May 2024 - Jul 2024",
        highlights: [
          "Support for school computer maintenance",
          "Direct technical assistance for teachers and students",
          "Image and video editing support for school projects",
        ],
      },
    ],
    education: [
      "Professional Higher Technical Program in Software Development (ongoing) - ISTEC Lisbon (2025 - Present)",
      "Technical Program in Computer Systems Management and Programming - Escola Pedro Alexandrino (2022 - 2025)",
    ],
    languagesSpoken: ["Portuguese (C2)", "Romanian (C2)", "English (B1-B2)"],
  },
};
