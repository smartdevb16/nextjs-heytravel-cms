

export default function Special4() {
    return (
        <div className="w-full grid grid-cols-1 gap-8 bg-indigo-100 px-8 py-16 md:p-16 m-auto text-center">
            <div>
                <h1 className="inline-block text-4xl">I am looking for</h1>
                <select className="p-2 bg-transparent border-b-2 border-blue-self text-4xl text-blue-self focus:outline-none">
                    <option className="p-3">Downloads</option>
                </select>
            </div>
            <div>
                <h1 className="inline-block text-4xl">for</h1>
                <select className="p-2 bg-transparent border-b-2 border-blue-self text-4xl text-blue-self focus:outline-none">
                    <option className="p-3">All Devices</option>
                </select>
            </div>
            <div>
                <button className="bg-blue-self rounded-full text-white px-12 py-4">Show Results</button>
            </div>
        </div>
    )
}