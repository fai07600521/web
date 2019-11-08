import React from "react";
import Carousel from "nuka-carousel";
import { FaBeer } from "react-icons/fa";
import ProductHowItWorks from "./components/ProductHowItWorks";
import Footer from "./components/Footer";
import ProductSmokingHero from "./components/ProductSmokingHero";
import ProductHeroLayout from "./components/ProductHeroLayout";
import ValueAdventage from "./components/ValueAdventage";
import ProductCTA from "./components/ProductCTA";
import Snackbar from "./components/Snackbar";
import Services from "./components/services";
export default class LandingPage extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#424242" }}>
        <Carousel>
          <img src={require("./img/1.png")} />
          <img src={require("./img/22.png")} />
          <img src={require("./img/33.png")} />
        </Carousel>
        <Services/>
        <ValueAdventage/>
        <ProductHowItWorks />
        <ProductCTA />
        <Snackbar />
        <ProductSmokingHero />
        <Footer />
      </div>
    );
  }
}
