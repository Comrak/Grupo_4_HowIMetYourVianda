import React, { useState, useEffect } from 'react'
import "./WidgetSmall.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {Avatar} from "@mui/material";

export default function WidgetSmall() {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3200/api/users")
      .then((data) => data.json())
      .then((data) => setUserData(data.data))

  }, [])

  const lastUser = userData.find(e => e.id = Math.max(...userData.map(elements => (elements.id))))

  if(lastUser != undefined){
    return (
      <div className="widgetSmall">
        <span className="widgetSmallTitle">Nuevos Miembros</span>
        <ul className="widgetSmallList">
          <li className="widgetSmallListItem">
            <Avatar
              src={`http://localhost:3200/img/users/${lastUser.avatar}`}
              alt=""
              className="WidgetSmallImage"
            />
            <div className="widgetSmallUser">
              <span className="widgetSmallUserName">Nombre: {lastUser.fullName}</span>
              <span className="widgetSmallUserTitle">Email: {lastUser.email}</span>
            </div>
            <span className="widgetSmallUserTitle">Telefono: {lastUser.mobilePhone}</span>
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
