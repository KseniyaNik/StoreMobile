import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItems from "./components/ShowFullItem";
import ShowFullItem from "./components/ShowFullItem";

export default function App() {
  const [orders, setOrders]=useState([]);
  const [currentItems,setCurrenItems]=useState([]);
  const [showFullItem,setShowFullItem]=useState(false);
  const [items,setItems]=useState([
    {
      id:1, //идентификация
      title:'iPhone 15 Pro Max', //наименование товара
      img:'iPhone 15 Pro Max.png', //картинка
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', //текст о товаре (описание)
      category:'Apple',// категория товара
      price:'1000',//стоимость товара (только числа)
    },
    {
      id:2,
      title:'iPhone 15',
      img:'iPhone 15.png', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Apple',
      price:'800',
    },
    {
      id:3,
      title:'iPhone 11',
      img:'iPhone 11.png', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Apple',
      price:'400',
    },
    {
      id:4,
      title:'Honor 50',
      img:'Honor 50.png', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Honor',
      price:'200',
    },
    {
      id:5,
      title:'Redmi Note 12',
      img:'Redmi Note 12.png', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Xiaomi',
      price:'170',
    },
    {
      id:6,
      title:'Redmi Note 13 Pro',
      img:'Redmi Note 13 Pro.png', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Xiaomi',
      price:'200',
    },
    {
      id:7,
      title:'Samsung Galaxy A54',
      img:'Samsung Galaxy A54.png', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Samsung',
      price:'350',
    },
    {
      id:8,
      title:'Honor 10',
      img:'Honor 10.png', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Honor',
      price:'90',
    },
    {
      id:9,
      title:'Realme 11 PRO',
      img:'Realme 11 PRO.jpg', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Realme',
      price:'200',
    },
    {
      id:10,
      title:'Realme C53',
      img:'Realme C53.png', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Realme',
      price:'160',
    }
]);

    useEffect(()=>{
      setCurrenItems(items);
    }, [items])

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
      setShowFullItem(!showFullItem);
    }

  return (
    <div className="wrapper">
    <Header orders={orders} onDelete={deleteOrder}/>
    <Categories chooseCategory={chooseCategory}/>
    <Items allItems={currentItems} onShowItem={onShowItem} onAdd={addToOrder}/>
    {showFullItem && <ShowFullItem/>}
    <Footer/>
    </div>
  );

}
