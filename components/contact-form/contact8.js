import Link from 'next/link'
import ContactMap from './../../pages/assets/svg/contact-form-googlemap.svg'

export default function Contact8() {
    return (
        <div className="relative">
            <img className="w-full h-auto" src={ContactMap}></img>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[270px] h-[170px]">
                    <div className="text-white bg-dark-self p-4 rounded-lg">
                        <p>Luxo Wireframe Kit</p>
                        <Link href="#">
                            <a className="pt-[6vw]">hello@luxo-kit.com</a>
                        </Link>
                        <p>+49 800 000000</p>
                        <p className="mt-4">Luxoallee 218 B</p>
                        <p>80331 Munich, Germany</p>
                    </div>
                    <div className="absolute left-[8px] w-6 overflow-hidden inline-block">
                        <div className="h-3 w-3 bg-dark-self -rotate-45 transform origin-top-left"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}