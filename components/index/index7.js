import BookingEngine from './../../pages/assets/svg/home-booking-engine.svg'

export default function Paragraph7() {
    return (
        <div className="flex flex-col md:flex-row p-4vw h-full">
            <div className="flex-1 m-auto">
                <img className="" src={BookingEngine}></img>
            </div>
            <div className="flex-1 m-auto text-center mx-4vw mt-4vw md:mt-0">
                <h1 className="text-gray-800 text-5vw md:text-4vw leading-tight font-bold m-auto max-w-2xl">BOOKING WIDGET</h1>
                <p className="text-gray-800 text-3vw md:text-2vw font-normal leading-tight p-2vw">The Hey Travel’s booking widget is design specifically to integrate with your airport’s prepaid parking website.  Start the booking journey on anywhere by placing the widget throughout your website, partner websites and in adverts.</p>
                <button className="rounded-full bg-indigo-400 text-white text-4vw md:text-2vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-8vw md:px-2vw py-1.125vw">Learn More</button>
            </div>
        </div>
    )
}