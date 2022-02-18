import AirportParking from './../../pages/assets/svg/home-airportparking.svg'

export default function Paragraph9() {
    return (
        <div className="h-62.5vw">
            <div className="relative h-full bg-indigo-100">
                <div className="h-full overflow-hidden">
                    <img className="-mx-25vw" src={AirportParking}></img>
                </div>
                <div className="absolute left-1/4 top-1/8 w-1/2 h:3/4 sm:left-720rp sm:w-648rp sm:h-1/2 text-center m-auto z-10 bg-white">
                    <div className="flex flex-col h-full px-2 py-4 sm:px-4 sm:py-10 lg:px-10 lg:py-16 xl:px-10 xl:py-20">
                        <h1 className="text-gray-800 text-4vw md:text-2.5vw leading-tight font-bold m-auto max-w-2xl">Travel & Airport Parking Tech</h1>
                        <p className="flex-grow text-gray-800 text-2vw md:text-1.75vw font-normal leading-tight p-2vw">Hey Travel helps airports connect their travelers to their parking spots.</p>
                        <button className="rounded-full border bg-indigo-400 text-white text-4vw md:text-2vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-8vw md:px-2vw py-1.125vw">Start now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}