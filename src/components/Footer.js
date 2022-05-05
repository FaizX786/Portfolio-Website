import { faDribbble, faGithub, faInstagram, faLinkedin, faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBullseye, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Footer(){
    return(
        <footer className="text-center bg-gray-900 text-snow">
            <div className='max-w-screen-lg flex flex-col px-10 py-10 md:py-14 mx-auto'>
                <h1 className='text-snow/30'>You could never convince a monkey to give you a banana by promising him limitless bananas after death in monkey heaven.” “How do you cause people to believe in an imagined order such as Christianity, democracy or capitalism? First, you never admit that the order is imagined.</h1>
                <div className="container px-6 pt-6">
                    <div className="flex justify-center mb-6">
                        <a href="#!" type="button" className="rounded-full border-2 border-snow/20 leading-normal uppercase hover:bg-snow hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FontAwesomeIcon icon={faTwitter} size="x" className='pt-2 '/>
                        </a>

                        <a href="https://github.com/FaizX786" type="button" className="rounded-full border-2 border-snow/20 leading-normal uppercase hover:bg-snow hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FontAwesomeIcon icon={faGithub} size="x" className='pt-2'/>
                        </a>

                        <a href="https://www.linkedin.com/in/faiz-iqbal-4b5097203/" type="button" className="rounded-full border-2 border-snow/20 leading-normal uppercase hover:bg-snow hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FontAwesomeIcon icon={faLinkedin} size="x" className='pt-2'/>
                        </a>

                        <a href="https://www.instagram.com/faiz_iqbal7/" type="button" className="rounded-full border-2 border-snow/20 leading-normal uppercase hover:bg-snow hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FontAwesomeIcon icon={faInstagram} size="x" className='pt-2'/>            
                        </a>

                        <a href="https://www.reddit.com/user/TechArtist7" type="button" className="rounded-full border-2 border-snow/20 leading-normal uppercase hover:bg-snow hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FontAwesomeIcon icon={faReddit} size="x" className='pt-2'/>        
                        </a>
                    </div>
                </div>

                <div className="mx-auto rounded-lg text-center p-4 bg-black text-snow/50">
                    Handcrafted by me © |
                    <a className="text-whitehite" href="https://tailwind-elements.com/"> Faiz Iqbal | 2022</a>
                </div>
            </div>
        </footer>
    );
}