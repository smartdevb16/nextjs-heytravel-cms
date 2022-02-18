import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CustomPrevArrow from './custom-prev-arrow'
import CustomNextArrow from './custom-next-arrow'
import { CarouselData } from "../carousel-data"

export default function Carousel6() {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "120px",
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow></CustomPrevArrow>,
        nextArrow: <CustomNextArrow></CustomNextArrow>,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                className: "center",
                centerMode: true,
                centerPadding: "90px",
                infinite: true,
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                prevArrow: <CustomPrevArrow></CustomPrevArrow>,
                nextArrow: <CustomNextArrow></CustomNextArrow>,
              }
            },
            {
                breakpoint: 639,
                settings: {
                className: "center",
                centerMode: true,
                centerPadding: "60px",
                  infinite: true,
                  speed: 1000,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 3000,
                  prevArrow: <CustomPrevArrow></CustomPrevArrow>,
                  nextArrow: <CustomNextArrow></CustomNextArrow>,
                }
              },
        ]
    };

    return (
        <div className="w-full flex flex-col p-8 lg:p-12 xl:p-16 bg-indigo-100 carousel6">
            <Slider {...settings}>
                {CarouselData.map((item, index) => (
                    <div key={index} className="relative bg-indigo-100 hover:bg-indigo-200 text-center pb-2vw">
                        <img className="object-cover" alt={item.title} src={item.imageUrl}></img>
                        <h1 className="text-gray-800 text-4vw lg:text-3xl leading-normal lg:leading-none font-semibold pt-2vw">{item.title}</h1>
                        <p className="text-gray-800 text-2vw lg:text-lg p-2vw">{item.description}</p>
                        <Link href="#">
                            <a className="text-blue-self min-w-full text-2vw lg:text-lg mt-2vw px-2vw py-1vw">{item.linkTitle}</a>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    )
}