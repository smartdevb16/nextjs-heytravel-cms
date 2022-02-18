import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ContactMap from './../../pages/assets/svg/contact-form-googlemap.svg'

export default function Contact4() {
    return (
        <div className="bg-blue-self relative">
            <img className="w-full h-auto" src={ContactMap}></img>
            <div className="text-white absolute top-1/2 -translate-y-1/3 left-[10vw]">
                <h1 className="text-xl sm:text-2xl">Everything you ever needed<br></br>in one Wireframe Kit.</h1>
                say
                <Link href="#">
                    <a className="pl-2">hello@luxo-kit.com</a>
                </Link>
                <div className="text-xl pt-[2vw]">
                    <FontAwesomeIcon className="mr-10" icon={faFacebookSquare}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> 
                </div>
            </div>
        </div>
    )
}