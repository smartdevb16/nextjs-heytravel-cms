import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

export default function Standard7() {
    const conetentData = [
        {
          title: "Feature One",
          description: "Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
        },
        {
          title: "Feature Two",
          description: "Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
        },
        {
          title: "Feature Three",
          description: "Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
        },
      ];
    return (
        <div className="flex flex-col lg:flex-row p-8vw md:p-4vw">
            {conetentData.map((item, index) => (
                <div className="flex-1 p-2vw" key={index.toString()}>
                    <div className="text-7xl text-center">
                      <FontAwesomeIcon className="text-blue-self" icon={faCheckCircle}></FontAwesomeIcon>
                    </div>
                    <h1 className="text-gray-800 text-3xl leading-tight font-bold text-center mt-6">{item.title}</h1>
                    <p className="text-xl font-normal leading-tight mx-auto my-4vw md:my-2vw">{item.description}</p>
                </div>
            ))}
        </div>
    )
}