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
  githubLabel?: string;
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
  about: string[];
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
    support: string[];
    development: string[];
    projectTechnologies: string[];
  };
  projects: ProjectItem[];
  experience: TimelineItem[];
  education: EducationItem[];
  languagesSpoken: string[];
};

export const profileContent: Record<Locale, ProfileContent> = {
  pt: {
    name: "Nikita Slobodeniuc",
    title: "Desenvolvimento de Software · Suporte IT",
    location: "Loures, Lisboa, Portugal",
    email: "nikitayxp@gmail.com",
    phone: "+351 937 855 313",
    linkedin: "https://linkedin.com/in/nikita-slobodeniuc",
    github: "https://github.com/nikitayxp",
    resumeUrl: "/CV_Nikita_Slobodeniuc_PT.pdf",
    summary:
      "Estudante do 2.º ano do CTeSP em Desenvolvimento de Software no ISTEC Lisboa, com formação profissional em informática e 600 horas de experiência de estágio em suporte técnico. Estou a desenvolver conhecimentos de programação e desenvolvimento de aplicações através da formação e de projetos pessoais.",
    about: [
      "Frequento o 2.º ano do CTeSP em Desenvolvimento de Software no ISTEC Lisboa e concluí o curso profissional de Técnico de Gestão e Programação de Sistemas Informáticos.",
      "Realizei dois estágios curriculares de informática, na Wellow Network e no Colégio Integrado Monte Maior, num total de 600 horas. Nessas experiências, trabalhei em suporte a utilizadores, preparação de equipamentos, configuração de Windows e resolução de problemas de hardware e software.",
      "Ao longo do curso, tenho desenvolvido bases em diferentes linguagens de programação, bases de dados e desenvolvimento de aplicações, incluindo C# e tecnologias web. Complemento a formação com projetos pessoais e utilizo ferramentas de inteligência artificial como apoio ao planeamento, estudo e revisão de código, procurando compreender e aplicar o que aprendo.",
      "Resido em Loures, tenho carta de condução e estou à procura de oportunidades na área tecnológica onde possa contribuir, aprender com profissionais experientes e desenvolver as minhas competências.",
    ],
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
      support: [
        "Suporte a utilizadores",
        "Instalação e configuração de Windows",
        "Preparação e manutenção de equipamentos",
        "Resolução de problemas de hardware e software",
      ],
      development: [
        "Lógica de programação",
        "C#",
        "SQL e bases de dados",
        "HTML, CSS e JavaScript",
        "Desenvolvimento de aplicações",
        "Git e GitHub",
      ],
      projectTechnologies: [
        "Next.js",
        "React Native e Expo",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "Vercel",
      ],
    },
    projects: [
      {
        name: "Portefólio — Nikita Slobodeniuc",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        summary:
          "Portefólio pessoal bilingue (PT/EN), criado com Next.js e ferramentas de IA, para apresentar o meu percurso, experiência e projetos.",
        githubUrl: "https://github.com/nikitayxp/portfolio-site",
        githubLabel: "Ver código",
      },
      {
        name: "LyftTrack — Site de apresentação",
        stack: ["Next.js", "TypeScript"],
        summary:
          "Site de apresentação do LyftTrack, criado com Next.js e ferramentas de IA, com informação sobre o projeto e as funcionalidades da aplicação.",
        githubUrl: "https://github.com/nikitayxp/lyfttrack",
        siteUrl: "https://lyfttrack-site.vercel.app",
      },
      {
        name: "LyftTrack — Aplicação web",
        stack: ["React Native (Expo)", "TypeScript", "Supabase"],
        summary:
          "Projeto pessoal de uma aplicação web para registar treinos e acompanhar a evolução, desenvolvido com recurso a ferramentas de IA. Em desenvolvimento.",
        githubUrl: "https://github.com/nikitayxp/lyfttrack",
        appUrl: "https://lyfttrack-app.vercel.app",
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
        program:
          "Curso Profissional Técnico de Gestão e Programação de Sistemas Informáticos",
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
    title: "Software Development · IT Support",
    location: "Loures, Lisbon, Portugal",
    email: "nikitayxp@gmail.com",
    phone: "+351 937 855 313",
    linkedin: "https://linkedin.com/in/nikita-slobodeniuc",
    github: "https://github.com/nikitayxp",
    resumeUrl: "/CV_Nikita_Slobodeniuc_EN.pdf",
    summary:
      "Second-year Software Development CTeSP student at ISTEC Lisbon, with vocational training in IT and 600 hours of internship experience in technical support. I am building my programming and application development knowledge through my studies and personal projects.",
    about: [
      "I am in the second year of the Software Development CTeSP at ISTEC Lisbon and have completed a vocational course in IT Systems Management and Programming.",
      "I completed two curricular IT internships at Wellow Network and Colégio Integrado Monte Maior, totalling 600 hours. My work included user support, device preparation, Windows configuration and troubleshooting hardware and software issues.",
      "My studies cover the foundations of different programming languages, databases and application development, including C# and web technologies. I also work on personal projects and use AI tools to support planning, study and code review, aiming to understand and apply what I learn.",
      "I live in Loures, hold a driving licence and am looking for opportunities in technology where I can contribute, learn from experienced professionals and develop my skills.",
    ],
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
      support: [
        "User support",
        "Windows installation and configuration",
        "Device preparation and maintenance",
        "Hardware and software troubleshooting",
      ],
      development: [
        "Programming fundamentals",
        "C#",
        "SQL and databases",
        "HTML, CSS and JavaScript",
        "Application development",
        "Git and GitHub",
      ],
      projectTechnologies: [
        "Next.js",
        "React Native and Expo",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "Vercel",
      ],
    },
    projects: [
      {
        name: "Portfolio — Nikita Slobodeniuc",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        summary:
          "Bilingual personal portfolio (PT/EN), created with Next.js and AI tools to present my background, experience and projects.",
        githubUrl: "https://github.com/nikitayxp/portfolio-site",
        githubLabel: "View source",
      },
      {
        name: "LyftTrack — Project website",
        stack: ["Next.js", "TypeScript"],
        summary:
          "LyftTrack project website, created with Next.js and AI tools, with information about the project and the application's features.",
        githubUrl: "https://github.com/nikitayxp/lyfttrack",
        siteUrl: "https://lyfttrack-site.vercel.app",
      },
      {
        name: "LyftTrack — Web application",
        stack: ["React Native (Expo)", "TypeScript", "Supabase"],
        summary:
          "Personal web application project for logging workouts and tracking progress, developed with AI tools. In development.",
        githubUrl: "https://github.com/nikitayxp/lyfttrack",
        appUrl: "https://lyfttrack-app.vercel.app",
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
        program:
          "Professional Higher Technical Diploma (CTeSP) in Software Development",
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
