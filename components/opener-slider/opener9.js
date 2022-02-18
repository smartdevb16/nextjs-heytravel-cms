import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselData } from "./../carousel-data"

export default function Opener9() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="w-full px-10vw pt-6vw pb-12vw md:pb-10vw lg:pb-8vw xl:pb-6vw">
            {/* sliders */}
            <div className="w-full h-full relative m-auto">
                <Slider {...settings}>
                    {CarouselData.map((item, index) => (
                        <div key={index} className="">
                            <img className="object-cover" alt={item.title} src={item.imageUrl}></img>
                        </div>
                    ))}
                </Slider>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-70vw md:w-60vw flex flex-col bg-blue-self text-center p-4vw">
                    <h1 className="text-white text-4vw lg:text-5xl xl:text-6xl leading-tight font-bold m-auto">Experience the full potential of prototyping.</h1>
                    <p className="text-white text-2vw font-normal leading-tight  mx-auto my-4vw md:my-2vw">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <button className="border-white rounded-full border bg-blue-self text-white text-4vw md:text-2vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-4vw md:px-2vw py-1.125vw">Call to Action</button>
                </div>
            </div>
        </div>
        
    )
}