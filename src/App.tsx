import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'

//import Message from './Message';
//import ListGroup from "./components/ListGroup";
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>My Button</Button>
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
