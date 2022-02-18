import Head from 'next/head'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserLock } from '@fortawesome/free-solid-svg-icons'

import LogoMin from './assets/svg/logo-min.svg'
import Logo from "./assets/svg/logo.svg"

export default function Login() {

    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="shortcut icon" href={LogoMin} />
            </Head>

            <div className="font-montserrat flex flex-col justify-center min-h-screen w-full p-4 bg-primary">
                <div className="flex items-start mx-auto">
                    <Link href="/">
                        <a><img className="h-60" src={Logo} alt="logo_img" /></a>
                    </Link>
                </div>

                <h1 className="text-white text-2xl text-center sm:text-4xl -mt-8 mb-4">Login to View</h1>
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

                <Link href="/opener-slider">
                    <a className="flex justify-center w-72 bg-indigo-300 hover:bg-indigo-400 p-3 mx-auto text-white text-xl rounded-full sm:w-144" id="btn-login">LOGIN</a>
                </Link>
                
                <h5 className="p-4 text-gray-400 text-center">OR</h5>

                <Link href="/register">
                    <a className="flex justify-center w-64 bg-indigo-300 hover:bg-indigo-400 p-3 mx-auto text-white text-xl rounded-full"  id="btn-register">REGISTER</a>
                </Link>
            </div>
        </>
        
    )
}