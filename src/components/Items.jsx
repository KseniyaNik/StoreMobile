import React from "react";
import Item from "./Item";

export default function Items(props){
    return(
        <main>
            {props.allItems.map(el=>(
                <Item key={el.id} item2={el} onAdd={props.onAdd} onShowItem={props.onShowItem}/>
                //<h1>{el.title}</h1>
            ))}
        </main>
    )
}