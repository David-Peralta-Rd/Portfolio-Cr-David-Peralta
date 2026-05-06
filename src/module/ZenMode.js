// ─────────────────────────────────────────────────────────────────────────────
// ZEN PORTFOLIO — Renderer & Navigation
// Lee ZenData de projects.js y construye todo el HTML dinámicamente.
// ─────────────────────────────────────────────────────────────────────────────

(function () {
    'use strict';

    // ── Helpers ────────────────────────────────────────────────────────────────

    function el(tag, attrs, ...children) {
        const node = document.createElement(tag);
        if (attrs) {
            Object.entries(attrs).forEach(([k, v]) => {
                if (k === 'class') node.className = v;
                else if (k === 'html') node.innerHTML = v;
                else node.setAttribute(k, v);
            });
        }
        children.forEach(child => {
            if (!child) return;
            if (typeof child === 'string') node.appendChild(document.createTextNode(child));
            else node.appendChild(child);
        });
        return node;
    }

    function animate(nodes, baseDelay, step) {
        baseDelay = baseDelay || 0;
        step = step || 70;
        const obs = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var node = entry.target;
                    var idx = parseInt(node.dataset.idx || 0);
                    node.style.transitionDelay = (baseDelay + idx * step) + 'ms';
                    node.classList.add('visible');
                    obs.unobserve(node);
                }
            });
        }, { threshold: 0.08 });
        nodes.forEach(function(n, i) {
            n.dataset.idx = i;
            n.classList.add('anim-hidden');
            obs.observe(n);
        });
    }

    // ── Project Card ───────────────────────────────────────────────────────────

    function renderCard(p, featured) {
        var card = el('article', { class: 'project-card' + (featured ? ' featured' : '') });

        var meta = el('div', { class: 'project-meta' });
        meta.appendChild(el('span', { class: 'project-year' }, p.year));
        meta.appendChild(el('span', { class: 'project-type' }, p.type));
        card.appendChild(meta);

        card.appendChild(el('h3', { class: 'project-title' }, p.title));
        card.appendChild(el('p', { class: 'project-desc' }, p.desc));

        var tagsWrap = el('div', { class: 'project-tags' });
        p.tags.forEach(function(t) { tagsWrap.appendChild(el('span', { class: 'tag' }, t)); });
        card.appendChild(tagsWrap);

        var links = el('div', { class: 'project-links' });
        if (p.github) {
            links.appendChild(el('a', { class: 'project-link', href: p.github, target: '_blank' }, 'GitHub →'));
        }
        if (p.live) {
            links.appendChild(el('a', { class: 'project-link secondary', href: p.live, target: '_blank' }, 'Live →'));
        }
        card.appendChild(links);

        return card;
    }

    // ── Render Projects ────────────────────────────────────────────────────────

    function renderProjects() {
        var featured = ZenData.projects.filter(function(p) { return p.featured; });
        var rest     = ZenData.projects.filter(function(p) { return !p.featured; });

        var featuredSection = document.getElementById('projects-featured');
        if (featuredSection && featured.length) {
            var header = el('div', { class: 'section-header zen-section' });
            header.appendChild(el('h2', { class: 'section-title' }, 'Top Projects'));
            header.appendChild(el('p', { class: 'section-subtitle' }, 'selected & most relevant work'));
            featuredSection.appendChild(header);

            var grid = el('div', { class: 'projects-grid' });
            featured.forEach(function(p) { grid.appendChild(renderCard(p, true)); });
            featuredSection.appendChild(grid);
            animate(Array.from(grid.querySelectorAll('.project-card')), 0, 80);
        }

        var restSection = document.getElementById('projects-all');
        if (restSection) {
            if (rest.length > 0) {
                var header2 = el('div', { class: 'section-header zen-section' });
                header2.appendChild(el('h2', { class: 'section-title' }, 'More Work'));
                header2.appendChild(el('p', { class: 'section-subtitle' }, 'other projects & experiments'));
                restSection.appendChild(header2);

                var grid2 = el('div', { class: 'projects-grid projects-grid--small' });
                rest.forEach(function(p) { grid2.appendChild(renderCard(p, false)); });
                restSection.appendChild(grid2);
                animate(Array.from(grid2.querySelectorAll('.project-card')), 0, 60);
            } else {
                restSection.style.display = 'none';
                var prev = restSection.previousElementSibling;
                if (prev && prev.classList.contains('zen-divider')) prev.style.display = 'none';
            }
        }
    }

    // ── Render About ───────────────────────────────────────────────────────────

    function renderAbout() {
        var section = document.getElementById('about-content');
        if (!section) return;

        var textWrap = el('div', { class: 'about-text' });
        ZenData.profile.about.forEach(function(para) {
            textWrap.appendChild(el('p', {}, para));
        });
        section.appendChild(textWrap);

        var statsWrap = el('div', { class: 'about-stats' });
        ZenData.stats.forEach(function(s) {
            var item = el('div', { class: 'stat-item' });
            item.appendChild(el('span', { class: 'stat-number' }, s.value()));
            item.appendChild(el('span', { class: 'stat-label' }, s.label));
            statsWrap.appendChild(item);
        });
        section.appendChild(statsWrap);
    }

    // ── Render Hero ────────────────────────────────────────────────────────────

    function renderHero() {
        var stackTarget = document.getElementById('hero-stack');
        if (stackTarget) {
            ZenData.profile.stack.forEach(function(t) {
                stackTarget.appendChild(el('span', { class: 'stack-tag' }, t));
            });
        }
        var bioTarget = document.getElementById('hero-bio');
        if (bioTarget) bioTarget.textContent = ZenData.profile.bio;
    }

    // ── Render Contact ─────────────────────────────────────────────────────────

    function renderContact() {
        var section = document.getElementById('contact-links');
        if (!section) return;
        var c = ZenData.profile.contact;

        [
            { icon: '✉', href: 'mailto:' + c.email, label: c.email },
            { icon: '⌥', href: 'https://' + c.github, label: c.github },
            { icon: '◈', href: 'https://' + c.linkedin, label: c.linkedin },
            { icon: '♨', href: 'https://raw.githubusercontent.com/David-Peralta-Rd/Certificates-DavidPeralta/main/' + c.cv, label: c.cv },
        ].forEach(function(item) {
            var a = el('a', { class: 'contact-item', href: item.href, target: '_blank' });
            a.appendChild(el('span', { class: 'contact-icon' }, item.icon));
            a.appendChild(el('span', {}, item.label));
            section.appendChild(a);
        });
    }

    // ── Navigation ─────────────────────────────────────────────────────────────

    function initNav() {
        var navLinks = document.querySelectorAll('.nav-link');
        var sections = document.querySelectorAll('section[id]');

        function updateActive() {
            var y = window.scrollY + 140;
            sections.forEach(function(sec) {
                if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
                    var id = sec.getAttribute('id');
                    navLinks.forEach(function(l) {
                        l.classList.toggle('active', l.getAttribute('href') === '#' + id);
                    });
                }
            });
        }

        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                var href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    var target = document.querySelector(href);
                    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        window.addEventListener('scroll', updateActive, { passive: true });
        updateActive();
    }

    // ── Section entrance animations ────────────────────────────────────────────

    function initSectionAnims() {
        var obs = new IntersectionObserver(function(entries) {
            entries.forEach(function(e) {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.05 });
        document.querySelectorAll('.zen-section').forEach(function(s) { obs.observe(s); });
    }

    // ── Boot ───────────────────────────────────────────────────────────────────

    document.addEventListener('DOMContentLoaded', function() {
        renderHero();
        renderProjects();
        renderAbout();
        renderContact();
        initNav();
        initSectionAnims();
    });

})();
