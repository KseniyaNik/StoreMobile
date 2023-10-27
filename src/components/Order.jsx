import React from "react";
import {IoTrashBinSharp} from "react-icons/io5";

export default function Order(props){
    return(
        <div className="item">
            <img src={"./images/"+props.item.img}/>
            <h2>{props.item.title}</h2>
            <b>{props.item.price}</b>
            <IoTrashBinSharp className="delete-icon" onClick={()=>props.onDelete(props.item.id)}/>
        </div>
    )
}