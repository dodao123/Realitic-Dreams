// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header'; // Nhập Header component
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header /> {/* Sử dụng Header component */}
      <Banner />
      <main>
       
      </main>
    </div>
  );
}

export default App;
