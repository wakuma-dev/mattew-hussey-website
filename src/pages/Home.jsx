import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/main/home/Hero";
import About from "../components/main/About";
import Testimonals from "../components/main/Testimonals";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Matthew Hussey | Home</title>
        <meta
          name="description"
          content="Official style-inspired landing page built with React."
        />
      </Helmet>

      <Hero />
      <About />
      <Testimonals />
    </main>
  );
};

export default Home;
