import React from "react";
import Head from "./Head";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <div style={{ minHeight: "100vh" }}>Homepage</div>
      <Head />
      <Footer />
    </div>
  );
};

export default Home;
