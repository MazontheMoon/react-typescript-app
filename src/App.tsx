//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'

//import Message from './Message';

//import ListGroup from "./components/ListGroup";

import Alert from './components/Alert';

function App() {

  return (
    <div>
      <Alert>
        Hello World<span>...of React!</span>
      </Alert>
    </div>
  );
}

/*LIST GROUP

function App() {
  let listItems = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleSelectItem = (item : string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup listItems={listItems} heading="Days" onSelectItem={handleSelectItem}/>
    </div>
  );
}
  */

export default App;
