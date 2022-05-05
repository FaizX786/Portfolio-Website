import logo from "../assets/logo.png"
export default function Navbar() {
    return (
      <header className="bg-white md:sticky top-0 z-10 shadow-lg">
        <div className="container mx-auto md:px-10 flex flex-wrap flex-col md:flex-row items-center py-2 md:py-0">
          <a className="font-medium text-white md:mb-0">
            <a href="#about" className="text-xl">
              <img src={logo} className="w-14"/>
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-2 rounded-full md:border-gray-100 flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 hover:underline-offset-8 hover:rotate-6 hover:underline hover:decoration-2 hover:decoration-blue-carolina focus:underline-offset-8 focus:underline focus:decoration-2 focus:decoration-blue-carolina transition duration-300 ease-in-out">
              Projects
            </a>
            <a href="#skills" className="mr-5 hover:underline-offset-8 hover:rotate-6 hover:underline hover:decoration-2 hover:decoration-blue-carolina focus:underline-offset-8 focus:underline focus:decoration-2 focus:decoration-blue-carolina transition duration-300 ease-in-out">
              Skills
            </a>
            <a href="#testimonials" className="mr-5 hover:underline-offset-8 hover:rotate-6 hover:underline hover:decoration-2 hover:decoration-blue-carolina focus:underline-offset-8 focus:underline focus:decoration-2 focus:decoration-blue-carolina transition duration-300 ease-in-out">
              Blog
            </a>
            <a href="#testimonials" className="mr-5 hover:underline-offset-8 hover:rotate-6 hover:underline hover:decoration-2 hover:decoration-blue-carolina focus:underline-offset-8 focus:underline focus:decoration-2 focus:decoration-blue-carolina transition duration-300 ease-in-out">
              Art & Design
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center font-medium bg-blue-carolina text-snow border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded-full text-base mt-4 md:mt-0">
            Hire Me!
          </a>
        </div>
      </header>
    );
  }