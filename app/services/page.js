import Image from "next/image";

import devIcon from "../../images/icons/dev.webp";
import graphicIcon from "../../images/icons/graphic.webp";
import uiUxIcon from "../../images/icons/ui-ux.webp";


const Services  = () => {

    return (
        <section className="text-gray-300 body-font">
          <div className="container mx-auto mt-20 px-5 pt-26 pb-14 lg:max-w-screen-lg">
            <div className="mb-16  text-center">
                <h2 className="text-5xl sm:text-6xl md:text-7xl tracking-tight font-medium title-font  pb-2 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                    My Services
                </h2>
            </div>
                
                <div className="flex items-center lg:w-3/5 mx-auto py-7 px-4 mb-10 sm:flex-row flex-col shadow-xl ">
                    <div className="sm:w-32 sm:h-32 h-36 w-36 sm:mr-10 inline-flex items-center justify-center rounded-full from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r flex-shrink-0">
                        <Image src={graphicIcon} className="p-1" alt="graphic design" width={80} height={80} />
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-white text-lg title-font font-medium mb-2">
                        Graphic Design</h2>
                        <p className="leading-relaxed text-base">Etharum quidem rerum facilis est expedita distinctioam libero tempore, cum soluta nobis est eligendi optio cumque..</p>
                        <a href="#" className="mt-3 text-pink-400 inline-flex items-center">READ MORE
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex items-center lg:w-3/5 mx-auto py-7 px-4 mb-10 sm:flex-row flex-col shadow-xl">
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-white text-lg title-font font-medium mb-2">UX/UI Design</h2>
                        <p className="leading-relaxed text-base">Etharum quidem rerum facilis est expedita distinctioam libero tempore, cum soluta nobis est eligendi cumque.</p>
                        <a href="#" className="mt-3 text-pink-400 inline-flex items-center">READ MORE
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                    <div className="sm:w-32 sm:h-32 h-36 w-36 sm:mr-10 inline-flex items-center justify-center rounded-full from-blue-600 via-pink-600 to-purple-600 bg-gradient-to-r flex-shrink-0 mt-6">
                        <Image src={uiUxIcon} className="p-1" alt="ui-ux design" width={80} height={80} />
                    </div>
                </div>

                <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col py-7 px-4 mb-10  shadow-xl">
                    <div className="sm:w-32 sm:h-32 h-36 w-36 sm:mr-10 inline-flex items-center justify-center rounded-full from-pink-600 via-purple-600 to-blue-600 bg-gradient-to-r flex-shrink-0">
                        <Image src={devIcon} className="p-1" alt="developer" width={80} height={80} />
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-white text-lg title-font font-medium mb-2">Development</h2>
                        <p className="leading-relaxed text-base">Nemo enim ipsam voluptatem quia volupta sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.</p>
                        <a href="#" className="mt-3 text-pink-400 inline-flex items-center">READ MORE
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services ;
  