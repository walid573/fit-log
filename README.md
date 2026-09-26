# 🏋️ FitLog — Workout Library

> **Train with intent. Log every set.**

FitLog is a modern, responsive workout library and workout planning application designed to help users discover exercises, build a daily workout plan, save workouts for later, and track their progress.

The application provides a clean dark-themed interface with workout cards, detailed exercise information, daily planning, saved workouts, sorting, toast notifications, and persistent client-side state.

---

## 🔗 Live Demo

**Live Website:** [https://fit-log-jade.vercel.app/]

---
## ✨ Features

- 🏋️ Browse a responsive workout library
- 📋 Build a daily workout plan
- 🔖 Save workouts for later
- 📊 Track workout minutes and calories
- 🔔 Toast notifications for workout actions
- 💾 Persistent plan and saved data using localStorage
- 🔃 Sort workouts by duration, calories, or rating
- 📱 Fully responsive design for mobile, tablet, and desktop

---

## 🛠️ Technologies Used

| Technology          | Purpose                                  |
| ------------------- | ---------------------------------------- |
| **Next.js**         | React framework and routing              |
| **React**           | Building the user interface              |
| **TypeScript**      | Type-safe development                    |
| **Tailwind CSS**    | Styling and responsive design            |
| **React Toastify**  | Toast notifications                      |
| **Lucide React**    | UI icons                                 |
| **Next/Image**      | Optimized image rendering                |
| **Context API**     | Global workout plan and saved state      |
| **Local Storage**   | Persisting workout data across refreshes |
| **REST API / JSON** | Workout data                             |

---


## ⚡ Loading & Error Handling

FitLog includes:

* Workout data loading animation
* Loading state on the My Plan page
* Custom 404 page
* Error-safe routing
* Responsive empty states
* Toast feedback for user actions

Example loading message:

```text
Loading workouts…
```

Example empty state:

```text
NOTHING HERE YET

Browse the library and add a lift to get today moving.
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd fitlog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

```text
http://localhost:3000
```

---

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

---


## 📂 Project Structure

A simplified project structure:

```text
fitlog/
│
├── app/
│   ├── components/
│   ├── contexts/
│   ├── types/
│   ├── workout/
│   │   └── [id]/
│   ├── my-plan/
│   ├── page.tsx
│   ├── not-found.tsx
│   └── layout.tsx
│
├── public/
│   └── workout-data.json
│
├── assets/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```



---

## 👨‍💻 Author

**Mohammad Walid**

Frontend / Web Development Learner

Focused on building modern, responsive, and user-friendly web applications with React, Next.js, TypeScript, and Tailwind CSS.

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.



