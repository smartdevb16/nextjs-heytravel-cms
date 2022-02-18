import Link from 'next/link'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CustomPrevArrow from './custom-prev-arrow'
import CustomNextArrow from './custom-next-arrow'
import { CarouselData } from "../carousel-data"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Carousel3() {
    const [currentOver, setCurrentOver] = useState(-1)

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
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
                autoplay: true,
                autoplaySpeed: 3000,
                prevArrow: <CustomPrevArrow></CustomPrevArrow>,
                nextArrow: <CustomNextArrow></CustomNextArrow>,
              }
            },
            {
                breakpoint: 639,
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
    };

    return (
        <div className="w-full flex flex-col p-8 lg:p-12 xl:p-16">
            <div className="flex-1 p-4vw text-center m-auto">
                <h1 className="text-gray-800 text-6vw lg:text-5xl xl:text-6xl leading-tight font-bold m-auto">EXPLORE</h1>
                <p className="text-gray-800 text-2vw font-normal leading-tight mx-auto my-4vw md:my-2vw">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <button className="border-indigo-400 rounded-full border-2 text-indigo-400 text-3.5vw md:text-1.75vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-4vw md:px-2vw py-1.125vw">Call to Action</button>
            </div>
            <div className="flex-1">
                <Slider {...settings}>
                    {CarouselData.map((item, index) => (
                        <div key={index} className="bg-indigo-100 hover:bg-indigo-200 text-center pb-2vw" onMouseEnter={() => setCurrentOver(index)}  onMouseLeave={() => setCurrentOver(-1)}>
                            <img className="object-cover" alt={item.title} src={item.imageUrl}></img>
                            <h1 className="text-gray-800 text-4vw lg:text-3xl leading-normal lg:leading-none font-semibold pt-2vw">{item.title}</h1>
                            <p className="text-gray-800 text-2vw lg:text-lg py-2vw">{item.description}</p>
                            <Link href="#">
                                <a className={classNames(
                                    index === currentOver ? 'bg-blue-self' : '', 'min-w-full text-white text-2vw lg:text-lg px-2vw py-1vw'
                                )} >{index === currentOver ? item.linkTitle : ""}</a>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}