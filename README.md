# 🛍️ Product Explorer

A modern, responsive Product Explorer application built with **React, TypeScript, and CSS**, featuring a sleek dark theme and interactive product browsing.

## ✨ Features

- 🛒 Browse products with images, names, prices, and categories
- 🔍 Search products by name
- 🗂️ Filter products by category
- ↕️ Sort products by price, rating, and featured products
- ❤️ Add and remove products from your wishlist
- 🛍️ Shopping bag functionality
- 👁️ Quick View modal for product details
- 📱 Responsive design for desktop and mobile
- 🌙 Modern dark-themed user interface

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- CSS
- Lucide React Icons

## 📋 Prerequisites

Before running the project, make sure you have installed:

- **Node.js** (LTS version recommended)
- **npm** (included with Node.js)
- A code editor such as Visual Studio Code

Check your installations:

```bash
node -v
npm -v
```

## 🚀 Getting Started

### 1. Open the project folder

Open the `product-explorer` folder in Visual Studio Code.

### 2. Open the terminal

In VS Code, select **Terminal → New Terminal**.

### 3. Install dependencies

Run the following command:

```bash
npm install
```

### 4. Start the development server

Run:

```bash
npm run dev
```

### 5. Open the application

The terminal will display a local URL, usually:

```text
http://localhost:5173/
```

Open that URL in your browser to use the application.

> **Note:** The port may differ if the default port is already in use. Always use the URL displayed in your terminal.

## 📁 Project Structure

```text
product-explorer/
├── public/
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── App.css
│   ├── data.ts
│   ├── types.ts
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

*The exact files and folders may vary depending on your implementation.*

## 📦 Build for Production

To create an optimized production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## 🧑‍💻 Development

- Edit React components inside the `src` folder.
- Update styling in `src/App.css` or the relevant component CSS files.
- Update product information in `src/data.ts`, if your project uses this file.
- The Vite development server supports hot module replacement, so most changes appear in the browser automatically.

## 👨‍💻 Author

Developed as a frontend web development project using React and TypeScript.

---

**Product Explorer** — Discover products with a modern shopping experience.
