import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Contact7() {
    return (
        <div className="w-full bg-dark-self text-white p-8 sm:p-16">
            <h1 className="text-4xl text-center">Subscribe</h1>
            <div className="relative text-center w-[80vw] sm:w-[32rem] m-auto ">
                <p className="py-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</p>
                <input type="text" placeholder="Enter your E-Mail here" className="rounded-full focus:outline-none focus:ring-2 w-full pl-9 pr-36 py-3"/>
                <button className="bg-blue-self rounded-full w-32 -ml-32 py-3">Subscribe</button>
            </div>
        </div>
    )
}