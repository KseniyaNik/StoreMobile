import React from "react";

export default function Item(props){
    return(
        <div className="item">
            <img src={"./images/"+props.item2.img} onClick={()=>props.onShowItem(props.item2)}/>
            <h2>{props.item2.title}</h2>
            <p>{props.item2.desc}</p>
            <b>{props.item2.price}</b>
            <div className="add-to-cart" onClick={()=>props.onAdd(props.item2)}>+</div>
        </div>
    )
}