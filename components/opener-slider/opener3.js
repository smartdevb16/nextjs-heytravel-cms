import HomeLuxo from './../../pages/assets/svg/home-luxo.svg'

export default function Opener3() {
    return (
        <div className="h-full flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col bg-indigo-100 p-8vw md:p-4vw">
                <div className="grow grid content-evenly">
                    <img className="w-auto max-h-full m-auto" src={HomeLuxo} alt="HomeLuxo"></img>
                </div>
            </div>

            <div className="flex-1 p-8vw md:p-4vw">
                <div className="flex flex-col text-center">
                    <h1 className="text-gray-800 text-9vw md:text-6vw lg:text-6xl leading-none font-bold m-auto">Welcome to Luxo.</h1>
                    <p className="grow text-gray-800 my-3vw md:grow text-3vw md:text-2xl font-normal leading-normal m-auto">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <button className="rounded-full bg-indigo-400 text-white text-4vw md:text-2vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-8vw md:px-2vw py-1.125vw">Start now</button>
                </div>
            </div>
        </div>
    )
}