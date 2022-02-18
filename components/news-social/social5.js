import Link from 'next/link'
import TodayPicker from './today-picker';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Social5() {
    const socialData = [
        {
            title: "News headline 1",
            description: "At vero eos et accusam et justo duo dolores et",
            linkTitle: "Read more"
        },
        {
            title: "News headline 2",
            description: "At vero eos et accusam et justo duo dolores et",
            linkTitle: "Read more"
        },
        {
            title: "News headline 3",
            description: "At vero eos et accusam et justo duo dolores et",
            linkTitle: "Read more"
        },
    ]

    return (
        <div className="w-full flex flex-col bg-indigo-100 p-8">
            <div className="flex-1 flex flex-col md:flex-row">
                {socialData.map((item, index) => (
                    <div key={index.toString()} className="flex-1 flex flex-col p-4">
                        <TodayPicker className="w-16 h-16" />
                        <h1 className="text-4xl pt-8">{item.title}</h1>
                        <p className="text-xl py-4">{item.description}</p>
                        <Link href="#">
                            <a className="text-base text-blue-self">{item.linkTitle}</a>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="flex-1 m-auto">
                <button className="bg-blue-self rounded-full text-white px-12 py-4">More news</button>
            </div>
        </div>
    )
}