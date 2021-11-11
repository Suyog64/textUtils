// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React,{useState} from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      document.body.style.backgroundColor = 'white';
      setmode('light');
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
           <TextForm showAlert={showAlert} heading="Enter Text To Analyze" mode={mode}/>
          </Route>
        </Switch>
         
        {/* <About></About> */}
      </div>
      </Router>
    </>
  );
}
export default App;
