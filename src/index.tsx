import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Mencari elemen root dengan cara yang lebih aman untuk TypeScript
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
