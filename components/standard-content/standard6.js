export default function Standard6() {
    const conetentData = [
        {
          title: "Feature One",
          description: "Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem.",
        },
        {
          title: "Feature Two",
          description: "Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem.",
        },
        {
          title: "Feature Three",
          description: "Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem.",
        },
      ];
    return (
        <div className="flex flex-col lg:flex-row p-8vw md:p-4vw">
            {conetentData.map((item, index) => (
                <div className="flex-1 p-2vw" key={index.toString()}>
                    <h1 className="text-gray-800 text-3xl leading-tight font-bold m-auto">{item.title}</h1>
                    <p className="text-xl font-normal leading-tight  mx-auto my-4vw md:my-2vw">{item.description}</p>
                </div>
            ))}
        </div>
    )
}