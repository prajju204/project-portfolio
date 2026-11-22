# Prajwal - Modern Developer Portfolio 🚀

A modern, premium, and fully responsive personal portfolio website built with **React.js + Vite + Tailwind CSS + JavaScript**.

All content has been extracted from Prajwal's resume.

---

## 🌟 Key Features

1. **Dark Theme & Modern Aesthetics**:
   - Deep navy/black palette (`#050814`) with glassmorphism cards and blue/indigo/purple glowing gradients.
   - Smooth hover interactions, glowing borders, and clean typography with *Plus Jakarta Sans* and *JetBrains Mono*.

2. **Hero Section**:
   - Dynamic rotating titles: *MCA Graduate | Software Developer | Frontend Developer | Java & Web Enthusiast*.
   - Direct Call-to-Actions: **Download Resume**, **View Projects**, **Contact Me**.
   - Profile avatar with placeholder instructions for swapping photo.
   - Verified contact links (Email, Phone, LinkedIn, GitHub).

3. **About Me**:
   - Full narrative highlighting MCA (2026) and 5-month internship at **MCWARE Technologies LLP (MIhub)**.
   - Personal details (DOB, Location: Mattu, Udupi, KA, Languages: English, Kannada, Hindi).
   - Personality strengths and sports/games achievement highlights.

4. **Technical Skills**:
   - Categorized cards with progress bars and badges:
     - **Languages**: Python, Java, TypeScript, JavaScript
     - **Frontend**: React.js, HTML5, CSS3, Tailwind CSS
     - **Backend**: PHP, Supabase, Socket.io, Node.js
     - **Databases**: MySQL, MongoDB, Firebase
     - **AI Tools**: Google Antigravity, GitHub Copilot, Claude AI
   - Interactive category filtering.

5. **Experience**:
   - **Software Development Intern – MCWARE Technologies LLP (MIhub)** (06 May 2026 – 07 Oct 2026).
   - Detailed responsibilities covering **Luxe Groom**, real-time notifications with Socket.io, MongoDB schemas, and AI-accelerated development with Antigravity and Claude AI.

6. **Projects**:
   - **LUXE GROOM**: Salon & Clinical Treatment Appointment Management System (React.js, Tailwind CSS, Node.js, MongoDB, Socket.io).
   - **FOODIE**: Food Ordering App (React.js, TypeScript, Supabase).
   - **QUIZ ASTRA**: Android Quiz App (Java, Android SDK, Firebase).
   - Includes interactive **"View Details" modal**, tech badges, and GitHub links.

7. **Education**:
   - **MCA (2024–2026)** – Poornaprajna Institute of Management (CGPA: 7.47).
   - **BCA (2021–2024)** – St Mary's College, Shirva (CGPA: 6.94).

8. **Certifications**:
   - *The Joy of Computing using Python* – NPTEL
   - *Digital Productivity with AI* – UNICEF
   - *Reliance Nippon Life Insurance Examination* – Cleared

9. **Contact Section**:
   - Working contact form with validation, status notifications, and `mailto:` action.
   - One-click copy for Email (`prajwaldp03@gmail.com`) and Phone (`+91 8431967664`).

10. **Interactive Resume Modal & Download**:
    - Complete formatted resume view with instant **Print / Save as PDF** and text download.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will run at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

---

## 🖼️ How to Replace the Profile Photo Placeholder
In `src/components/Hero.jsx`, find the profile photo section inside `<div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 ...">`. You can place your image file in `src/assets/profile.jpg` or `public/profile.jpg` and replace the inner avatar container with:
```jsx
<img 
  src="/profile.jpg" 
  alt="Prajwal" 
  className="w-full h-full object-cover rounded-2xl" 
/>
```

