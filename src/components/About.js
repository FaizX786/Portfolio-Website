import React from "react";
import img from "../assets/hero-img.png";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex justify-between max-w-screen-lg px-10 py-10 md:py-28 md:flex-row flex-col items-center">
        {/* Heading */}
        <div className="text-center md:text-left">
          <h2 className="mt-6 md:mt-8 text-lg md:text-2xl lg:text-3xl font-extralight ">Hello I am</h2>
          <div className="mt-6 md:mt-8">
            <h1 className="inline-block font-semibold text-blue-carolina text-3xl md:text-4xl lg:text-7xl">Faiz </h1>
            <h1 className="ml-4 inline-block font-light text-black text-3xl md:text-4xl lg:text-7xl">Iqbal</h1>
          </div>
          <h3 className="mt-6 md:mt-8 text-sm md:text-lg lg:text-xl"><strong>Code | Design</strong> | Writing | Research</h3>
          <div className="mt-6 md:mt-11 mb-10 flex justify-start">
            <a
              href="#contact"
              className="inline-flex rounded-full text-lg text-blue-carolina font-medium border-solid border-2 border-blue-carolina py-1 px-6 focus:outline-none hover:text-snow hover:bg-blue-carolina">
              Resume
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-snow bg-blue-carolina rounded-full py-1 px-6 focus:outline-none hover:bg-blue-400 text-lg">
              Hire me!
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="max-w-sm lg:w-2/5 md:w-1/3 w-4/5">
        <img
            className=""
            alt="hero"
            src={img}
          />
        </div>
      </div>
    </section>
  );
}