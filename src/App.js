import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItems from "./components/ShowFullItem";
import ShowFullItem from "./components/ShowFullItem";
import axios from "axios";

export default function App() {
  const [orders, setOrders]=useState([]);
  const [currentItems,setCurrenItems]=useState([]);
  const [showFullItem,setShowFullItem]=useState(false);
  const [fullItem, setFullItem]=useState({});
  const [items,setItems]=useState([]);

    useEffect(()=>{
      axios
      .get("http://localhost:3001/items")
      .then((response)=>{
        setItems(response.data);
        chooseCategory("all");
        setCurrenItems(response.data);
      })
      .catch((error)=>{
        console.error("Ошибка при загрузке данных",error);
      });
    }, [items]);

    const addToOrder=(item3)=>{
    // if(!orders.some((el)=>el.id===item3.id)){  //однозначно равно
     // setOrders([...orders,item3]);//... - множество(массив)
     // }
     setOrders([...orders,item3]);
    };

    const deleteOrder=(id)=>{
      setOrders(orders.filter((el)=>el.id !== id));
    };

    const chooseCategory=(category)=>{
      if(category==='all'){
        setCurrenItems(items);
      }
      else{
        setCurrenItems(items.filter((el)=>el.category===category));
      }
    };

    const onShowItem=(item)=>{
      setFullItem(item);
      setShowFullItem(!showFullItem);
    }

  return (
    <div className="wrapper">
    <Header orders={orders} onDelete={deleteOrder}/>
    <Categories chooseCategory={chooseCategory}/>
    <Items allItems={currentItems} onShowItem={onShowItem} onAdd={addToOrder}/>
    {showFullItem && <ShowFullItem  onShowItem={onShowItem} onAdd={addToOrder} item={fullItem}/>}
    <Footer/>
    </div>
  );

}
