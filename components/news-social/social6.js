import Link from 'next/link'
import TodayPicker from './today-picker';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Social6() {
    const socialData = [
        {
            title: "News headline 1",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonueirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed.",
            linkTitle: "Read more"
        },
        {
            title: "News headline 2",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonueirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed.",
            linkTitle: "Read more"
        },
        {
            title: "News headline 3",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonueirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed.",
            linkTitle: "Read more"
        },
        {
            title: "News headline 4",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonueirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed.",
            linkTitle: "Read more"
        },
        {
            title: "News headline 5",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonueirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed.",
            linkTitle: "Read more"
        },
    ]

    return (
        <div className="w-full flex flex-col-reverse lg:flex-row p-8">
            <div className="flex-1 flex flex-col mt-8 lg:mr-4">
                {socialData.map((item, index) => (
                    <div key={index.toString()} className="flex-1 flex flex-row p-4">
                        <div className="flex-none">
                            <TodayPicker className="w-16 h-16 mr-4"></TodayPicker>
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-semibold">{item.title}</h1>
                            <p className="text-xl py-4">{item.description}</p>
                            <Link href="#">
                                <a className="text-base text-blue-self">{item.linkTitle}</a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex-1 mx-auto my-8 lg:ml-4">
                <Calendar className="mx-auto"></Calendar>
            </div>
        </div>
    )
}