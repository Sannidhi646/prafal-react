
import './App.css';
import Greet from './components/navbar';
import Top from './components/top';
import React from 'react';
import Weoffer from './components/weoffer';
import Wegrow from './components/wegrow';
import Aboutus from './components/aboutus';
import Foter from './components/foter';

function App() {
  return (
    <div>
        <Greet val="india" ved="1"/>
        <Top val="india" ved="1"/>
        
        <Weoffer val="india" ved="1"/>
        <Wegrow val="india" ved="1"/>
        <Aboutus val="india" ved="1"/>
        <Foter val="india" ved="1"/>
    </div>
  );
}

export default App;