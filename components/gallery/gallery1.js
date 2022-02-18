import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import CustomTabbar from "./../custom-tabbar"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Gallery1() {
    const tabList = ['TAB ONE', 'TAB TWO', 'TAB THREE']
    const tabBtnStyles = {
        active: 'bg-blue-self text-white',
        inactive: 'text-blue-self'
    }
    const galleryData = ["", "", "", "","", "", "", "","", "", "", ""]

    return (
        <div className="grid grid-cols-1 gap-8 p-8">
            <div className="">
                <CustomTabbar tabList={tabList} tabBtnStyles={tabBtnStyles}></CustomTabbar>
            </div>
            <div className="bg-gray-500">
                <div className="relative w-full h-[30vw]">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-4xl md:text-8xl">
                        <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-8 relative'>
                {galleryData.map((item, index) => (
                    <div key={index.toString()} className={classNames(index > 5 ? "block md:hidden" : "", "bg-gray-500 relative w-full h-[20vw]")}>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-4xl md:text-8xl">
                            <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                        </div>
                    </div>
                ))}
                <div className="block md:hidden absolute left-1/2 -translate-x-1/2 bottom-8">
                    <button className="text-base bg-white rounded-full text-blue-self w-48 px-9 py-3">
                        <FontAwesomeIcon icon={faRedo} className='mr-2'></FontAwesomeIcon>
                        Load more
                    </button>
                </div>
            </div>
            <div className="flex flex-row m-auto">
                <div className="flex-1 h-12 w-12 mr-1 flex justify-center items-center rounded-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left w-6 h-6">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </div>
                <div className="flex w-[144px] h-12 font-medium rounded-full">
                    <div className="w-12 flex justify-center items-center cursor-pointer leading-5 rounded-full border border-gray-300">1</div>
                    <div className="w-12 flex justify-center items-center cursor-pointer leading-5 rounded-full bg-blue-self text-white ">2</div>
                    <div className="w-12 flex justify-center items-center cursor-pointer leading-5 rounded-full border border-gray-300">3</div>
                </div>
                <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right w-6 h-6">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    )
}