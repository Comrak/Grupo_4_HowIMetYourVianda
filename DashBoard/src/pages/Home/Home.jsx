import React from "react";
import Charts from "../../components/Charts/Charts";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import { userData } from "../../dummydata";
import WidgetSmall from "../../components/WidgetSmall/WidgetSmall";
import LastProduct from "../../components/LastProduct/LastProduct";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      {/* <Charts
        data={userData}
        title="User Analytics"
        grid
        datakey="Active User"
      /> */}
      <div className="homeWidget">
        <WidgetSmall />
        <LastProduct />
      </div>
    </div>
  );
}
