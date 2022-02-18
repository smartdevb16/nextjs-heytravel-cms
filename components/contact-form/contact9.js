import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Contact9() {
    return (
        <div className="w-full flex flex-col md:flex-row p-8 mt:p-16">
            <div className="flex-1 flex flex-col">
                <h1 className="text-4xl">Get in touch</h1>
                <div className="flex flex-row pt-8">
                    <div className="flex-none text-indigo-100 text-8xl">
                        <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                    </div>
                    <div className="ml-4">
                        <p>Luxo Wireframe Kit</p>
                        say
                        <Link href="#">
                             <a className="text-blue-self pl-2">hello@luxo-kit.com</a>
                        </Link>
                        <p className="mb-4">+49 800 000000</p>
                        <p>Luxoallee 218 B</p>
                        <p>80331 Munich, Germany</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-y-4 mt-8 md:mt-0">
                <h1 className="text-4xl">Send a mail</h1>
                <input className="flex-none p-2 border border-gray-200 focus:outline-none focus:ring-2 rounded" placeholder="Your name" />
                <input className="flex-none p-2 border border-gray-200 focus:outline-none focus:ring-2 rounded" placeholder="E-Mail" />
                <textarea className="w-full h-32 p-2 border border-gray-200 focus:outline-none focus:ring-2 rounded resize-none" placeholder="Type your message here"></textarea>
                <button className="flex-none w-64 p6-4 py-3 bg-blue-self text-white text-xl rounded-full">Send message</button>
            </div>
        </div>
    )
}