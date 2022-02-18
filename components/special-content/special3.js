import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcAmazonPay, faEbay, faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons';

export default function Special3() {
    return (
        <div className="w-full px-8 py-16 md:p-16 m-auto">
            <h1 className="text-5xl text-center">Our Customers</h1>
            <p className="text-center w-auto md:w-[40vw] m-auto p-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
            </p>
            <div className="w-[320px] md:w-[640px] lg:w-[800px] grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center m-auto text-blue-self text-8xl lg:text-9xl">
                <div><FontAwesomeIcon icon={faCcAmazonPay}></FontAwesomeIcon></div>
                <div><FontAwesomeIcon icon={faEbay}></FontAwesomeIcon></div>
                <div><FontAwesomeIcon icon={faCcPaypal}></FontAwesomeIcon></div>
                <div><FontAwesomeIcon icon={faCcVisa}></FontAwesomeIcon></div>
            </div>
        </div>
    )
}