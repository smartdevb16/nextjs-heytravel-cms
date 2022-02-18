export default function Artboard2(props) {
    const donwloads = [
        { contents: "Non Disclosure Agreement", id: "btn-nda" },
        { contents: "IP Assignment", id: "btn-ipa"}
    ]
    return (
        <div className="relative border-t border-b pt-24" key={'last-step'}>
            <div>
                <h1 className="my-3vw text-gray-600 text-3xl text-center">Registration</h1>
                <div className="flex justify-center mb-3vw sm:mb-6vw">
                    <div className="flex flex-col justify-center relative sm:flex-row">
                        <div className="flex relative sm:flex-col">
                            <div className="bg-indigo-400 rounded-full w-5 h-5"></div>
                            <h4 className="text-indigo-400 sm:text-center sm:w-40 md:min-w-max font-bold text-sm sm:text-base sm:transform sm:-translate-x-1/2 sm:absolute ml-2vw sm:top-2vw sm:m-2vw md:m-1.5vw lg:m-1vw xl:m-0.5vw">PERSONAL INFORMATION</h4>
                        </div>
                        <div className="bg-indigo-400 w-2 h-12 mx-1.5 sm:w-96 sm:h-1 sm:my-2 sm:mx-0"></div>
                        <div className="flex relative sm:flex-col">                            
                            <div className="bg-indigo-400 rounded-full w-5 h-5"></div>
                            <h4 className="text-indigo-400 sm:text-center sm:w-40 md:min-w-max font-bold text-sm sm:text-base sm:transform sm:-translate-x-1/2 sm:absolute ml-2vw sm:top-2vw sm:m-2vw md:m-1.5vw lg:m-1vw xl:m-0.5vw">Non Closures & IP Assignments</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-10vw md:mt-0">
                <div className="w-80vw sm:w-70vw md:w-60vw lg:w-50vw space-y-4vw md:space-y-3vw">
                    <p className="text-center text-3vw md:text-2.5vw lg:text-2xl">
                        A Hey Travel representative has emailed you an IP Assignment and Non Disclosure agreement. Once those documents are executed and your access is approved you will be emailed a login and password.
                    </p>
                    <p className="bg-gray-900 p-2vw lg:p-6 text-white text-3vw md:text-2.5vw lg:text-2xl">Agreement Status</p>
                    <div className="flex flex-col">
                        { donwloads.map((item, index) => (
                            <div className="flex-1 flex flex-row space-y-1vw" key={index.toString()}>
                                <p className="flex-grow min-w-max text-3vw md:text-2.5vw lg:text-2xl m-auto">{item.contents}</p>
                                <button className="text-indigo-400 rounded-full border border-indigo-200 text-3vw md:text-2.5vw lg:text-2xl px-4vw md:px-2vw py-1.125vw" id={item.id}>Download</button>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
            <button className="my-4vw md:my-2.5vw bg-indigo-300 text-white text-3vw md:text-2.5vw lg:text-2xl rounded-full flex justify-center w-40vw md:w-20vw mx-auto md:px-2vw py-1.125vw" id="btn-back" onClick={props.previousStep}>Back</button>
        </div>
    )
}