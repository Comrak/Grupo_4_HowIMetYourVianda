import React from 'react'
import './FeaturedInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItems">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.523</span>
          <span className="featuredMoneyRate">  -11.5 <ArrowDownwardIcon className='featureIcon negative'/> </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
      <div className="featuredItems">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.523.000</span>
          <span className="featuredMoneyRate">  16.5 <ArrowUpwardIcon className='featureIcon'/> </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
      <div className="featuredItems">
        <span className="featuredTitle">Costs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1.523.000</span>
          <span className="featuredMoneyRate">  16.5 <ArrowUpwardIcon className='featureIcon'/> </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
    </div>
  )
}
