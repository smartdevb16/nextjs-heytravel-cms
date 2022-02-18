import AirportParking from './../../pages/assets/svg/home-airportparking.svg'

export default function Opener6() {
    return (
        <div className="w-full h-62.5vw relative bg-indigo-100">
            <div className="z-0 w-full h-full overflow-hidden">
                <img className="mt-4vw -ml-22vw" src={AirportParking} alt="AirportParking"></img>
            </div>
            <div className="z-10 absolute left-1/2 top-1/2 -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 bg-white p-2vw">
                <div className="w-70vw lg:w-40vw flex flex-col text-center p-4vw">
                    <h1 className="text-gray-800 text-6vw md:text-5vw lg:text-5xl leading-tight font-bold m-auto">EXPERIENCE THE FULL POTENTIAL.</h1>
                    <p className="text-gray-800 my-3vw md:grow text-3vw md:text-2xl font-normal leading-tight m-auto">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                    <button className="border-indigo-400 rounded-full border text-indigo-400  text-4vw md:text-2vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-4vw md:px-2vw py-1.125vw">Call to Action</button>
                </div>
            </div>
            <div className="z-10 flex flex-row justify-between w-full absolute top-1/2 px-2">
                <a className="bg-indigo-800 px-4 py-2 text-white cursor-pointer">&#10094;</a>
                <a className="bg-indigo-800 px-4 py-2 text-white cursor-pointer">&#10095;</a>
            </div>
        </div>
    )
}