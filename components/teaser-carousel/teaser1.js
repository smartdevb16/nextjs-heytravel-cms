import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { TeaserData } from "../teaser-data"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Teaser1() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
              }
            },
        ]
    }

    return (
        <div className="w-full p-8 lg:p-12 xl:p-16">
            <Slider {...settings}>
                {TeaserData.map((item, index) => (
                    <div key={index} className="text-white text-center drop-shadow-md relative">
                        <img className="object-cover" alt={item.title} src={item.imageUrl}></img>
                        <div className={classNames(index % 2 === 0 ? "bg-gray-800" : "bg-blue-self", "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-50vw lg:w-36vw pb-2vw")}>
                            <h1 className="text-center text-4vw lg:text-3xl leading-normal lg:leading-none font-semibold pt-2vw">{item.title}</h1>
                            <p className="text-2vw lg:text-lg p-2vw">{item.description}</p>
                            <Link href="#">
                                <a className="border-white rounded-full border-2 min-w-full text-white text-2vw lg:text-lg px-2vw py-1vw">{item.linkTitle}</a>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}