
import React, { useState, useEffect } from 'react'
import './FeaturedInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {

  const [userData, setUserData] = useState([])
  const [productData, setProductData] = useState([])
  const [addressData, setAddressData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3200/api/users")
      .then((data) => data.json())
      .then((data) => setUserData(data.data))

  }, [])

  useEffect(() => {
    fetch("http://localhost:3200/api/products")
      .then((data) => data.json())
      .then((data) => setProductData(data.data))

  }, [])

  useEffect(() => {
    fetch("http://localhost:3200/api/users/address")
      .then((data) => data.json())
      .then((data) => setAddressData(data.data))

  }, [])


  const userCount = userData.length
  const productCount = productData.length
  const addressCount = addressData.length
 




  return (
    <div className='featured'>
      <div className="featuredItems">
        <span className="featuredTitle">Cantidad Usuarios</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{userCount}</span>
          <span className="featuredMoneyRate">  11.5 <ArrowUpwardIcon className='featureIcon'/> </span>
        </div>
        <span className="featuredSub">Comparado con el mes anterior</span>
      </div>
      <div className="featuredItems">
        <span className="featuredTitle">Cantidad de Productos</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{productCount}</span>
          <span className="featuredMoneyRate">  16.5 <ArrowUpwardIcon className='featureIcon'/> </span>
        </div>
        <span className="featuredSub">Comparado con el mes anterior</span>
      </div>
      <div className="featuredItems">
        <span className="featuredTitle">Cantidad de Direcciones</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{addressCount}</span>
          <span className="featuredMoneyRate">  5.5 <ArrowUpwardIcon className='featureIcon'/> </span>
        </div>
        <span className="featuredSub">Comparado con el mes anterior</span>
      </div>
    </div>
  )
}
