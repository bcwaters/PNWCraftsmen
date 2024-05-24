import React, { useState } from 'react';
import ContentBody from './components/HomePage';
import TopBar from './components/TopBar';
import Footer from './components/Footer'
import './App.css';

function App() {

    const [name, setPageName] = useState("HomePage")


  return (
    <div className="App">
      <TopBar setPageName={setPageName}/>
      <ContentBody pageName={name}/>
      <Footer />
    </div>
  );
}

export default App;
