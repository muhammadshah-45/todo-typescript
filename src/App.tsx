import React, { useState } from "react";
import './App.css'
import Home from "./components/Pages/Home";
import { ThemeContext } from "../context/theme/theme";
import './components/Pages/home.css'
import Switch from 'react-switch'
import { IoMoon, IoSunny } from "react-icons/io5";
const App =()=>{
  const [theme,setTheme] = useState('light')
  const [checked,setChecked] = useState(false)

  const changeHandler =(check:boolean)=>{
     setChecked(!checked)
  
     if(check){
      setTheme("dark")
     }else{
      setTheme('light')
     }
  }
  return (
    <ThemeContext.Provider value={theme}>

    <Switch 
    className="react-switch app"
    checkedIcon = {<IoSunny style={{padding:'2.4px'}} size={24} color="orange"/>}
    uncheckedIcon ={<IoMoon style={{padding:'2.4px'}} size={24} color="white"/>}
     onChange={changeHandler} checked={checked}>
    
    </Switch>
    
  <Home/>
  </ThemeContext.Provider>
)
 
}

export default App;