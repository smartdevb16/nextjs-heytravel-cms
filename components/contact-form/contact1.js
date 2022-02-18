import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export default function Contact1() {
    return (
        <div className="bg-indigo-100 p-8 md:p-16">
            <div className="flex flex-col w-full h-full">
                <div className="z-10 flex flex-col m-auto">
                    <h1 className="w-60vw lg:w-40vw text-center text-4xl md:text-5xl leading-tight font-bold m-auto">Welcome back, friend.</h1>
                    
                    <div className="flex flex-col items-start mx-auto p-4 space-y-4 sm:space-y-0 sm:space-x-2 sm:flex-row">
                        <div className="flex items-start relative">    
                            <input className="w-72 p-3 focus:outline-none focus:ring-2 rounded" id="username" placeholder="Your Username" />
                            <FontAwesomeIcon className="absolute top-1/2 transform translate-x-64 -translate-y-1/2 text-gray-400" icon={faUser} />
                        </div>
                        <div className="flex items-start relative">
                            <input type="password" className="w-72 p-3 focus:outline-none focus:ring-2 rounded" id="password" placeholder="Your Password" />
                            <FontAwesomeIcon className="absolute top-1/2 transform translate-x-64 -translate-y-1/2 text-gray-400" icon={faUserLock} />
                        </div>
                    </div>

                    <Link href="/register">
                        <a className="w-72 sm:w-144 text-center bg-indigo-300 hover:bg-indigo-400 p-3 mx-auto text-white text-xl rounded-full " id="btn-register">Register now</a>
                    </Link>
                    
                    <h5 className="p-4 text-gray-400 text-center">OR</h5>

                    <Link href="#">
                        <a className="w-72 text-center bg-indigo-300 hover:bg-indigo-400 p-3 mx-auto text-white text-xl rounded-full"  id="btn-facebook-login">
                            <FontAwesomeIcon className="text-white text-xl mr-0.5vw" icon={faFacebookSquare}></FontAwesomeIcon> 
                            Login with Facebook
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}