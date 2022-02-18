import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import Phone3SVG from './../../pages/assets/svg/slider-phone-3.svg'

export default function Opener8() {
    return (
        <div className="h-full flex flex-col p-8vw md:p-4vw">
            <div className="flex-1 flex flex-col md:flex-row">
                <div className="text-center flex-1 m-auto relative">
                    <h1 className="text-gray-800 text-6vw md:text-4vw lg:text-6xl leading-tight font-bold m-auto">Experience the full potential of Luxo.</h1>
                    <p className="text-gray-800 text-4vw md:text-2vw font-normal leading-tight  mx-auto my-4vw md:my-2vw">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                </div>
                <div className="flex-1 m-auto relative pb-8vw md:pb-4vw">
                    <img className="max-h-full m-auto" src={Phone3SVG}></img>
                </div>
            </div>
            
            <div className="flex-1 flex flex-col sm:flex-row items-center gap-2vw m-auto text-center">
                <Link href="#">
                    <a className="flex-1 text-blue-self font-bold min-w-max">Download our app</a>
                </Link>
                <Link href="#">
                    <a className="flex-1 flex flex-row grow gap-x-1.5vw bg-blue-self rounded-lg cursor-pointer px-2vw py-1vw m-auto">
                        <div className="flex-1 grow-0 text-4xl">
                            <FontAwesomeIcon className="text-white" icon={faApple}></FontAwesomeIcon> 
                        </div>
                        <div className="flex-1 flex flex-col grow text-white text-left">
                            <h1 className="text-xs">Download on the</h1>
                            <h1 className="min-w-max text-xl">App Store</h1>
                        </div>
                    </a>
                </Link>
                <Link href="#">
                    <a className="flex-1 flex flex-row grow gap-x-1.5vw bg-blue-self rounded-lg cursor-pointer px-2vw py-1vw m-auto">
                        <div className="flex-1 grow-0 text-4xl">
                            <FontAwesomeIcon className="text-white" icon={faGooglePlay}></FontAwesomeIcon> 
                        </div>
                        <div className="flex-1 flex flex-col grow text-white text-left">
                            <h1 className="text-xs">GET IT ON</h1>
                            <h1 className="min-w-max text-xl">Google Play</h1>
                        </div>
                    </a>
                </Link>
            </div>
            
        </div>
    )
}