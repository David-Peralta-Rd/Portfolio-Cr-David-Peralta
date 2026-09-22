// ─────────────────────────────────────────────────────────────────────────────
// ZEN PORTFOLIO — Data Layer
// Edita este archivo para agregar / quitar proyectos.
// El HTML y las stats se generan automáticamente.
// ─────────────────────────────────────────────────────────────────────────────

const ZenData = {

    // ── Personal Info ──────────────────────────────────────────────────────────
    profile: {
        name: 'David Peralta',
        role: 'Backend Developer / AI / Ml Engineer',
        bio: 'Backend engineer with hands-on experience in data systems and AI integrations. Formerly at SoftwareOne Colombia, where I worked on semantic models, Microsoft Fabric pipelines and Power BI reporting. Currently focused on building backend infrastructure for ML and data-driven applications.',
        stack: ['Python', 'Linux', 'Agent AI', 'PostgreSQL', 'Git/Github', 'Docker', 'Kubernetes'],
        yearsBuilding: 1,           // usado en stats
        coffeeLabel: '∞',           // puramente decorativo
        contact: {
            email: 'crdavidperalta@gmail.com',
            github: 'github.com/David-Peralta-Rd',
            linkedin: 'linkedin.com/in/david-peralta-380652366/',
            cv: 'CV_Cristian_Rodrgiuez_EN.pdf',
        },
        about: [
            "I'm a software developer from Bogotá with a strong focus on backend systems and data engineering, working toward a career in AI and Machine Learning infrastructure. I'm passionate about building the systems that make intelligent applications work — pipelines, APIs, and the logic that runs underneath.",

            "During my professional stage at SoftwareOne Colombia, I worked on semantic models, Microsoft Fabric integrations, and Power BI reporting — earning internal recognition for my results. Certified in AI Prompting and continuously expanding into ML systems and data-driven architectures."
        ],
    },

    // ── Projects ───────────────────────────────────────────────────────────────
    // featured: true  → aparece en "Top Projects" (máximo 5 recomendado)
    // featured: false → aparece en "All Projects"
    // ──────────────────────────────────────────────────────────────────────────
    projects: [
        {
            id: 'Ecommerce-SenaProject',
            title: 'Ecommerce Project',
            year: '2025',
            type: 'B2C',
            featured: true,
            desc: 'This project, as a final Sena assignment, involves building a system capable of handling sales and purchases with receipts, user registration, administrator management, and databases.',
            tags: ['Python', 'Html', 'Css', 'Django', 'SQLite', 'PostgreSQL'],
            github: 'https://github.com/David-Peralta-Rd/Ecommerce-Project-for-Work-at-Sena',
            live: null,
        },
        {
            id: 'Ecommerce-MercyVentas',
            title: 'Ecommercy-Mercyventas',
            year: '2026',
            type: 'Web',
            featured: true,
            desc: 'Online store project utilizing a professional multi-stage setup with development environments.',
            tags: ['Python', 'Django', 'Docker', 'Shell', 'Linux'],
            github: 'https://github.com/David-Peralta-Rd/Ecommerce-MercyVentas',
            live: null,
        },
//        {
//            id: 'example-project',
//            title: 'example',
//            year: '2026',
//            type: 'Example',
//            featured: false,
//            desc: 'Description',
//            tags: ['Stack1', 'Stack2', 'Stack3', 'Stack4',],
//            github: 'github.com/example.',
//            live: null,
        //        },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Stats — computed automatically from data above. No tocar.
// ─────────────────────────────────────────────────────────────────────────────
ZenData.stats = [
    {
        value: () => ZenData.profile.yearsBuilding + '+',
        label: 'years building',
    },
    {
        value: () => ZenData.projects.length + '+',
        label: 'projects shipped',
    },
    {
        value: () => ZenData.profile.coffeeLabel,
        label: 'coffee consumed',
    },
];
