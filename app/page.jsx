import Image from "next/image";
import Link from "next/link";
import heroImg from "../images/portrait-hero.webp";


export default function Home() {
  return (
    <main className="text-gray-400 h-full pt-10 ">
      <div className="container mx-auto flex px-5 py-7 md:flex-row flex-col items-center">
        <div className="lg:flex-grow text-center md:text-left md:w-1/2 lg:pr-24 md:pr-7 flex flex-col md:items-start mb-7 md:mb-0 items-center">
          <h1 className="title-font sm:text-3xl text-2xl mb-2 font-thin text-gray-300">Hello! I’m</h1>
          <h1 className="title-font sm:text-7xl text-4xl mb-4  font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Mark Bernato
          </h1>
          <h2 className="mb-8 leading-relaxed">FULL-STACK WEB DEVELOPER</h2>
          <p className="mb-8 text-left leading-relaxed border-l-2 border-gray-500 pl-4 w-44  ">
            I'm a full-stack web devloper and i work remotely from Morocco.
          </p>
        </div>
        <div className="max-w-80 sm:max-w-90 pb-0 px-4 pt-3 shadow-2xl from-purple-700 via-pink-700 to-blue-800 bg-gradient-to-t  rounded-2xl">
          <Image
            className="object-cover object-center" 
            src={heroImg}
            alt="hero"
          />
        </div>
      </div>
    </main>
  );
}



// <img 
// className="object-cover object-center rounded" 
// alt="hero" 
// src="https://dummyimage.com/720x600"
// />




// <button 
//   className="inline-flex text-white rounded text-lg">
//   Download CV
// </button>