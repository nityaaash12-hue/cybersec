# CyberMentor — 7-Day Cybersecurity Academy

A beginner-friendly React + Vite learning app. It includes seven days of lessons, quizzes, a safe simulated Linux terminal, phishing-awareness exercises, a personal security audit, a glossary, progress tracking and a prepared-response study mentor.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open the terminal in this folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite.

## Build

```bash
npm run build
```

Vite creates the production website in `dist/`.

## Deploy to GitHub and Vercel

1. Create a new GitHub repository.
2. Upload the contents of this project folder (not the ZIP itself).
3. In Vercel, choose **Add New → Project** and import that GitHub repository.
4. Vercel should detect Vite automatically. Use:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click Deploy.

No environment variables or backend are required for this starter version.

## Important notes

- Learning progress is stored in the browser's localStorage. It stays in that browser and is not synced between devices.
- The Cyber Lab terminal is simulated; it does not run commands on your computer or contact external systems.
- The mentor uses built-in prepared explanations. It is not connected to a live AI model yet.
- The audit downloads a plain-text report. Do not enter passwords, recovery codes or other secrets.
- Practice cybersecurity only in systems you own or have explicit permission to test.

## Project structure

- `src/course.js` — all seven-day lesson content, tasks and quiz questions
- `src/App.jsx` — dashboard, lessons, quizzes, labs, mentor and progress logic
- `src/styles.css` — responsive dark UI
- `src/main.jsx` — React entry point
