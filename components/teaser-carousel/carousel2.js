import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CustomPrevArrow from './custom-prev-arrow'
import CustomNextArrow from './custom-next-arrow'
import { CarouselData } from "../carousel-data"

export default function Carousel2() {
    const settings = {
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
              breakpoint: 767,
              settings: {
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
    }

    return (
        <div className="w-full flex flex-col lg:flex-row bg-indigo-100 p-8 lg:p-12 xl:p-16">
            <div className="flex-1 p-4vw text-center m-auto">
                <h1 className="text-gray-800 text-6vw lg:text-5xl xl:text-6xl leading-tight font-bold m-auto">EXPLORE</h1>
                <p className="text-gray-800 text-2vw font-normal leading-tight mx-auto my-4vw md:my-2vw">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <button className="border-indigo-400 rounded-full border-2 text-indigo-400 text-3.5vw md:text-1.75vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-4vw md:px-2vw py-1.125vw">Call to Action</button>
            </div>
            <div className="flex-1 w-full lg:w-1/2 relative bg-indigo-100">
                <Slider {...settings}>
                    {CarouselData.map((item, index) => (
                        <div key={index} className="bg-white pb-2vw drop-shadow-md">
                            <img className="object-cover" alt={item.title} src={item.imageUrl}></img>
                            <h1 className="text-gray-800 text-center text-4vw lg:text-3xl leading-normal lg:leading-none font-semibold pt-2vw">{item.title}</h1>
                            <p className="text-gray-800 text-2vw lg:text-lg p-2vw">{item.description}</p>
                            <Link href="#">
                                <a className="text-blue-self text-2vw lg:text-lg px-2vw">{item.linkTitle}</a>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}