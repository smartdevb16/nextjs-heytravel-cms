import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import TodayPicker from './today-picker';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Social3() {
    const socialData = [
        {
            title: "News headline  One",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonueirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed.",
            linkTitle: "Read more"
        },
        {
            title: "News headline  Two",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonueirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed.",
            linkTitle: "Read more"
        },
    ]
    return (
        <div className="">
            {socialData.map((item, index) => (
                <div key={index.toString()} className={classNames("flex flex-col md:flex-row", index % 2 === 0 ? "" : "flex-row-reverse md:flex-row-reverse")}>
                    <div className="flex-1 basis-[60vw]">
                        <div className="h-full bg-indigo-100 relative p-8">                                
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-9xl">
                                <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 basis-[40vw]">
                        <div className="flex flex-col p-8">
                            <TodayPicker className="w-16 h-16" />
                            <h1 className="text-4xl pt-4">{item.title}</h1>
                            <p className="text-xl py-4">{item.description}</p>
                            <Link href="#">
                                <a className="text-base text-blue-self">{item.linkTitle}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}