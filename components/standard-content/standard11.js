import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

export default function Standard11() {
    const quoteData = [
      {
        title: "First Feature",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      },
      {
        title: "Second  Feature",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      },
    ]

    return (
        <div className="w-full p-16">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 pr-0 md:pr-8">
                <div className="flex flex-col text-blue-self text-center">
                  <div className="flex-1 flex flex-row">
                    <div className="flex-1 self-center blur text-6xl">
                      <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                    </div>
                    <div className="flex-1 text-10rem">
                      <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                      
                    </div>
                  </div>
                  <div className="flex-1 grow blur-sm text-8xl pr-12">
                    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col pl-0 md:pl-8 pt-8 md:pt-0">
                {quoteData.map((item, index) => (
                  <div className="flex-1" key={index.toString()}>
                    <h1 className="text-3xl font-semibold leading-tight py-4">{item.title}</h1>
                    <p className="text-xl font-normal leading-tight">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
    )
}