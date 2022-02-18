import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export default function Standard10() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000
    }

    const quoteData = [
      {
        title: "First Feature",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
      },
      {
        title: "Second  Feature",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
      },
      {
        title: "Third  Feature",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
      },
    ]

    return (
        <div className="w-full p-16">
            <Slider {...settings}>
                {quoteData.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="flex-1 text-7xl text-center">
                          <FontAwesomeIcon className="text-blue-self" icon={faQuoteRight}></FontAwesomeIcon>
                        </div>
                        <h1 className="text-center text-3xl font-normal leading-tight m-auto w-auto md:w-128  md:py-4 ">{item.description}</h1>
                    </div>
                ))}
            </Slider>
        </div>
    )
}