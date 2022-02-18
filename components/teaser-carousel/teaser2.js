import Link from 'next/link'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CustomPrevArrow from './custom-prev-arrow'
import CustomNextArrow from './custom-next-arrow'
import { TeaserData } from "../teaser-data"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Teaser2() {
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
            <div className="flex-1 py-4vw m-auto">
                <h1 className="text-gray-800 text-6vw lg:text-5xl xl:text-6xl leading-tight font-bold m-auto">EXPLORE</h1>
                <p className="text-gray-800 text-2vw font-normal leading-tight mx-auto mt-4vw md:mt-2vw">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
            <div className="flex-1 w-full relative">
                <Slider {...settings}>
                    {TeaserData.map((item, index) => (
                        <div key={index} className="bg-gray-800 hover:bg-blue-self text-white pb-2vw" onMouseEnter={() => setCurrentOver(index)}  onMouseLeave={() => setCurrentOver(-1)}>
                            <h1 className="bg-gray-800 text-3.5vw lg:text-3xl leading-normal lg:leading-none font-semibold p-2vw">{item.title}</h1>
                            <img className="object-cover pb-2vw" alt={item.title} src={item.imageUrl}></img>
                            <Link href="#">
                                <a className={classNames(
                                    index === currentOver ? 'bg-blue-self' : '', 'min-w-full text-white text-2vw lg:text-lg px-2vw py-1vw text-center'
                                )} >{index === currentOver ? item.linkTitle : ""}</a>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}