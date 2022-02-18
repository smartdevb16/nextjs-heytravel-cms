import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Special5() {
    const teamData = [
        {
            employeeName: "EMPLOYEE ONE",
            jobTitle: "JOB TITLE",
            jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
        },
        {
            employeeName: "EMPLOYEE TWO",
            jobTitle: "JOB TITLE",
            jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
        },
        {
            employeeName: "EMPLOYEE THREE",
            jobTitle: "JOB TITLE",
            jobDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
        },
    ]

    const settings = {
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    dots: true,
                    infinite: false,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 3000,
                }
              },
        ]
    };

    return (
        <div className="px-8 py-16 md:p-16 m-auto">
            <h1 className="text-5xl text-center">Our Team</h1>
            <p className="text-center w-auto md:w-[40vw] m-auto p-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
            </p>
            <div className="flex-1 w-full relative">
                <Slider {...settings}>
                    {teamData.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="text-indigo-100 text-[10rem]">
                                <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                            </div>
                            <h1 className="text-2xl font-semibold pt-8">{item.employeeName}</h1>
                            <h3 className="text-xl pt-4">{item.jobTitle}</h3>
                            <p className="w-[300px] sm:w-[480px] lg:w-full m-auto text-xl py-4">{item.jobDescription}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}