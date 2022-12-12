import { Link } from "react-router-dom";
import React from "react";


const navbar = () => {
    return (
    <div className="navbar">
        <Link to={"/"}> Home </Link> 
        <Link to={"/about"}> About </Link> 
        <Link to={'/productos'}> Products </Link> 
        <Link to={'/api'}> Api</Link> 
        <Link to={'/formulario'}> Form </Link> 
    </div>


    )
}


export default navbar 