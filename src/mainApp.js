import React,{useEffect, useState} from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, SideBar } from './component';
import HomeScreen from "./app/homeScreen";

const MainApp = () => {
    const [selectedSize, setSelectedSize] = useState('S');
    const handleProductSize = (size) => {
        if(selectedSize !== size){
            setSelectedSize(size)
        }
    }
    return ( 
        <>
        <Header />
        <div className="flex">
            <SideBar handleProductSize={handleProductSize} />
            <HomeScreen selectedSize={selectedSize} />
        </div> 
        </>
    )
}
export default MainApp;