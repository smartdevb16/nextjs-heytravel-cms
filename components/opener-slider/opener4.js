import Phone2SVG from './../../pages/assets/svg/slider-phone-2.svg'

export default function Opener4() {
    return (
        <div className="flex flex-col p-8vw md:p-4vw">
            <div className="flex-1 text-center">
                <h1 className="w-80vw md:w-60vw text-gray-800 text-9vw md:text-6vw lg:text-6xl leading-none font-bold m-auto">Experience the full potential of Luxo.</h1>
                <button className="border-indigo-400 rounded-full border text-indigo-400 text-4vw md:text-2vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-4vw md:px-2vw py-1.125vw my-4vw">Call to Action</button>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="grow grid content-evenly">
                    <img className="w-auto max-h-full m-auto" src={Phone2SVG}></img>
                </div>
            </div>
        </div>
    )
}