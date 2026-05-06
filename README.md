# 🌑 Zen Portfolio — Cristian David Rodriguez Peralta

Personal developer portfolio built with vanilla HTML, CSS and JavaScript. Minimal, dark, and data-driven — no frameworks, no noise.

**Live demo:** [https://david-peralta-rd.github.io/Portfolio-Cr-David-Peralta/]

---

## Stack

```
HTML5 · CSS3 · Vanilla JavaScript
```

No frameworks. No dependencies. Just logic.

---

## Structure

```
portfolio/
├── index.html              # Markup — no hardcoded projects
├── src/
│   ├── style/
│   │   ├── ZenLoad.css     # Design tokens & variables
│   │   └── ZenHome.css     # All component styles
│   ├── js/
│   │   ├── projects.js     # ← Edit this to add projects & personal data
│   │   └── zen.js          # DOM renderer & navigation logic
│   └── img/
│       └── profile.png     # Your profile picture
└── README.md
```

---

## How to add a project

Open `src/js/projects.js` and add an object to the `projects` array:

```js
{
    id: 'my-project',
    title: 'My Project',
    year: '2024',
    type: 'API',          // API · Service · CLI Tool · Full Stack · Data · Library
    featured: true,       // true → Top Projects  |  false → More Work
    desc: 'Short description of what it does and why it matters.',
    tags: ['Node.js', 'PostgreSQL'],
    github: 'https://github.com/youruser/my-project',
    live: null,           // null if no live demo
},
```

Stats update automatically — project count, years of experience, everything.

---

## How to update personal info

Everything lives in `src/js/projects.js` under `ZenData.profile`:

```js
profile: {
    name: 'Your Name',
    role: 'Backend Engineer · ML Systems',
    bio: 'Your bio here.',
    stack: ['Node.js', 'Express', 'MongoDB'],
    yearsBuilding: 3,
    contact: {
        email: 'you@email.com',
        github: 'github.com/youruser',
        linkedin: 'linkedin.com/in/youruser',
    },
    about: [
        'First paragraph.',
        'Second paragraph.',
    ],
},
```

---

## Design

- **Palette:** dark grey zen — `#252525` base, no pure black, no aggressive colors
- **Typography:** Cormorant Garamond (display) + DM Mono (body)
- **Sections:** Top Projects (featured) · More Work · About · Contact
- **Animations:** scroll-triggered entrance, staggered card reveal
- **Responsive:** mobile-first, single column on small screens

---

## Run locally

No build step needed. Just open `index.html` in your browser or serve with any static server:

```bash
npx serve .
# or
python -m http.server 8000
```

---

## Author

**Cristian David Rodriguez Peralta**
Backend Engineer · Data & ML Systems
Previously @ SoftwareOne Colombia
[LinkedIn](#) · [Portfolio](#)

---

*Built with intention. No decorations — just logic.*
