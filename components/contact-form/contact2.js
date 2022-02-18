import { useState } from 'react'

export default function Contact3() {
    const [remind, setRemind] = useState(500)

    return (
        <div className="px-8 py-8 md:py-16">
            <h1 className="text-4xl md:text-5xl leading-tight font-bold text-center pb-8">Standard Form</h1>
            <div className="space-y-4 w-full md:w-[90vw] lg:w-[60vw] m-auto">
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

                <div className="space-y-1">
                    <textarea className="w-full h-96 p-3 border border-gray-200 focus:outline-none focus:ring-2 rounded resize-none" placeholder="Type your message here" onChange={ e => setRemind(500 - e.target.textLength) }></textarea>
                    <h3 className="text-blue-self">You have {remind} charactors left.</h3>
                </div>
            
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 grow m-auto">
                        <input type="checkbox" className="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                        <label htmlFor="checkbox-agree" className="text-gray-600">By signing up I agree to the terms of service and privacy policy</label>
                    </div>
                    <button className="flex-none mt-4 md:mt-0 px-4 py-3 bg-indigo-300 text-white text-xl rounded-full">Send now</button>
                </div>
            </div>
        </div>
    )
}