import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import {faCode, faDatabase, faPhotoFilm} from '@fortawesome/free-solid-svg-icons';
export default function Skills() {
    return (
      <section id="skills">
        <div class="max-w-screen-lg flex flex-col px-10 py-10 md:py-14 mx-auto">
            <h1 className="text-2xl md:text-3xl mb-5 md:mb-8 text-center font-semibold text-blue-carolina">Skills & Technologies</h1>
            <h2 className="text-base md:text-xl mb-6 md:mb-20 text-center font-light">Here are few of the Technologies i use in all my Projects.. & Learning</h2>
            <div class="flex flex-wrap lg:w-full justify-center space-x-5 space-y-5">
                <div class="inline-flex items-center bg-white leading-none text-red-crayola rounded-full p-2 shadow text-teal text-sm">
                    <span class="inline-flex bg-red-crayola text-white rounded-full px-8 py-2 md:px-10 md:py-5 justify-center items-center"><FontAwesomeIcon icon={faHtml5} size="2x" /></span>
                    <span class="inline-flex px-5 text-xl md:text-2xl font-semibold md:font-semibold">HTML & CSS</span>
                </div>
                <div class="inline-flex items-center bg-white leading-none text-red-crayola rounded-full p-2 shadow text-teal text-sm">
                    <span class="inline-flex bg-red-crayola text-white rounded-full px-8 py-2 md:px-10 md:py-5 justify-center items-center"><FontAwesomeIcon icon={faJs} size="2x" /></span>
                    <span class="inline-flex px-5 text-xl md:text-2xl font-semibold md:font-semibold">Javascript</span>
                </div>
                <div class="inline-flex items-center bg-white leading-none text-red-crayola rounded-full p-2 shadow text-teal text-sm">
                    <span class="inline-flex bg-red-crayola text-white rounded-full px-8 py-2 md:px-10 md:py-5 justify-center items-center"><FontAwesomeIcon icon={faReact} size="2x" /></span>
                    <span class="inline-flex px-5 text-xl md:text-2xl font-semibold md:font-semibold">React Js</span>
                </div>
                <div class="inline-flex items-center bg-white leading-none text-red-crayola rounded-full p-2 shadow text-teal text-sm">
                    <span class="inline-flex bg-red-crayola text-white rounded-full px-8 py-2 md:px-10 md:py-5 justify-center items-center"><FontAwesomeIcon icon={faDatabase} size="2x" /></span>
                    <span class="inline-flex px-5 text-xl md:text-2xl font-semibold md:font-semibold">Data Structures</span>
                </div>
                <div class="inline-flex items-center bg-white leading-none text-red-crayola rounded-full p-2 shadow text-teal text-sm">
                    <span class="inline-flex bg-red-crayola text-white rounded-full px-8 py-2 md:px-10 md:py-5 justify-center items-center"><FontAwesomeIcon icon={faPhotoFilm} size="2x" /></span>
                    <span class="inline-flex px-5 text-xl md:text-2xl font-semibold md:font-semibold">Photoshop CC</span>
                </div>
                <div class="inline-flex items-center bg-white leading-none text-red-crayola rounded-full p-2 shadow text-teal text-sm">
                    <span class="inline-flex bg-red-crayola text-white rounded-full px-8 py-2 md:px-10 md:py-5 justify-center items-center"><FontAwesomeIcon icon={faCss3} size="2x" /></span>
                    <span class="inline-flex px-5 text-xl md:text-2xl font-semibold md:font-semibold">Tailwind CSS</span>
                </div>
                <div class="inline-flex items-center bg-white leading-none text-red-crayola rounded-full p-2 shadow text-teal text-sm">
                    <span class="inline-flex bg-red-crayola text-white rounded-full px-8 py-2 md:px-10 md:py-5 justify-center items-center"><FontAwesomeIcon icon={faCode} size="2x" /></span>
                    <span class="inline-flex px-5 text-xl md:text-2xl font-semibold md:font-semibold">C++</span>
                </div>
            </div>
        </div>
      </section>
    );
  }