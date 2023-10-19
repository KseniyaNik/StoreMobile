import React, { useState } from "react";
import {IoTrashBinSharp} from "react-icons/io5";
import Order from "./Order";

export default function Header(props){
    let[cartOpen, setCartOpen] = useState(false);
    return(
        <header>
        <div>
        <span className="logo">ElectroNik</span>
        <ul className="nav">
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Личный кабинет</li>
            <li>Скачать прайс</li>
        </ul>
        <IoTrashBinSharp onClick={()=>setCartOpen(cartOpen=!cartOpen)}className={`shop-cart-button ${cartOpen && 'active'}`}/>

        {cartOpen && (
            <div className="shop-cart">
                {props.orders.map(el=>(
                    <Order key={el.id} item={el}/>
                ))}
            </div>
        )}
        </div>
        <div className="presentation">
            <img src=""/>
        </div>
        
        </header>
    );
}