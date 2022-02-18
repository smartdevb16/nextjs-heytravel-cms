import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faYoutube, 
    faTwitter, 
    faFacebook, 
    faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Social7() {
    return (
        <div className="w-full p-8">
            <h1 className='text-5xl text-center font-semibold uppercase my-8'>Social wall</h1>
            <div className="w-full h-full grid grid-cols-1 md:grid-rows-4 md:grid-cols-3">
                <div className="h-[60vw] md:h-[30vw] md:col-span-2 bg-indigo-50 text-5xl p-8 relative">
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                    <div className="absolute left-1/2 top-1/2 md:bottom-0 -translate-x-1/2 -translate-y-1/2 md:translate-y-1/2  text-blue-self text-8xl">
                        <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
                    </div>
                    <p className="absolute left-1/2 -bottom-20 -translate-x-1/2 translate-y-1/2 text-gray-800 text-base text-center">Social content</p>
                </div>

                <div className="h-[60vw] md:h-[30vw] bg-indigo-100 text-5xl p-8 relative">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-800 text-base text-center">Social content</p>
                </div>

                <div className="hidden md:block h-[60vw] md:h-[30vw] md:col-span-2 bg-indigo-50 text-5xl p-8"></div>

                <div className="hidden md:block bg-indigo-200 text-5xl p-8 relative">
                    <FontAwesomeIcon className="hidden md:block row-span-2 col-span-1" icon={faFacebook}></FontAwesomeIcon>
                    <p className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 text-gray-800 text-base text-center">Social content</p>
                </div>

                <div className="hidden md:block bg-indigo-200 text-5xl p-8 relative">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-800 text-base text-center">Social content</p>
                </div>

                <div className="hidden md:block bg-indigo-100 text-5xl p-8 relative">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    <p className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 text-gray-800 text-base text-center">Social content</p>
                </div>

                <div className="hidden md:block bg-indigo-200 text-5xl p-8"></div>

                <div className="hidden md:block bg-indigo-50 text-5xl p-8 relative">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    <p className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-800 text-base text-center">Social content</p>
                </div>

                <div className="hidden md:block bg-indigo-100"></div>

                <div className="h-[60vw] md:h-[30vw] bg-indigo-50 text-5xl p-8 relative">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-800 text-base text-center">Social content</p>
                    <button className="block md:hidden absolute left-1/2 -translate-x-1/2 bottom-8 text-base bg-blue-self rounded-full text-white px-6 py-3">
                        <FontAwesomeIcon icon={faRedo} className='mr-2'></FontAwesomeIcon>
                        More news
                    </button>
                </div>
            </div>
        </div>
    )
}