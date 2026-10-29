# 💻 Software Engineer Portfolio

A modern, high-performance personal portfolio website built with React, TypeScript, and Tailwind CSS to showcase engineering projects, technical skills, and experience.

---

## ✨ Features

- **⚡ Blazing Fast:** Built with Vite and Bun for instant asset loading and fluid rendering.
- **📱 Fully Responsive:** Clean layout optimized across mobile, tablet, and desktop viewports.
- **🎨 Interactive UI:** Features custom startup loader animations, dynamic project grids, and interactive skill sections.
- **📬 Contact Integration:** Built-in contact form section and social links.

---

## 🛠️ Tech Stack

- **Framework:** React 18, TypeScript
- **Styling:** Tailwind CSS
- **Build Tooling & Runtime:** Vite, Bun / Node.js
- **Icons:** Lucide React

---

## 📁 Repository Structure

```text
src/
├── assets/images/    # Hero workspace, profile, and project media
├── components/       # Component modules
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   └── StartupLoader.tsx
├── data/             # Static content & portfolio metadata (portfolioData.ts)
├── types.ts          # TypeScript interfaces
├── App.tsx           # Primary view wrapper
└── main.tsx          # DOM root mounting point
