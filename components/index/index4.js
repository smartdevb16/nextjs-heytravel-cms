import CustomTabbar from "../custom-tabbar"

import Timeline from './../../pages/assets/svg/home-market-timeline.svg'
import Marketintel from './../../pages/assets/svg/home-market-intelligence.svg'

export default function Paragraph4() {
    const tabList = ['Overview', 'Airport Analytics', 'Market Intelligence']
    const tabBtnStyles = {
        active: 'bg-blue-self text-white',
        inactive: 'text-blue-self'
    }
    const selectListAdaptar = [
        {key: 'MARKETS', values:[]},
        {key: 'PRODUCTS', values:[]},
        {key: 'AIRLINES', values:[]},
        {key: 'CUSTOMER TYPE', values:[]},
        {key: 'DESTINATION', values:[]},
        {key: 'REASON FOR TRAVEL', values:[]},
    ]

const analyzeDataAdapter = [
    {key: 'UTILIZATION', value: '78.2%', rate: '+2.3%', state: 'asc'},
    {key: 'AVG.DAILY RATE', value: '$15,75', rate: '-3.8%', state: 'dec'},
    {key: 'AVG.MARKET DAILY RATE', value: '$20.56', rate: '+16.5%', state: 'asc'},
    {key: 'TRANSACTIONS', value: '22,869', rate: '+2.3%', state: 'asc'},
    {key: 'REVENE', value: '1,022,387', rate: '+3.3%', state: 'dec'},
    {key: 'LEAD TIME(DAYS)', value: '9.54', rate: '+16..3%', state: 'asc'},
]

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex-1 my-4vw lg:my-auto">
                <div className="flex flex-col flex-1 mx-4vw text-center">
                    <h1 className="text-gray-800 text-5vw md:text-4vw font-bold">PARK ANALYTICS</h1>
                    <p className="text-gray-800 text-3vw md:text-2vw font-normal leading-tight p-2vw">Hey Travel’s airport parking analytics dashboards for marketing and revenue management with global airport parking intelligence. Set prepaid parking prices in real-time with Hey Travel’s analytics AI.</p>
                    <button className="border-indigo-400 rounded-full border text-indigo-400 text-4vw md:text-2vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-8vw md:px-2vw py-1.125vw">Learn More</button>
                </div>
            </div>
            <div className="flex flex-col flex-1 bg-indigo-100">
                <div className="pt-4vw lg:pt-2vw pb-1vw">
                    <CustomTabbar tabList={tabList} tabBtnStyles={tabBtnStyles}></CustomTabbar>
                </div>
                <div className="mx-auto pt-1.5vw px-1vw">
                    <img src={Timeline}></img>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1vw pt-1vw px-1vw text-2vw sm:text-1.75vw md:text-1.5vw lg:text-1vw">
                    {selectListAdaptar.map((item, i) => (
                        <select className="px-3vw py-1.5vw md:px-2vw md:py-1vw lg:px-1vw lg:py-0.5vw border bg-indigo-100 border-gray-400 focus:outline-none focus:ring-2 rounded" key={i}>
                            <option className="p-1vw">{item.key}</option>
                        </select>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
                    {analyzeDataAdapter.map((item, i) => (
                        <div className="flex flex-col items-center pt-1vw px-1vw" key={i}>
                            <h6 className="font-bold text-2vw sm:text-1.75vw md:text-1.5vw lg:text-0.75vw leading-none">{item.key}</h6>
                            <h1 className="text-5vw sm:text-4vw md:text-3vw lg:text-2vw leading-tight">{item.value}</h1>
                            <h6 className="text-1vw text-indigo-400 font-bold">{item.rate}</h6>
                        </div>
                    ))}
                </div>
                <div className="relative w-full overflow-hidden">
                    <h1 className="absolute top-6 left-6 max-w-sm text-xl font-bold">YOUR AVG. DAILY RATE COMPARED TO THE MARKET</h1>
                    <img className="w-full" src={Marketintel}></img>
                </div>
            </div>
        </div>
    )
}