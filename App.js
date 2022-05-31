import "./App.css";
import Axios from "axios";

import { useState } from "react";
import ReceipeTile from "./ReceipeTile";
function App() {
  const [query,setQuery]=useState("");
  const [receipes,setReceipes]=useState([]);
  const [healthLabels,setHealthLabels]=useState("vegan");

  const YOUR_APP_ID="c1e6f030"
  const YOUR_APP_KEY="bde34f9076d2b2cbce33262830dbd716"
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;
  
  async function getreceipe(){
    var result=await Axios.get(url);
    setReceipes(result.data.hits)
    console.log(result.data);
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    getreceipe();
  }
  return (
    <div className="app">
      <h1 >Food Receipes</h1>
      <form className="app__serchform" onSubmit={onSubmit}>

        <input className="app__input"
        type="text" placeholder="enter ingredient"
        value={query}
        onChange={(e)=>setQuery(e.target.value)} />

        <input 
        className="app__submit"
        type="submit" value="search"/>

        <select className="app__healthLabels">
          <option onClick={()=>{setHealthLabels("vegan")}}>vegan</option>
          <option onClick={()=>{setHealthLabels("vegetarian")}}>vegetarian</option>
          <option onClick={()=>{setHealthLabels("paleo")}}>paleo</option>
          <option onClick={()=>{setHealthLabels("diary-free")}}>diary-free</option>
          <option onClick={()=>{setHealthLabels("gluten-free")}}>gluten-free</option>
          <option onClick={()=>{setHealthLabels("wheat-free")}}>wheat-free</option>
          <option onClick={()=>{setHealthLabels("low-sugar")}}>low-sugar</option>
          <option onClick={()=>{setHealthLabels("fish-free")}}>fish-free</option>
          <option onClick={()=>{setHealthLabels("egg-free")}}>egg-free</option>
          
        
        </select>
      </form>
      <div className="app__receipes">
          {receipes.map((recipe)=>
            {
              return <ReceipeTile recipe={recipe}/>
            })}
      </div>
    </div>
  );
}

export default App;

/*
https://api.edamam.com/search?q=chicken &app_id=c1e6f030&app_key=bde34f9076d2b2cbce33262830dbd716&from=0&to=3&calories=591-722&health=alcohol-free
  
*/