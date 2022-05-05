import React from "react";
import contact from '../assets/contactme.png'

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact">
      <div className="container mx-auto flex justify-between max-w-screen-lg px-10 py-10 md:py-14 md:flex-row flex-col items-center">
        <div className="md:w-2/5 w-4/5">
          <img
              className=""
              alt="contactme"
              src={contact}
          />
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/2 md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-blue-carolina sm:text-4xl text-3xl mb-1 font-medium">
            Contact Me!
          </h2>
          <p className="leading-relaxed mb-5 text-black/60">
            I am available for Freelance Projects, Collaboration, Intership Opportunities.  Use the form to inquire about rates and availability, or email me directly.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-blue-carolina text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-blue-carolina text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-blue-carolina text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-carolina border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}