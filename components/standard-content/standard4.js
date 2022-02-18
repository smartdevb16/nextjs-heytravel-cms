import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Standard4() {
    const anchorData = [
        "ANCHOR2",
        "ANCHOR3",
        "ANCHOR4"
    ]
    return (
        <div className="flex px-8 md:px-16 py-8 text-center text-xs sm:text-base md:text-lg">
            <Link href="#">
                <a className="flex-1 font-semibold leading-none pr-[16px]">
                    ANCHOR1 <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>
                </a>
            </Link>
            
            {anchorData.map((item, index) => (
                <Link key={index.toString()} href="#">
                    <a className={classNames(index === 0 ? "" : "pl-[16px]", "flex-1 text-blue-self font-semibold leading-none")}>{item}</a>
                </Link>
            ))}
        </div>
    )
}