// Import the core React library
import React from 'react';

// Import the ReactDOM library, which allows rendering React elements into the DOM
import ReactDOM from 'react-dom/client';

// Import the main App component (your business card UI)
import App from './App';

// Import global styles
import './index.css';

// Create a root where the React app will be rendered (linked to the HTML element with id="root")
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    {/* StrictMode helps catch potential problems and provides warnings during development */}
    <App />
  </React.StrictMode>
);
