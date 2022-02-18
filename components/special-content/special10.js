import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import ComputerSVG from './../../pages/assets/svg/special-content-computer.svg'

export default function Special10() {
    const contentData = [
        {
          title: "First Features",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur."
        },
        {
          title: "Second Features",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur."
        },
        {
          title: "Third Features",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur."
        },
    ]

    return (
        <div className="flex flex-col lg:flex-row px-8 py-16 lg:p-16 m-auto">
            <div className="flex-1 m-auto mr-0 lg:mr-6">
                <img  src={ComputerSVG} alt="ComputerSVG"></img>
            </div>
            <div className="flex-1 flex flex-col mt-8 lg:mt-0 lg:ml-6">
            {contentData.map((item, index) => (
                <div key={index.toString()} className="flex-1 flex flex-row my-[16px]">
                <div className="flex-1 grow-0 text-blue-self text-3xl mt-[4px] mr-[8px]">
                    <FontAwesomeIcon className="" icon={faCheckCircle}></FontAwesomeIcon>
                </div>
                <div className="flex-1 flex flex-col text-gray-800">
                    <h1 className="text-xl font-bold pt-1">{item.title}</h1>
                    <p className="mt-[8px] mr-[8px]">{item.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    )
}