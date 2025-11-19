# React Simple Accordion

A small practice project: a simple, reusable accordion component built with React.  
Each item can be expanded or collapsed to show or hide its content, with only one open at a time.

## 🚀 Demo

Live demo is available here:  
https://react-simple-accordion.vercel.app/

## 🧩 Features

- Clean and minimal accordion UI
- Click to expand/collapse items
- Only one item open at a time
- Active item highlighting
- Simple, reusable component structure (`Accordion` + `AccordionItem`)

## 🛠️ Tech Stack

- **React 18**
- **JavaScript (ES6+)**
- **CSS** for basic styling
- Deployed on **Vercel**

## 📦 Getting Started

Clone the repository:

```bash
git clone https://github.com/mrobacki/react-simple-accordion.git
cd react-accordion
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run start
```

Build for production:

```bash
npm run build
```

## 🧠 How It Works

- The `Accordion` component receives an array of FAQ objects (`title` + `text`).
- It manages the state of the currently open item using `useState`.
- Each `AccordionItem`:
  - Receives its own `itemKey`
  - Checks if it matches the `currentOpen` value
  - Toggles itself open/closed on click
  - Formats the index as a two-digit number (e.g., `01`, `02`)

## 📄 License

This project is open-source and available under the MIT License.
