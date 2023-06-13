import React, { useState, useEffect } from 'react';
import Amplify, { API } from 'aws-amplify';

const myAPI = "api109d583c";
const myPath = "/items";

function App() {
  const [input, setInput] = useState("");
  
  function getTwilioMessages(e) {
    let number = e.input;
    API.get(myAPI, myPath + "/" + number)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      })
  }
  return (
    <div className="App">
      <div>
        <input 
          placeholder='tu numero' 
          type="number" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}/>
      </div>
      <button onClick={getTwilioMessages({input})}>Get Twilio Messages</button>
    </div>
  );
}

export default App;
