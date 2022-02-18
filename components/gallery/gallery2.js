import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

export default function Carousel4() {
    const sliderData = ["", "", ""]
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "120px",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                className: "center",
                centerMode: true,
                centerPadding: "90px",
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 3000,
              }
            },
            {
                breakpoint: 767,
                settings: {
                  className: "center",
                  centerMode: true,
                  centerPadding: "60px",
                  infinite: true,
                  speed: 1000,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: false,
                  autoplaySpeed: 3000,
                }
              },
        ]
    }

    return (
        <div className="w-full py-8">
            <Slider {...settings}>
                {sliderData.map((item, index) => (
                    <div key={index} className="">
                        <div className='h-[30vw] bg-gray-500 mx-4 relative'>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-8xl">
                                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}