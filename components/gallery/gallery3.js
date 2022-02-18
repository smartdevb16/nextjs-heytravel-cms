
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CustomPrevArrow from './../teaser-carousel/custom-prev-arrow'
import CustomNextArrow from './../teaser-carousel/custom-next-arrow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-regular-svg-icons'

export default function Carousel3() {
    const sliderData = ["", "", "","", "", ""]

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow></CustomPrevArrow>,
        nextArrow: <CustomNextArrow></CustomNextArrow>,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                infinite: true,
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 3000,
                prevArrow: <CustomPrevArrow></CustomPrevArrow>,
                nextArrow: <CustomNextArrow></CustomNextArrow>,
              }
            },
        ]
    };

    return (
        <div className="w-full py-8">
            <Slider {...settings}>
                {sliderData.map((item, index) => (
                    <div key={index} className="relative h-[30vw] border border-gray-600 bg-gray-500">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-4xl md:text-8xl">
                            <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}