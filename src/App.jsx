import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Started from "./components/Started";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <Layout />
      <Features />
      <Started />
      <Faq />
      <Subscribe /> <Footer />
    </>
  );
}

export default App;
