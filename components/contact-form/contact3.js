export default function Contact3() {
    return (
        <div className="px-8 py-8 md:py-16">
            <h1 className="text-4xl md:text-5xl leading-tight font-bold text-center">Registration</h1>

            <div className="w-full md:w-[90vw] lg:w-[60vw] space-y-4 mx-auto my-4">
                <div className="flex flex-row pt-4">
                    <div className="flex-none bg-indigo-400 rounded-full w-5 h-5"></div>
                    <div className="flex-1 grow bg-indigo-400 w-[25vw] h-1 m-auto"></div>
                    <div className="flex-none bg-indigo-400 rounded-full w-5 h-5"></div>
                    <div className="flex-1 grow bg-indigo-200 w-[25vw] h-1 m-auto"></div>
                    <div className="flex-none bg-indigo-200 rounded-full w-5 h-5"></div>
                </div>
                <div className="flex flex-row pb-4">
                    <p className="flex-none text-left text-indigo-200 font-bold text-xs">YOUR ACCOUNT</p>
                    <p className="flex-1 grow text-center text-indigo-400 font-bold text-xs -ml-10">PERSONAL INFORMATION</p>
                    <p className="flex-none text-right  text-indigo-200 font-bold text-xs">PAYMENT</p>
                </div>

                <div className="flex flex-row">
                    <div className="flex items-center mr-4">
                        <input type="radio" name="radio" className="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                        <label htmlFor="radio-male" className="text-gray-600">Mr.</label>
                    </div>
                    <div className="flex items-center ">
                        <input type="radio" name="radio" className="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                        <label htmlFor="radio-female" className="text-gray-600">Mrs.</label>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row">
                    <input className="flex-1 p-4 border border-gray-200 focus:outline-none focus:ring-2 rounded" placeholder="First Name" />
                    <input className="flex-1 mt-4 sm:mt-0 sm:ml-8 lg:ml-4 p-4 border border-gray-200 focus:outline-none focus:ring-2 rounded" placeholder="Last Name" />
                </div>
                
                <div className="flex flex-col sm:flex-row">
                    <select className="flex-1 p-4 border border-gray-200 focus:outline-none focus:ring-2 rounded" placeholder="Title">
                        <option className="p-4"></option>
                    </select>
                    <input className="flex-1 mt-4 sm:mt-0 sm:ml-8 lg:ml-4 p-4 border border-gray-200 focus:outline-none focus:ring-2 rounded" placeholder="Company" />
                </div>
                
                <div className="flex flex-col sm:flex-row">
                    <input className="flex-1 p-4 border border-gray-200 focus:outline-none focus:ring-2 rounded" placeholder="Street" />
                    <input className="flex-1 mt-4 sm:mt-0 sm:ml-8 lg:ml-4 p-4 border border-gray-200 focus:outline-none focus:ring-2 rounded" placeholder="No." />
                </div>
                
                <div className="flex flex-col sm:flex-row">
                    <input className="flex-1 p-4 border border-gray-200 focus:outline-none focus:ring-2 rounded" placeholder="City" />
                    <input className="flex-1 mt-4 sm:mt-0 sm:ml-8 lg:ml-4 p-4 border border-gray-200 focus:outline-none focus:ring-2 rounded" placeholder="Zip" />
                </div>
                
                <div className="flex flex-col sm:flex-row">
                    <input className="flex-1 p-4 border border-gray-200 focus:outline-none focus:ring-2 rounded" placeholder="E-Mail" />
                    <input className="flex-1 mt-4 sm:mt-0 sm:ml-8 lg:ml-4 p-4 border border-gray-200 focus:outline-none focus:ring-2 rounded" placeholder="Phone" />
                </div>

                <div className="m-auto text-center">
                    <button className="p-3 bg-indigo-300 text-white text-1xl rounded-full w-32  mx-2" id="btn-next">Back</button>
                    <button className="p-3 bg-indigo-400 text-white text-1xl rounded-full w-32 mx-2" id="btn-next">Next</button>
                </div>
            </div>
        </div>
    )
}