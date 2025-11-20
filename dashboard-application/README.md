# Dashboard Application

This is a **modern dashboard web application** built with **React 18**, **Redux Toolkit**, and **Tailwind CSS**. It features a responsive design, API integration, data management, and proper state management.

---

## Features
- **React 18** for modern UI development.
- **Vite** for lightning-fast builds and development.
- **Redux Toolkit** for state management.
- **Tailwind CSS** for utility-first styling.
- **Lucide React** for clean icon sets.
- **JSONPlaceholder API** for data fetching.
- **Responsive Design** – Works seamlessly on mobile, tablet, and desktop.
- **Search** – Real-time data searching.
- **Pagination** – Navigate through large datasets.
- **Error Handling** – User-friendly error messages.
- **Loading States** – Beautiful loading animations.

---

## Dependencies
### Main
- **react** – UI library (v18.3.1).
- **react-dom** – Rendering React components.
- **react-redux** – React bindings for Redux.
- **@reduxjs/toolkit** – State management toolkit.
- **lucide-react** – Icon components.
- **tailwindcss** – Utility-first CSS framework.

### Dev
- **vite** – Fast development server and build tool (v5.1.0).
- **@vitejs/plugin-react** – React plugin for Vite.
- **postcss & autoprefixer** – For Tailwind CSS.

---

## Features Breakdown

### 1. **Dashboard Layout**
- Responsive sidebar with navigation
- Mobile-friendly hamburger menu
- Header with user avatar
- Clean and modern design

### 2. **API Integration**
- Fetches data from JSONPlaceholder API
- Error handling with user-friendly messages
- Loading states with animations
- Automatic data fetch on initial load

### 3. **Data Table**
- Dynamic columns based on API response
- Handles nested objects (address, company)
- Properly formatted cells
- Hover effects

### 4. **Search & Filter**
- Real-time search across all columns
- Case-insensitive filtering
- Automatic pagination reset

### 5. **Pagination**
- Page navigation controls
- Shows current page info
- Previous/Next buttons
- Numbered page buttons

### 6. **Error Handling**
- Try-catch blocks for API calls
- User-friendly error messages
- Visual error indicators
- No crashes on errors

---

## Project Setup

### 1. **Clone the repository**
```bash
git clone <your-repository-url>
cd dashboard-app
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Run the development server**
```bash
npm run dev
```
This will start the Vite development server at **http://localhost:5173**.

### 4. **Build for production**
```bash
npm run build
```

### 5. **Preview production build**
```bash
npm run preview
```