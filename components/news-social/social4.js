import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TodayPicker from './today-picker';

export default function Social4() {
    const socialData = [
        {
            title: "News headline 1",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonueirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed.",
            linkTitle: "Read more"
        },
        {
            title: "News headline 2",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonueirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed.",
            linkTitle: "Read more"
        },
        {
            title: "News headline 3",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonueirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed.",
            linkTitle: "Read more"
        },
        {
            title: "News headline 4",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonueirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed.",
            linkTitle: "Read more"
        },
        
        {
            title: "News headline 5",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonueirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed.",
            linkTitle: "Read more"
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                dots: true,
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
        <div className="w-full p-8 pb-16 lg:p-16">
            <Slider {...settings}>
                {socialData.map((item, index) => (
                    <div key={index.toString()} className="flex flex-col px-4 pb-4">
                        <TodayPicker className="w-16 h-16" />
                        <h1 className="text-4xl pt-8">{item.title}</h1>
                        <p className="text-xl pb-4 lg:py-2">{item.description}</p>
                        <Link href="#">
                            <a className="text-base text-blue-self">{item.linkTitle}</a>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    )
}