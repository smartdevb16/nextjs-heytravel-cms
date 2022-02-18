import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Standard2() {
    const breadcrumbData = [
        "Mainpage",
        "First Breadcrump",
    ]
    return (
        <div className="flex px-8 md:px-16 py-8 text-xs sm:text-base md:text-lg">
            {breadcrumbData.map((item, index) => (
                <div key={index.toString()} className="flex flx-row">
                    <Link href="#">
                        <a className="text-blue-self font-semibold leading-none">{item}</a>
                    </Link>
                    <div className="leading-tight px-[4px] md:px-[16px]">
                        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                    </div>
                </div>
            ))}
            <Link href="#">
                <a className="flex-1 font-semibold leading-none">Second Breadcrump</a>
            </Link>
        </div>
    )
}