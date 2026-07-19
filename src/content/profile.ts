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
  githubUrl: string;
  siteUrl?: string;
  appUrl?: string;
};

export type EducationItem = {
  program: string;
  school: string;
  period: string;
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
    languages: string[];
    frontendAndMobile: string[];
    backendAndCloud: string[];
    tools: string[];
    systemsAndHardware: string[];
  };
  projects: ProjectItem[];
  experience: TimelineItem[];
  education: EducationItem[];
  languagesSpoken: string[];
};

export const profileContent: Record<Locale, ProfileContent> = {
  pt: {
    name: "Nikita Slobodeniuc",
    title: "Desenvolvedor Full Stack",
    location: "Loures, Lisboa, Portugal",
    email: "nikitayxp@gmail.com",
    phone: "+351 937 855 313",
    linkedin: "https://linkedin.com/in/nikita-slobodeniuc",
    github: "https://github.com/nikitayxp",
    resumeUrl: "/CV_Nikita_Slobodeniuc_PT.pdf",
    summary:
      "Desenvolvedor Full Stack com projetos em Next.js, React Native e Supabase, e experiência prática de 600 horas em contexto empresarial (suporte técnico, administração de Windows e onboarding de equipamentos). Trabalho ponta a ponta: interface, lógica de negócio, base de dados e deploy. Formação em Desenvolvimento de Software no ISTEC e base técnica em Gestão e Programação de Sistemas Informáticos.",
    ctaPrimary: "Ver Projetos",
    ctaSecondary: "Falar Comigo",
    sections: {
      about: "Sobre Mim",
      skills: "Competências",
      projects: "Projetos",
      experience: "Experiência",
      education: "Formação",
      contact: "Contacto",
    },
    skills: {
      languages: [
        "JavaScript",
        "TypeScript",
        "C#",
        "C++",
        "Kotlin",
        "SQL",
        "HTML5",
        "CSS3",
      ],
      frontendAndMobile: [
        "React",
        "React Native",
        "Expo",
        "Next.js (App Router)",
        "Tailwind CSS",
        "Framer Motion",
      ],
      backendAndCloud: [
        "Supabase (PostgreSQL, Auth, migrations SQL)",
        "Firebase",
        "Vercel",
        "APIs REST",
      ],
      tools: [
        "Git & GitHub",
        "Monorepos",
        "Autenticação OAuth",
        "i18n (PT/EN)",
        "Validação com Zod",
        "Microsoft 365",
      ],
      systemsAndHardware: [
        "Instalação e configuração de Windows",
        "Manutenção e formatação de PCs",
        "Diagnóstico de avarias",
        "Onboarding de utilizadores",
      ],
    },
    projects: [
      {
        name: "LyftTrack",
        stack: ["React Native (Expo)", "Next.js", "TypeScript", "Supabase"],
        summary:
          "Aplicação de treino em monorepo com apps mobile/web (Expo Router) e landing em Next.js. Autenticação por email e Google, treinos ativos, templates, estatísticas, feed social e suporte offline básico com sincronização.",
        githubUrl: "https://github.com/nikitayxp/lyfttrack",
        siteUrl: "https://lyfttrack-site.vercel.app",
        appUrl: "https://lyfttrack-app.vercel.app",
      },
      {
        name: "Portfólio Pessoal Bilingue",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        summary:
          "Portfólio bilingue (PT/EN) com smooth scrolling, animações, dark mode na primeira pintura, formulário de contacto com Zod e Resend, rate limiting e Content Security Policies.",
        githubUrl: "https://github.com/nikitayxp/portfolio-site",
      },
    ],
    experience: [
      {
        role: "Estagiário de Informática",
        company: "Wellow Network, Lisboa",
        period: "Mai 2025 - Jul 2025 (estágio curricular)",
        highlights: [
          "Suporte técnico a utilizadores, incluindo formatação e manutenção de dispositivos",
          "Preparação e configuração integral de PCs e ambientes Windows para onboarding",
          "Instalação de software corporativo e resolução de incidências técnicas",
        ],
      },
      {
        role: "Estagiário de Informática",
        company: "Colégio Integrado Monte Maior, Lisboa",
        period: "Mai 2024 - Jul 2024 (estágio curricular)",
        highlights: [
          "Manutenção preventiva e corretiva do parque informático da instituição",
          "Assistência técnica direta a professores e alunos",
          "Produção de conteúdos multimédia (iMovie, Canva, Photopea) para projeto institucional",
        ],
      },
    ],
    education: [
      {
        program: "CTeSP em Desenvolvimento de Software",
        school: "ISTEC — Instituto Superior de Tecnologias Avançadas, Lisboa",
        period: "2025 - 2027",
      },
      {
        program: "Curso Profissional Técnico de Gestão e Programação de Sistemas Informáticos",
        school: "Escola Secundária Pedro Alexandrino, Lisboa",
        period: "2022 - 2025 (Concluído)",
      },
    ],
    languagesSpoken: [
      "Português — Nativo (C2)",
      "Romeno — Nativo (C2)",
      "Inglês — Leitura C1, compreensão oral B2, expressão oral B1",
    ],
  },
  en: {
    name: "Nikita Slobodeniuc",
    title: "Full Stack Developer",
    location: "Loures, Lisbon, Portugal",
    email: "nikitayxp@gmail.com",
    phone: "+351 937 855 313",
    linkedin: "https://linkedin.com/in/nikita-slobodeniuc",
    github: "https://github.com/nikitayxp",
    resumeUrl: "/CV_Nikita_Slobodeniuc_EN.pdf",
    summary:
      "Full Stack Developer with projects in Next.js, React Native and Supabase, plus 600 hours of hands-on corporate experience in IT support, Windows administration and device onboarding. Comfortable working end to end: interface, business logic, database and deployment. Studying Software Development at ISTEC, with a technical background in IT Systems Management and Programming.",
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
      languages: [
        "JavaScript",
        "TypeScript",
        "C#",
        "C++",
        "Kotlin",
        "SQL",
        "HTML5",
        "CSS3",
      ],
      frontendAndMobile: [
        "React",
        "React Native",
        "Expo",
        "Next.js (App Router)",
        "Tailwind CSS",
        "Framer Motion",
      ],
      backendAndCloud: [
        "Supabase (PostgreSQL, Auth, SQL migrations)",
        "Firebase",
        "Vercel",
        "REST APIs",
      ],
      tools: [
        "Git & GitHub",
        "Monorepos",
        "OAuth authentication",
        "i18n (PT/EN)",
        "Zod validation",
        "Microsoft 365",
      ],
      systemsAndHardware: [
        "Windows installation and configuration",
        "PC maintenance and imaging",
        "Hardware troubleshooting",
        "User onboarding",
      ],
    },
    projects: [
      {
        name: "LyftTrack",
        stack: ["React Native (Expo)", "Next.js", "TypeScript", "Supabase"],
        summary:
          "Workout tracking app in a monorepo: mobile/web client with Expo Router and a Next.js landing page. Email and Google auth, live workouts, routine templates, statistics, social feed and basic offline sync.",
        githubUrl: "https://github.com/nikitayxp/lyfttrack",
        siteUrl: "https://lyfttrack-site.vercel.app",
        appUrl: "https://lyfttrack-app.vercel.app",
      },
      {
        name: "Bilingual Personal Portfolio",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        summary:
          "Bilingual (PT/EN) portfolio with smooth scrolling, scroll animations, dark mode on first paint, contact form with Zod and Resend, rate limiting and Content Security Policies.",
        githubUrl: "https://github.com/nikitayxp/portfolio-site",
      },
    ],
    experience: [
      {
        role: "IT Intern",
        company: "Wellow Network, Lisbon",
        period: "May 2025 - Jul 2025 (curricular internship)",
        highlights: [
          "Technical support for end users, including imaging and maintenance of company devices",
          "Full PC and Windows environment setup for new employee onboarding",
          "Corporate software installation and day-to-day incident resolution",
        ],
      },
      {
        role: "IT Intern",
        company: "Colégio Integrado Monte Maior, Lisbon",
        period: "May 2024 - Jul 2024 (curricular internship)",
        highlights: [
          "Preventive and corrective maintenance of the school's IT equipment",
          "Direct technical assistance to teachers and students",
          "Multimedia content production (iMovie, Canva, Photopea) for an institutional project",
        ],
      },
    ],
    education: [
      {
        program: "Professional Higher Technical Diploma (CTeSP) in Software Development",
        school: "ISTEC — Instituto Superior de Tecnologias Avançadas, Lisbon",
        period: "2025 - 2027",
      },
      {
        program: "Vocational Diploma in IT Systems Management and Programming",
        school: "Escola Secundária Pedro Alexandrino, Lisbon",
        period: "2022 - 2025 (Completed)",
      },
    ],
    languagesSpoken: [
      "Portuguese — Native (C2)",
      "Romanian — Native (C2)",
      "English — Reading C1, listening B2, speaking B1",
    ],
  },
};
