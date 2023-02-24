import React from "react";
import { useNavigate } from "react-router-dom";
import Memehead from "../images/Logo.png";


export default function Header(){
    const navigate = useNavigate();
  function handleClick(){
    navigate("/login")

  }
    return(
        <header className="Haider">
            <img src={Memehead} className="haider_img" alt="top_img"/>
            
            <button onClick={handleClick} className="haider_login" >
                Login_for_Meme
            </button>
        </header>
    )
}
