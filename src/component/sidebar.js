import React from "react";

const SideBar = (props) => {
    const {handleProductSize} = props;
    return (
        <div className="sideBar_container">
            <div className="buttonContainer">
           <button className="size_buttons" type="button" onClick={()=>handleProductSize('S')} >S</button>
           <button className="size_buttons" type="button" onClick={()=>handleProductSize('L')}>L</button>
           <button className="size_buttons" type="button" onClick={()=>handleProductSize('XL')}>XL</button>
           </div>
        </div>
    )
}
export default SideBar;