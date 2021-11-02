import React from "react";
import Banner from "../components/Banner/Banner";
import Carousel from "../components/Banner/Carousel";
import CoinsTable from "../components/CoinsTable";

function HomePage() {
  return (
    <>
      {/* <Banner /> */}
      <Carousel />
      <CoinsTable />
    </>
  );
}

export default HomePage;
