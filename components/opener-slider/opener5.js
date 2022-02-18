import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselData } from "./../carousel-data"

export default function Opener5() {
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
        <div className="w-full px-10vw pt-6vw pb-12vw md:pb-10vw lg:pb-8vw xl:6vw">
            {/* sliders */}
            <div className="w-full h-full relative m-auto">
                <Slider {...settings}>
                    {CarouselData.map((item, index) => (
                        <div key={index} className="">
                            <img className="object-cover" alt={item.title} src={item.imageUrl}></img>
                        </div>
                    ))}
                </Slider>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
                    <h1 className="text-center text-white text-9vw md:text-6vw lg:text-6xl leading-normal font-bold m-auto">Welcome to Luxo</h1>
                    <button className="rounded-full bg-indigo-400 text-white text-4vw md:text-2vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-4vw md:px-2vw py-1.125vw my-4vw">Call to Action</button>
                </div>
            </div>
        </div>
        
    )
}