import React from "react";

export default function Projects() {
  return (
    <section id="projects">
        <div className="max-w-screen-lg flex flex-col px-10 py-10 md:py-14 mx-auto ">
            <h1 className="text-2xl md:text-3xl mb-5 md:mb-8 text-center font-semibold text-blue-carolina">My Recent Works</h1>
            <h2 className="text-base md:text-xl mb-6 md:mb-20 text-center font-light">Here are a few design projects I've worked on recently. Want to see more? <a href="#" className="text-blue-500 font-medium">Email me.</a></h2>
            <div class="container mx-auto mb-6 md:mb-20 space-y-2 lg:space-y-0 md:gap-3 md:grid md:grid-cols-2 lg:gap-3 lg:grid lg:grid-cols-3">
                <div class="max-w-xs mx-auto hover:shadow-2xl ">
                    <img className="rounded-md" src="https://files.catbox.moe/xbhy44.png"
                        alt="image"/>
                </div>
                <div class="max-w-xs mx-auto hover:shadow-2xl ">
                    <img className="rounded-md" src="https://source.unsplash.com/8G-aH0QJbl4/500x400"
                        alt="image"/>
                </div>
                <div class="max-w-xs mx-auto hover:shadow-2xl ">
                    <img className="rounded-md" src="https://files.catbox.moe/xbhy44.png"
                        alt="image"/>
                </div>
                <div class="max-w-xs mx-auto hover:shadow-2xl ">
                    <img className="rounded-md" src="https://files.catbox.moe/xbhy44.png"
                        alt="image"/>
                </div>
                <div class="max-w-xs mx-auto hover:shadow-2xl ">
                    <img className="rounded-md" src="https://files.catbox.moe/xbhy44.png"
                        alt="image"/>
                </div>
                <div class="max-w-xs mx-auto hover:shadow-2xl ">
                    <img className="rounded-md" src="https://files.catbox.moe/xbhy44.png"
                        alt="image"/>
                </div>
            </div>
            <a href="https://github.com/FaizX786" class="mx-auto bg-blue-carolina hover:bg-blue-600 text-snow font-medium py-2 px-4 rounded-full"><i className="fa fa-github pr-2" aria-hidden="true"></i>See More on <strong>GitHub</strong></a>
        </div>
    </section>
  );
}