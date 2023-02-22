import React from "react";
import Charts from "../../components/Charts/Charts";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import { userData } from "../../dummydata";
import WidgetSmall from "../../components/WidgetSmall/WidgetSmall";
import WidgetLarge from "../../components/WidgetLarge/WidgetLarge";

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
        <WidgetLarge />
      </div>
    </div>
  );
}
