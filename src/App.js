import React, { useState } from 'react';
import ContentBody from './components/ContentBody';
import TopBar from './components/TopBar';
import Footer from './components/Footer'
import './App.css';

if (typeof window !== 'undefined') { // Check if we're running in the browser.
  // ✅ Only runs once per app load
  fetch("https://api.counterapi.dev/v1/pnwcraftsmen/pdx/up").then( asynch => {}).catch()
}

function App() {


    const [name, setPageName] = useState("Home")

  return (
    <div className="App">
      <TopBar setPageName={setPageName}/>
      <ContentBody pageName={name}/>
      <Footer />
    </div>
  );
}

export default App;
