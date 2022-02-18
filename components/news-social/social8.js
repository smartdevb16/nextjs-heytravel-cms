import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Social8() {
    const blodData = [
        {
            date: "28 January, 01:14",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
            author: "Author Name",
            position: "Position"
        },
        {
            date: "28 January, 01:14",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
            author: "Author Name",
            position: "Position"
        },
        {
            date: "28 January, 01:14",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
            author: "Author Name",
            position: "Position"
        },
        {
            date: "28 January, 01:14",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
            author: "Author Name",
            position: "Position"
        },
    ]

    return (
        <div className="w-full p-8">
            <h1 className='text-5xl text-center font-semibold uppercase my-8'>Social wall</h1>
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 flex flex-col md:mr-4">
                    <div className="bg-indigo-100 h-[50vw] md:h-[20vw]"></div>
                    <p className="text-blue-self py-4">{blodData[0].date}</p>
                    <h1 className="text-2xl">Lorem ipsum dolor sit amet, consetetur 
sadipscing elitr invidunt ut labore</h1>
                    <p className="text-base py-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna (...)</p>
                    <div className="flex flex-row">
                        <div className="flex-none text-blue-self text-4xl mr-3">
                            <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <p className="text-base font-semibold">{blodData[0].author}</p>
                            <p className="text-sm">{blodData[0].position}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-8 mt-16 md:mt-0 md:ml-4">
                    {blodData.map((item, index) => (
                        <div key={index.toString()}>
                            <p className="text-blue-self">{blodData[0].date}</p>
                            <h1 className="text-2xl py-4">{item.description}</h1>
                            <div className="flex flex-row">
                                <div className="flex-none text-blue-self text-4xl mr-3">
                                    <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <p className="text-base font-semibold">{blodData[0].author}</p>
                                    <p className="text-sm">{blodData[0].position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}