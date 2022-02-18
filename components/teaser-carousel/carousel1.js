import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { CarouselData } from "../carousel-data"

export default function Carousel1() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }

    return (
        <div className="w-full flex flex-col md:flex-row p-8 lg:p-12 xl:p-16">
            <div className="flex-1 w-full md:w-1/2 relative">
                <Slider {...settings}>
                    {CarouselData.map((item, index) => (
                        <div key={index} className="">
                            <img className="object-cover" alt={item.title} src={item.imageUrl}></img>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="flex-1 p-4vw text-center m-auto mt-4vw md:mt-0">
                <h1 className="text-gray-800 text-6vw lg:text-5xl xl:text-6xl leading-tight font-bold m-auto">EXPLORE</h1>
                <p className="text-gray-800 text-2vw font-normal leading-tight mx-auto my-4vw md:my-2vw">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <button className="border-indigo-400 rounded-full border-2 text-indigo-400 text-3.5vw md:text-1.75vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-4vw md:px-2vw py-1.125vw">Call to Action</button>
            </div>
        </div>
    )
}