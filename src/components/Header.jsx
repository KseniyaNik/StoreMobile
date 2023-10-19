import React, { useState } from "react";
import {IoTrashBinSharp} from "react-icons/io5";

export default function Header(){
    let[cartOpen, setCartOpen] = useState(false);
    return(
        <header>
        <div>
        <span className="logo">ElectroNik</span>
        </div>
        <ul className="nav">
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Личный кабинет</li>
            <li>Скачать прайс</li>
        </ul>
        <IoTrashBinSharp onClick={()=>setCartOpen(cartOpen=!cartOpen)}className={`shop-cart-button ${cartOpen && 'active'}`}/>
        <div className="presentation">
            <img src=""/>
        </div>
        
        </header>
    );
}