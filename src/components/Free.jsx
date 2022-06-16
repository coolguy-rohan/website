import React from "react";
import Card from "./Card";
import logo from "../assets/icon.png";
import super1 from "../assets/super1.png";
import release2 from "../assets/release2.png";
import style from "../components/style.css";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
          <img src={logo} alt="logo" height="60px" width="80px"/>
            {/* <img src="https://chinmayakumarbiswal.in/js/chinmaya1.png" alt="" height="80px" width="160px" /> */}
          </div>
          <h2 className="title">Free NFT for early birds</h2>
          <p className="description">
            Sign up today and you'll get a free NFT of your own character inside metaverse when we launch
          </p>
        </div>
      </div>
      {/* <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Gloop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
      </div> */}
    </div>
  );
}
