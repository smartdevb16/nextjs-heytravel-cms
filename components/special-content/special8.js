import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Special8() {
    const teamData = [
        {
            title: "Hello Let's take a tour!",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        },
        {
            title: "Hello Let's take a tour!",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        },
        {
            title: "Hello Let's take a tour!",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        },
        {
            title: "Hello Let's take a tour!",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        },
        {
            title: "Hello Let's take a tour!",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        },
    ]

    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    return (
        <div className="px-8 py-16 md:p-16">
            <Slider {...settings}>
                {teamData.map((item, index) => (
                    <div key={index} className="grid place-items-center text-center">
                        <div className="text-indigo-100 text-[10rem]">
                            <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                        </div>
                        <h1 className="text-4xl  font-semibold pt-8">{item.title}</h1>
                        <p className="w-full sm:w-[480px] md:w-[600px] m-auto text-xl pt-4">{item.description}</p>
                        <button className="border-blue-self rounded-full border-2 bg-blue-self text-white text-xl font-normal leading-tight w-48 mx-auto my-4 px-4vw md:px-2vw py-1.125vw">Start now</button>
                    </div>
                ))}
            </Slider>
        </div>
    )
}