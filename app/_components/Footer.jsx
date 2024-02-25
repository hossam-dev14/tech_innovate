import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-gray-300 body-font static bottom-0 right-0 left-0">
        <div className="container pb-14 lg:max-w-screen-lg px-5 py-8 mt-3 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="/" 
            className="flex title-font font-medium items-center md:justify-start justify-center bg-gradient-to-r from-pink-600 to-blue-500 bg-clip-text text-transparent hover:bg-gradient-to-l transition-all duration-500">
                <span className="ml-3 text-xl">Tech Innovate</span>
            </Link>
                <Link href="https://github.com/hossam-dev14"
                    className="text-gray-300 text-sm text- ml-1 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-1 sm:mt-0 mt-4" 
                    rel="noopener noreferrer" 
                    target="_blank">
                    © 2024 Created by Hossam-dev14
                </Link>              
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start">
                    <Link href="#" className="ml-3  p-2 hover:shadow-lg rounded-full text-3xl text-center font-extrabold hover:bg-gradient-to-l bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white transition duration-500 ">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                    </Link>
                    <Link href="#" className="ml-3  p-2 hover:shadow-lg rounded-full text-3xl text-center font-extrabold hover:bg-gradient-to-l bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white transition duration-500 ">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </Link>
                    <Link href="#" className="ml-3  p-2 hover:shadow-lg rounded-full text-3xl text-center font-extrabold hover:bg-gradient-to-l bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white transition duration-500 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.86 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.5.46-3.03-1.2-3.03-1.2-.41-1.04-1-1.32-1-1.32-.82-.55.06-.54.06-.54.91.06 1.39.94 1.39.94.81 1.39 2.13.99 2.65.76.08-.58.31-.98.56-1.2-1.97-.22-4.04-.99-4.04-4.42 0-.98.35-1.79.94-2.42-.09-.22-.41-1.15.09-2.39 0 0 .76-.24 2.5.92.72-.2 1.49-.3 2.26-.3.77 0 1.54.1 2.26.3 1.73-1.15 2.5-.92 2.5-.92.5 1.24.18 2.17.09 2.39.59.63.94 1.44.94 2.42 0 3.44-2.08 4.2-4.06 4.42.32.28.61.82.61 1.65 0 1.19-.01 2.15-.01 2.45 0 .27.18.58.69.48C19.14 20.16 22 16.41 22 12c0-5.52-4.48-10-10-10z"></path>
                        </svg>              
                    </Link>
                </span>
            </div>
    </footer>
  )
}


export default Footer;