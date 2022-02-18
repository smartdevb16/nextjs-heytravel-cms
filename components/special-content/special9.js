export default function Special9() {
    const companyData = [
        {
            title: "246",
            details: "CUSTOMERS",
        },
        {
            title: "33",
            details: "EMPLOYEES",
        },
        {
            title: "16",
            details: "PRODUCTS",
        },
        {
            title: "1",
            details: "PRODUCTS",
        },
    ]
    return (
        <div className="w-full px-8 py-16 md:p-16 m-auto">
            <h1 className="text-5xl text-center">Our Company</h1>
            <p className="w-[300px] sm:w-[480px] text-center m-auto py-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
            </p>
            <div className="w-[320px] md:w-[640px] grid grid-cols-2 md:grid-cols-4 gap-8 text-blue-self m-auto">
                {companyData.map((item, index) => (
                    <div key={index.toString()} className="text-blue-self text-center">
                        <h1 className="text-5xl font-bold">{item.title}</h1>
                        <p className="text-sm">{item.details}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}