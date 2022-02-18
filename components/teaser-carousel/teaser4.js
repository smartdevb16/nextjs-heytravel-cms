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

export default function Teaser4() {
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
        rows: 2,
        slidesPerRow: 2,
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
            <div className="flex-1 py-4vw">
                <h1 className="text-gray-800 text-6vw lg:text-5xl xl:text-6xl leading-tight font-bold m-auto">EXPLORE</h1>
            </div>
            <div className="flex-1 w-full relative">
                <Slider {...settings}>
                    {TeaserData.map((item, index) => (
                        <div key={index} className="bg-gray-800 hover:bg-blue-self text-white pb-2vw" onMouseEnter={() => setCurrentOver(index)}  onMouseLeave={() => setCurrentOver(-1)}>
                            <img className="object-cover" alt={item.title} src={item.imageUrl}></img>
                            <div className="bg-gray-800 hover:bg-blue-self text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-45vw lg:w-30vw xl:w-25vw pb-2vw">
                                <h1 className="text-center text-3.5vw lg:text-xl leading-normal lg:leading-none font-semibold px-2vw pt-2vw">{item.title}</h1>
                                <p className="text-2vw lg:text-sm leading-none p-2vw">{item.description}</p>
                                <Link href="#">
                                    <a className="border-white rounded-full border-2 min-w-full text-white text-2vw lg:text-lg px-2vw py-0.5vw">{item.linkTitle}</a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}