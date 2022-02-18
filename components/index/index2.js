
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Paragraph1() {
    const contents = [
        { title: 'Investors', description: 'Interested in becoming a HeyTravel investor? Click here request access to the deal or login to the investor portal.', button: 'Invest' },
        { title: 'Beta Airports', description: 'Be an innovator in the Airport Parking Industry. HeyTravel is offering exclusive beta partnerships to select airports. Beta airports get early access and preferred pricing.', button: 'Learn More' },
    ]

    return (
        <div>
            <div className="mx-4vw my-8vw md:m-4vw text-center md:flex md:flex-row">
                { contents.map((item, index) => (
                    <div className={classNames(index === 0 ? "bg-gray-800" : "bg-indigo-300", "m-4vw p-4vw md:leading-none md:text-center flex flex-col flex-1")} key={index}>
                        <h1 className="text-white text-5vw md:text-4vw leading-normal md:leading-none font-normal md:mx-auto md:my-0">{item.title}</h1>
                        <p className="text-white text-3vw md:text-1.75vw font-normal leading-normal my-3vw md:grow">{item.description}</p>
                        <button className="rounded-full border text-white text-4vw md:text-2vw font-normal leading-tight w-40vw md:w-20vw mx-auto px-8vw md:px-2vw py-1.125vw">{item.button}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}