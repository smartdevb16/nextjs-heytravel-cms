import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Standard13() {
  const contentData = [
    {
      title: "FIRST SHORT DESCRIPTION",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
    },
    {
      title: "SECOND SHORT DESCRIPTION",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
    },
    {
      title: "THIRD SHORT DESCRIPTION",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
    },
  ]
  return (
    <div className="w-full flex flex-col p-16">
      <div className="flex-1">
        <h1 className="text-5xl leading-tight font-bold text-center pb-8">Impressions</h1>
      </div>
      <div className="flex-1">
        <div className="grid place-content-center w-[50vw] h-[30vw] mx-auto bg-indigo-100 text-blue-self text-8xl">
          <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col md:flex-row mt-[16px]">
          {contentData.map((item, index) => (
            <div key={index.toString()} className="flex-1 flex flex-row my-[16px]">
              <div className="flex-1 grow-0 mt-[4px] mr-[8px]">
                <FontAwesomeIcon className="" icon={faCheck}></FontAwesomeIcon>
              </div>
              <div className="flex-1 flex flex-col text-gray-800">
                <h1 className="text-xl font-bold uppercase">{item.title}</h1>
                <p className="mt-[8px] mr-[8px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 text-center">
        <button className="border-blue-self rounded-full border-2 bg-blue-self text-white text-xl font-normal leading-tight w-40vw md:w-20vw mx-auto mt-[16px] px-4vw md:px-2vw py-1.125vw">Discover more</button>
      </div>
    </div>
  )
}