import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

export default function Special6() {
    const downloadData = [
        { title: 'FIRST DOCUMENT', date: '28th May', size: '13,5MB'},
        { title: 'SECOND DOCUMENT', date: '28th May', size: '13,5MB'},
        { title: 'THIRD DOCUMENT', date: '28th May', size: '13,5MB'},
        { title: 'FOURTH DOCUMENT', date: '28th May', size: '13,5MB'},
        { title: 'FIFTH DOCUMENT', date: '28th May', size: '13,5MB'},
        { title: 'SIXTH DOCUMENT', date: '28th May', size: '13,5MB'},
        { title: 'SEVENTH DOCUMENT', date: '28th May', size: '13,5MB'},
    ]

    return (
        <div className="px-8 py-16 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold">DOWNLOADS</h1>
                </div>
                <div className="text-left lg:text-right mt-8 lg:mt-0">
                    <div className="space-x-4">
                        <span>Choose your Language</span>
                        <select className="px-6 py-3 text-left border border-blue-self rounded-full text-blue-self focus:outline-none">
                            <option className="p-3">English</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                {downloadData.map((item, index) => (
                    <div key={index.toString()} className="flex flex-row border-b border-gray-300">
                        <div className="grow-0 grid place-items-center text-blue-self text-4xl">
                            <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
                        </div>
                        <h1 className="grow text-blue-self font-bold pl-4 py-4">{item.title}</h1>
                        <h3 className="grow-0 py-4">{item.date}, {item.size}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}