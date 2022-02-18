import ResellerTable from './../../pages/assets/svg/home-reseller-table.svg'

export default function Paragraph5() {
    return (
        <div className="flex flex-col md:flex-row p-4vw h-full">
            <div className="flex-1 m-auto">
                <img className="" src={ResellerTable}></img>
            </div>
            <div className="flex-1 m-auto text-center mx-4vw mt-4vw md:mt-0">
                <h1 className="text-gray-800 text-5vw md:text-4vw leading-tight font-bold m-auto max-w-2xl">SPOT CONNECT</h1>
                <p className="text-gray-800 text-3vw md:text-2vw font-normal leading-tight p-2vw">A global online distribution system that delivers your airport parking spots to the largest travel websites and resellers in the world.</p>
                <button className="rounded-full bg-indigo-400 text-white text-4vw md:text-2vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-8vw md:px-2vw py-1.125vw">Learn More</button>
            </div>
        </div>
    )
}