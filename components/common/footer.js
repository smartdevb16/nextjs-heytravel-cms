import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFacebookSquare,
    faTwitter,
    faInstagram 
} from "@fortawesome/free-brands-svg-icons"

import FooterLogo from "./../../pages/assets/svg/footer-logo.svg"

const footers = [
    { name: 'Investor Portal', href: '#', current: false },
    { name: 'Beta Partners', href: '#', current: false },
    { name: 'Knowledge Center', href: '#', current: false },
    { name: 'About', href: '#', current: false },
]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer() {
    
    return (
        <div className="bg-dark-self">
            <div className="relative py-4vw md:py-3vw">
                <div className="w-full content-center">
                    <img className="w-30vw m-auto" src={FooterLogo} alt="logo-img" />
                </div>
                <div className="text-center text-white">
                    <p>Hey Travel Inc</p>
                    <p>hey@heytravel.com</p>
                    <p>+49 800 000000</p>
                    <a className="no-underline text-indigo-400 cursor-pointer">Show on map</a>
                </div>
                <div className="flex justify-center gap-3vw md:gap-1.5vw py-2vw md:py-3vw text-3vw lg:text-1.5vw">
                    <FontAwesomeIcon icon={faFacebookSquare} className="text-indigo-500 " />
                    <FontAwesomeIcon icon={faTwitter} className="text-indigo-500" />
                    <FontAwesomeIcon icon={faInstagram} className="text-indigo-500" />
                </div>
            </div>
            <div className="p-1.5vw border-gray-400 border-t">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-4vw xl:space-x-24">
                    {footers.map((item) => (
                        <a key={item.name} href={item.href} className="text-white">{item.name}</a> 
                    ))}
                    <div className="lg:flex-grow"></div>
                    <h3 className="text-white font-bold">@2022 Hey Travel, Inc</h3> 
                </div>
            </div>
        </div>
    )
}