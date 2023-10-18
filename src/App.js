import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Items from "./components/Items";

export default function App() {
  const [items,setItems]=useState([
    {
      id:1, //идентификация
      title:'iPhone 15 Pro Max', //наименование товара
      img:'iPhone 15 Pro Max.jpg', //картинка
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', //текст о товаре (описание)
      category:'Apple',// категория товара
      price:'1000',//стоимость товара (только числа)
    },
    {
      id:2,
      title:'iPhone 15',
      img:'iPhone 15.jpg', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Apple',
      price:'800',
    },
    {
      id:3,
      title:'iPhone 11',
      img:'iPhone 11.jpg', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Apple',
      price:'400',
    },
    {
      id:4,
      title:'Honor 50',
      img:'Honor 50.jpg', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Honor',
      price:'200',
    },
    {
      id:5,
      title:'Redmi Note 12',
      img:'Redmi Note 12.jpg', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Xiaomi',
      price:'170',
    },
    {
      id:6,
      title:'Redmi Note 13 Pro',
      img:'Redmi Note 13 Pro.jpg', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Xiaomi',
      price:'200',
    },
    {
      id:7,
      title:'Samsung Galaxy A54',
      img:'Samsung Galaxy A54.avif', 
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
      img:'Realme C53.jpg', 
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
      category:'Realme',
      price:'160',
    }]);

  return (
    <div className="wrapper">
    <Header/>
    <Items allItems={items}/>
    <Footer/>
    </div>
  );
}