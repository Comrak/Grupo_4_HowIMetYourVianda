import React, { useState, useEffect } from 'react'
import "./LastProduct.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSmall() {

  const [productData, setUserData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3200/api/products")
      .then((data) => data.json())
      .then((data) => setUserData(data.data))

  }, [])

  const lastProduct= productData.find(e => e.id = Math.max(...productData.map(elements => (elements.id))))
  console.log(lastProduct)
  if(lastProduct !== undefined){
    return (
      <div className="widgetSmall">
        <span className="widgetSmallTitle">Ultimo producto</span>
        <ul className="widgetSmallList">
          <li className="widgetSmallListItem">
            <img
              src="https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-t.jpg"
              alt=""
              className="WidgetSmallImage"
            />
            <div className="widgetSmallUser">
              <span className="widgetSmallUserName">Nombre: {lastProduct.name}</span>
              <span className="widgetSmallUserTitle">Precio: {lastProduct.price}</span>
            </div>
            <span className="widgetSmallUserTitle">Ingredientes: {lastProduct.tags}</span>
          </li> 
        </ul>
      </div>
    );
  }else{
    return (
      <div className="widgetSmall">
        <span className="widgetSmallTitle">Nuevos Miembros</span>
        <ul className="widgetSmallList">
          <li className="widgetSmallListItem">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="WidgetSmallImage"
            />
            <p>no pude encontrar un usuario</p>
          </li> 
        </ul>
      </div>
    );
  }
  

}