# 🧠 AI Job Assistant Tracker

**✨ CrackIt, TrackIt, StackIt** — Your AI-powered co-pilot for crushing the job hunt!

---

## 🚀 Project Objective

To build an intelligent job search companion that helps users organize applications, craft optimized resumes and cover letters, prepare for interviews, and track overall job hunt success — all powered by artificial intelligence.

---

## 💡 Smart Features for Resume Rockstars

✅ **AI Resume Builder**  
Create modern, professional resumes tailored to job posts in minutes. Our AI analyzes job descriptions and optimizes your resume to pass ATS checks and impress recruiters.

✅ **Cover Letter Crafter**  
Instantly generate personalized cover letters that align perfectly with your resume and job goals.

✅ **Job Post Analyzer**  
Upload any job description — get key skills, terms, and optimization tips from AI to align your profile with recruiter expectations.

✅ **Secure Document Vault**  
Encrypted, centralized storage for all your resumes, cover letters, and job materials. Access anytime, stress-free.

✅ **Resume Progress Tracker**  
Visualize how many jobs you’ve applied to, where your resume evolved, and your interview outcomes. See what’s working.

✅ **Skill Gap Finder**  
Get feedback on missing skills for your dream roles and actionable suggestions to level up.

---

## 📸 Project Screenshots

#### Landing Page:

![image](https://github.com/user-attachments/assets/96c8c253-3a35-4918-92ce-d60e8415cf57)


#### Features Page:
![image](https://github.com/user-attachments/assets/64c1eca9-fc15-4845-b981-db8d3a34e219)


#### Tech Stack Used For development and why?
![image](https://github.com/user-attachments/assets/76f4f261-cbd0-4631-ae4b-90647cc64fab)


#### Demo Video With explanation:
![image](https://github.com/user-attachments/assets/e0244ded-6c37-46ce-ac5a-b647d3f5d645)



---

## 🔗 Project Links

- **GitHub Repository**: [AI Job Application Tracker](https://github.com/yourusername/job-application-tracker)
- **Live Demo**: [Visit App](https://your-live-site-link.com)

---

## 🧰 Tech Stack

### 📦 Backend
- **Node.js** with **Express**
- **MongoDB** with Mongoose
- **JWT** for secure authentication
- **Helpers Directory** for clean reusable utilities
- **Index.js** as central backend entry

### 💻 Frontend
- **Vite + React.js** with Hooks
- **Tailwind CSS 4** for sleek, modern UI
- **Context Directory** for shared hook/middleware logic

### 🤖 AI-Enhanced Features
- Resume and cover letter generation
- Job description parsing
- Interview prep and prediction
- Probability scoring for application success
- Skill gap feedback

---

## 🗂️ Project File Structure

```bash
job-application-tracker/
│
├── backend/
│   ├── config/              # DB, env, and secrets
│   ├── controllers/         # Route logic
│   ├── helpers/             # Bycrypt
│   ├── models/              # MongoDB Schemas
│   ├── routes/              # API route handlers
│   ├── index.js             # Main server file
│   └── middleware/          # Auth & validation
│
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│       ├── assets/          # Icons, logos
│       ├── components/      # Reusable UI components (Side Bar, Navbar, Footer, Buttons)
│       ├── context/         # Context + hooks/middleware
│       ├── pages/           # App views (Dashboard, Login, SignUp, Hero Section etc...)
│       ├── App.jsx          # Routes and Navigator, Path Descriptions
|       └── Main.jsx         # App Entry Point
│
├── .env                     # Environment variables
├── README.md                # Project Objective, Propossed Solution, Screen Shots
└── package.json             # Depencies 
