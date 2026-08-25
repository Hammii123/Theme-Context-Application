import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function ThemeToggle() {

      const {theme,toggleTheme} =useContext(ThemeContext);
     
    return (
        <div>
            
      <label className="switch">
      <input type="checkbox" 
      checked={theme === "dark"} 
      onChange={toggleTheme}/>

      <span className="slider" style={{marginLeft:"10px"}}></span>
      </label>
    </div>
    )


}

export default ThemeToggle;