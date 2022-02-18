export default function Artboard1(props) {
    return (
        <div className="relative border-t border-b pt-24" key={'first-step'}>
            <div>
                <h1 className="my-3vw text-gray-600 text-3xl text-center">Registration</h1>
                <div className="flex justify-center mb-3vw sm:mb-6vw">
                    <div className="flex flex-col justify-center relative sm:flex-row">
                        <div className="flex relative sm:flex-col">
                            <div className="bg-indigo-400 rounded-full w-5 h-5"></div>
                            <h4 className="text-indigo-400 sm:text-center sm:w-40 md:min-w-max font-bold text-sm sm:text-base sm:transform sm:-translate-x-1/2 sm:absolute ml-2vw sm:top-2vw sm:m-2vw md:m-1.5vw lg:m-1vw xl:m-0.5vw">PERSONAL INFORMATION</h4>
                        </div>
                        <div className="bg-indigo-200 w-2 h-12 mx-1.5 sm:w-96 sm:h-1 sm:my-2 sm:mx-0"></div>
                        <div className="flex relative sm:flex-col">                            
                            <div className="bg-indigo-200 rounded-full w-5 h-5"></div>
                            <h4 className="text-indigo-200 sm:text-center sm:w-40 md:min-w-max font-bold text-sm sm:text-base sm:transform sm:-translate-x-1/2 sm:absolute ml-2vw sm:top-2vw sm:m-2vw md:m-1.5vw lg:m-1vw xl:m-0.5vw">Non Closures & IP Assignments</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full mt-6vw sm:mt-12vw md:mt-10vw lg:mt-8vw">
                <div className="space-y-2vw md:space-y-1vw md:w-70vw lg:w-50vw m-auto px-4vw">
                    <div className="flex">
                        <div className="flex items-center mb-2 mr-4">
                            <input type="radio" className="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                            <label htmlFor="radio-male" className="text-gray-600">Mr.</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input type="radio" className="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
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
                </div>
            </div>
            <button className="my-4vw md:my-2.5vw bg-indigo-300 text-white text-3vw md:text-2.5vw lg:text-2xl rounded-full flex justify-center w-40vw md:w-20vw mx-auto md:px-2vw py-1.125vw" id="btn-next" onClick={props.nextStep}>Next</button>
        </div>
    )
}