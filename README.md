# Feedback Form 📝

A simple and clean **React Feedback Form** with live preview.

Built using controlled components and React state.

## ✨ Features

- Controlled form inputs (name, email, message)
- Real-time live preview of user input
- Form submission with alert confirmation
- Clean and minimal UI
- Fully functional with React Hooks

## 🖼️ Preview

- Type in the form fields and see the values update instantly below
- Click **Submit** to see a summary alert

## 🚀 How to Run

1. Create a React project (or use an existing one)
2. Replace the content of `App.js` (or `App.jsx`) with the provided code
3. Start the development server:

```bash
npm start
# or
npm run dev

## 🛠️ Tech Stack

React (Functional Component + useState)
Inline CSS

## 📁 Project Structure
textsrc/
├── App.js          # Main Feedback Form component
└── index.js
🎯 How It Works

Uses a single form state object to manage all inputs
handleChange updates the state dynamically using the input’s name attribute
handleSubmit prevents default form behavior and shows the submitted data
Live Preview section renders the current state in real time
