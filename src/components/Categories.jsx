import React from "react";

export default function Categories(props){
    const categories=[
        {
            key:'all',
            name:'Все'
        },
        {
            key:'Apple',
            name:'Apple'
        },
        {
            key:'Honor',
            name:'Honor'
        },
        {
            key:'Xiaomi',
            name:'Xiaomi'
        },
        {
            key:'Samsung',
            name:'Samsung'
        },
        {
            key:'Realme',
            name:'Realme'
        }
    ];
    return(
        <div className="categories">
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}