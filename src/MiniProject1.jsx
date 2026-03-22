import { useState } from "react";

const MiniProject1 = ()=>{
const [colorName ,setColorName] = useState(JSON.parse(localStorage.getItem('setColor'))||"");

const handleColor = (e)=>{
    const newColorName = e.target.value;
    setColorName(newColorName)
    localStorage.setItem('setColor', JSON.stringify(newColorName));

};
    return(
<div className="colorParent">
   <div className="colorBox" style={{
    backgroundColor: colorName}}>
    <p className="colorText">{colorName? colorName : "Enter a color"}</p>
</div> 
    <input className="colorInput" placeholder="Enter color name" value={colorName} onChange={handleColor} />

</div>
    );
}
export default MiniProject1