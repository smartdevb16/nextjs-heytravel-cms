import Intro from './../../pages/assets/svg/intro.svg'

export default function Opener1() {

    return (
        <div className="h-100vw md:h-62.5vw">
            <div className="h-full flex flex-col md:flex-row">
                <div className="relative w-30.625vw flex-none z-10 bg-white">
                    <div className="absolute left-15vw md:left-10vw top-40vw md:top-16vw w-70vw md:w-40vw">
                        <h1 className="text-primary text-8vw md:text-6.25vw leading-normal md:leading-none font-semibold">Travel & Airport Parking Tech</h1>
                        <p className="text-gray-600 mt-3vw mb-5vw md:mt-1.5vw md:mb-3vw text-3.5vw md:text-2vw font-normal md:font-light leading-normal md:leading-tight">Hey Travel helps airports connect their travelers to their parking spots.</p>
                        <button className="rounded-full border bg-indigo-400 text-white text-4vw md:text-2xl font-normal leading-tight px-8vw py-2vw md:px-4vw md:py-1.5vw">Start now</button>
                    </div>
                </div>
                <div className="z-0 flex">
                    <img className="z-0 max-x-full h-auto md:max-w-none md:-ml-12vw" src={Intro} alt="Intro"></img>
                </div>
            </div>
        </div>
    )
}