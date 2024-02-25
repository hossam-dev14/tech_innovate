
const Contact = () => {
    return (
        <section className="text-gray-300 body-font">
            <div className="container mx-auto mt-20 px-5 pt-26 pb-14 lg:max-w-screen-lg">
                <div className="mb-16  text-center">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl tracking-tight font-medium title-font pb-2 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                    Contact me
                    </h2>
                    <p className="text-xl leading-relaxed text-gray-300 ml-4">Get in touch with me</p>
                </div>

                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap flex-col sm:flex-row  -m-2">
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-200 ml-4">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-blue-500 bg-opacity-50 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-gray-100 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-200 ml-4">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-blue-500  bg-opacity-50 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                        </div>
                        <div className="p-2 mt-5 w-full ">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-200 ml-4">Message</label>
                                <textarea id="message" name="message" className="w-full bg-blue-500 bg-opacity-50 rounded-xl border focus:bg-gray-300 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "></textarea>
                            </div>

                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white border-0 py-2 px-8 my-4 hover:bg-indigo-600 text-lg
                             bg-gradient-to-r from-blue-600 to-purple-600
                                focus:outline-none rounded-3xl hover:bg-transparent shadow-xl hover:text-white hover:bg-gradient-to-l transition-all duration-500
                            ">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    );
}

export default Contact;
  