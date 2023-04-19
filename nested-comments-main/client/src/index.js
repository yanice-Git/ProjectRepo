import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Header } from "./siteTools/header"
import { Footer } from "./siteTools/footer"
import backgroundImage from './background-image.jpg'; // Import your background image here

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  opacity: '10 %'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={styles}>
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
