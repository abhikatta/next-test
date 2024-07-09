import Feed from "@components/Feed";
import React from "react";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text">Discover & Share</h1>
    <br className="max-md:hidden" />
    <span className="orange_gradient head_text text-center">
      AI-Powered Prompts
    </span>
    <p className="desc">Prompotia is open source AI prompting tool.</p>
    <Feed />
  </section>
);

export default Home;
