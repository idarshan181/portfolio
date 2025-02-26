---
title: "Darshan Patel - Portfolio"
description: "A high-performance, SEO-optimized portfolio website built with Next.js, showcasing projects, achievements, and more."
---

# 🚀 **Darshan Patel - Portfolio**

A **modern, high-performance portfolio** built with **Next.js** to showcase **projects, achievements, blogs, resume, and GitHub metrics**. This site highlights **skills, work experience, and technical expertise** while ensuring **SEO optimization, fast loading times, and a responsive UI**.

The goal of this portfolio is to provide **recruiters and hiring managers** with an easy way to explore **projects, contributions, and key skills**, all within a **minimal, professional, and engaging interface**.

## 🌟 Features

### ✅ Completed
- ✅ **Next.js 15** with **App Router**
- ✅ **SEO Optimization** (Meta Tags, Open Graph, JSON-LD)
- ✅ **Projects Showcase** with case studies and live demos
- ✅ **Resume Download** and online preview
- ✅ **Dark Mode Toggle**
- ✅ **Shadcn Components** for a clean, modern UI
- ✅ **Automated Deployment with CI/CD**

### ⏳ Upcoming Features
- ⏳ **Blog Integration** with Sanity CMS
- ⏳ **Interactive Skill Visualization**
- ⏳ **Case Studies for Major Projects**
- ⏳ **GitHub Metrics** to display contributions
- ⏳ **Spotify API Integration** to show recently played songs

---

## 🛠️ **Tech Stack**

- **Frontend**: Next.js (TypeScript), TailwindCSS, Shadcn
- **CMS**: Sanity CMS for blogs & project content
- **Deployment**: Vercel (Auto-deploy enabled)
- **Analytics & SEO**: Vercel, OpenGraph, JSON-LD
- **Monitoring** : Sentry

---

## 📋 **Prerequisites**

To set up and run the project locally, ensure you have:
- **Node.js** & **NPM** installed
- **Sanity CMS** set up for blogs (optional)

---

## 🔧 **Installation & Setup**

### 1️⃣ Clone the repository

```sh
git clone https://github.com/idarshan181/portfolio.git
cd portfolio

npm install

npm run dev
```

## 📁 Project Structure
```
├── README.mdx
├── package.json
├── src/
│   ├── app/
│   │   ├── home/
│   │   ├── projects/
│   │   ├── blog/
│   │   ├── resume/
│   │   ├── about/
│   │   ├── api/
│   │   │   ├── spotify/
│   │   │   ├── github/
│   │   │   └── analytics/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── lib/
│   └── public/
└── tsconfig.json
```

## 📝 Environment Variables (.env)

Create a .env file in the root directory and include the following variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=
NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=
NEXT_PUBLIC_GITHUB_ACCESS_TOKEN=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

## 🚀 Deployment

This portfolio is automatically deployed using Vercel.

For production build:

```
npm run build
npm start
```

## 🔍 API Documentation

### API routes available at /api/:

- /api/spotify - Fetches recently played songs

- /api/github - Fetches GitHub contributions

- /api/analytics - Tracks page views and user interactions

## ✨ Connect with Me

🌐 **Portfolio**: [idarshan18.com](https://idarshan18.com)

💼 **LinkedIn**: [linkedin.com/in/idarshan18](https://linkedin.com/in/idarshan18)

🐙 **GitHub**: [github.com/idarshan181](https://github.com/idarshan181)

🚀 Built with ❤️ by **Darshan Patel**
