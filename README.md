# 🛍️ Product Explorer

A modern, responsive Product Explorer web application built using React, TypeScript, Vite, and CSS. The application provides a dark-themed interface for browsing, searching, filtering, and sorting products.

## ✨ Features

- Browse products with images, names, prices, and categories.
- Search products by name.
- Filter products by category.
- Sort products by price and rating.
- Add and remove products from the wishlist.
- Shopping bag functionality.
- Quick View modal for product details.
- Responsive design for desktop and mobile screens.
- Modern dark-themed user interface.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- CSS
- Lucide React Icons

## 📋 Prerequisites

Before running the project, install:

1. **Node.js** — preferably the latest LTS version.
2. **npm** — included with Node.js.
3. **Visual Studio Code** or another code editor.
4. **GitHub account** — if you want to upload or share the project.

Verify that Node.js and npm are installed by opening a terminal and running:

```bash
node -v
npm -v
```

If both commands display version numbers, you are ready to continue.

## 🚀 How to Run the Project Locally

### Step 1: Download the project

Open the GitHub repository and click **Code → Download ZIP**.

Extract the downloaded ZIP file on your computer using Windows **Extract All**.

Alternatively, open your existing project folder if you already have it on your computer.

### Step 2: Open the project in VS Code

Open Visual Studio Code.

Select **File → Open Folder** and choose the extracted `product-explorer` folder.

Make sure you open the folder containing `package.json`.

### Step 3: Open the terminal

In VS Code, select **Terminal → New Terminal**.

Make sure the terminal is located in the project folder.

### Step 4: Install dependencies

Run:

```bash
npm install
```

This command downloads the packages required by the project and creates the `node_modules` folder automatically.

**Important:** The `node_modules` folder does not need to be uploaded to GitHub. It is generated locally when you run `npm install`.

### Step 5: Start the development server

Run:

```bash
npm run dev
```

Vite will display a local URL in the terminal, usually:

```text
http://localhost:5173/
```

Open the displayed URL in your web browser to view the Product Explorer application.

Keep the terminal running while using the application. To stop the development server, press `Ctrl + C` in the terminal.

## 📤 How to Upload the Project to GitHub Using the Website

### Step 1: Create a repository

1. Sign in to [GitHub](https://github.com/).
2. Click the **+** icon and select **New repository**.
3. Enter `product-explorer` as the repository name.
4. Choose Public or Private according to your submission requirements.
5. Click **Create repository**.

### Step 2: Upload project files

1. Open the newly created repository and select the **Code** tab.
2. Click **Add file → Upload files**.
3. Extract your project ZIP file on your computer if you have not already done so.
4. Upload the contents of the project folder, including the `src` folder, `public` folder if present, `package.json`, `package-lock.json`, `index.html`, configuration files, and `README.md`.
5. Do not upload the `node_modules` folder.
6. Do not upload `.env` files containing secrets.

### Step 3: Commit the uploaded files

1. Scroll to the **Commit changes** section.
2. Enter a commit message, such as `Upload Product Explorer project`.
3. Click **Commit changes**.

Your source code should now be visible in your GitHub repository.

**Note:** If you update `README.md` after uploading the project, upload the updated file to GitHub again so the repository displays the latest instructions.

## 📦 Build for Production

To create an optimized production build, run:

```bash
npm run build
```

The generated production
