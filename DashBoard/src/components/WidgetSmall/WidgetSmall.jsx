import React, { useState, useEffect } from 'react'
import "./WidgetSmall.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSmall() {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3200/api/users")
      .then((data) => data.json())
      .then((data) => setUserData(data.data))

  }, [])

  const lastUser = userData.find(e => e.id = Math.max(...userData.map(elements => (elements.id))))

  console.log(lastUser)
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
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">{lastUser.fullName}</span>
            <span className="widgetSmallUserTitle">{lastUser.email}</span>
          </div>
          <span className="widgetSmallUserTitle">{lastUser.mobilePhone}</span>
        </li>
      </ul>
    </div>
  );
}
