# Campus Event Announcement Board

A full-stack application for managing campus announcements, built with a **Java Servlet** backend and a **React + Tailwind CSS** frontend.

## 🚀 Getting Started

### Prerequisites

- **Java 17+**
- **Node.js**
- **Maven** (A helper script is provided if Maven is not installed)

---

### 1. Launch the Backend (Server)

The backend uses a Java Servlet with an in-memory database (Singleton Repository) for maximum performance.

1. Open your terminal in the `server` directory.
2. Run the helper script:
   ```powershell
   ./run.ps1
   ```
   _Note: This script handles Maven dependencies automatically._

---

### 2. Launch the Frontend (Website)

The frontend is a modern React application using Tailwind CSS for a sleek dark-themed UI.

1. Open a **new** terminal in the `react` directory.
2. Install dependencies (first time only):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🛠 Features

- **Announcement Management**: Create, view, and delete campus events.
- **Search System**: Instantly filter announcements by title or description.
- **Modern UI**: Fully responsive dark mode interface with glassmorphism touches.
- **RESTful API**: Clean backend architecture using Servlets and Gson.

## 📁 Project Structure

- `server/`: Java Servlet Maven project.
- `react/`: Vite-powered React application.
