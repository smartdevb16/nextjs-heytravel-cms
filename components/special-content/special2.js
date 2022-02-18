import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Carousel2() {
    return (
        <div className="w-full h-[300px] bg-indigo-100 px-8 py-16 sm:p-16">
            <h1 className="text-4xl text-center">What are you looking for?</h1>
            <div className="relative text-center w-[80vw] sm:w-[32rem] m-auto pt-16">
                <div className="hidden sm:block absolute m-3">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </div>
                <input type="text" placeholder="Type here" className="rounded-full focus:outline-none focus:ring-2 w-full pl-9 pr-36 py-3"/>
                <button className="hidden sm:inline-block bg-blue-self text-white rounded-full w-32 -ml-32 py-3">Search</button>
                <button className="inline-block sm:hidden bg-blue-self text-white rounded-full w-12 -ml-12 py-3"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
            </div>
        </div>
    )
}