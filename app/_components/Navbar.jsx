
import Link from 'next/link'
import Portfolio from '../portfolio/page';
import Services from '../services/page';
import Team from '../team/page';
import Contact from '../contact/page';


const NavBar = () => {
    return (
        <header className="container mx-auto lg:max-w-screen-lg 
        text-white bg-black body-font sticky top-3 right-2 left-2 rounded-full p-0.5 bg-gradient-to-r from-purple-600 via-pink-700 to-blue-600 z-10">
            <div className="flex items-center md:flex-row flex-col justify-between flex-wrap h-full w-full bg-black rounded-full px-5 py-1">
                <div className="flex title-font font-medium items-center text-gray-900">
                    <Link href="/">
                        <h1 className='text-2xl p-1 text-center font-semibold bg-gradient-to-r from-pink-600 to-blue-500 bg-clip-text text-transparent hover:bg-gradient-to-l transition-all duration-500'>
                        TechInnovate
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-row flex-nowrap items-center">
                    <Link href="/" className=" text-white block px-1 sm:px-2 py-1 text-xs sm:text-xs md:text-base font-medium hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:75%_4px] bg-no-repeat bg-bottom transition duration-500 " aria-current="page">Home</Link>
                    <Link href="/portfolio" className="text-white block px-2 py-1 text-xs sm:text-xs md:text-base font-medium hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:75%_4px] bg-no-repeat bg-bottom transition duration-500 ">Portfolio</Link>
                    <Link href="/services" className="text-white block px-1 sm:px-2 py-1 text-xs sm:text-xs md:text-base font-medium hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:75%_4px] bg-no-repeat bg-bottom transition duration-500 ">Services</Link>
                    <Link href="/team" className="text-white block px-1 sm:px-2 py-1 text-xs sm:text-xs md:text-base font-medium hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:75%_4px] bg-no-repeat bg-bottom transition duration-500 ">Team</Link>
                    <Link href="/contact" className="text-white block px-1 sm:px-2 py-1 text-xs sm:text-xs md:text-base font-medium hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:75%_4px] bg-no-repeat bg-bottom transition duration-500 ">Contact</Link>
                </nav>
                <div className='md:block hidden'>
                <button 
                    className="text-white bg-gradient-to-r from-blue-600 to-purple-600 border-0 
                    my-1 py-2 px-5 focus:outline-none rounded-3xl bg-white hover:bg-transparent hover:text-white hover:bg-gradient-to-l transition-all duration-500">
                    Hire Me
                </button>
                </div>
            </div>
        </header>
    )
}

export default NavBar;