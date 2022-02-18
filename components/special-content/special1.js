import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ComputerSVG from './../../pages/assets/svg/special-content-computer.svg'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Carousel1() {
    const specialData = [
        {
            title: "Explore all the features",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        },
        {
            title: "Explore all the features",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        },
        {
            title: "Explore all the features",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        },
        {
            title: "Explore all the features",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
    }

    return (
        <div className="w-full px-8 pt-8 pb-16 lg:p-16">
            <Slider {...settings}>
                {specialData.map((item, index) => (
                    <div key={index.toString()} className="grid grid-cols-1 lg:grid-cols-2 pb-4 special1-content">
                        <div className="place-self-center m-auto mr-0 lg:mr-6">
                            <img className="object-cover" src={ComputerSVG} alt="ComputerSVG"></img>
                        </div>
                        <div className="mt-8 lg:my-auto lg:ml-6">
                            <h1 className="text-5xl">{item.title}</h1>
                            <p className="text-base pt-4">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}