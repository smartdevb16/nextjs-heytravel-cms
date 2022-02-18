import Phone1SVG from './../../pages/assets/svg/slider-phone-1.svg'

export default function Opener2() {
    return (
        <div className="h-full flex flex-col md:flex-row">
            <div className="flex-1 m-auto relative p-8vw md:p-4vw">
                <img className="max-h-full m-auto" src={Phone1SVG} alt="Phone1SVG"></img>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-right text-gray-800 text-9vw md:text-6vw lg:text-6xl leading-none font-bold uppercase m-auto">Experience the full potential.</h1>
                </div>
            </div>
            
            <div className="flex-1 flex flex-col bg-indigo-100 p-8vw md:p-4vw">
                <div className="grow grid content-evenly">
                    <p className="text-gray-800 text-3vw md:text-2xl font-normal leading-normal text-center m-auto">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                </div>
            </div>
        </div>
    )
}