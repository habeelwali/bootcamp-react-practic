import React from 'react';
import './App.css';
import Pak from './pak';
import Total from './pak2';
function App() {
  return (
    <div className="App">



     <h1><Total total='220,892,340'/></h1> 

      <h1><Pak provance="kpk" population="35.53 million "/></h1>
      <h1><Pak provance="punjab" population="110,012,442"/></h1>
      <h1><Pak provance="sindh" population="47.89 million"/></h1>
      <h1><Pak provance="Balochistan" population="12.34 million"/></h1>
      <h1><Pak provance="gilgit baltistan" population="1.249 million"/></h1>
      

      
   
    </div>
  
    
  );
}

export default App;
