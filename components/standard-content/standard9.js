import CustomTabbar from "../custom-tabbar"

export default function Standard9() {
  const tabList = ['Tab One', 'Tab Two', 'Tab Three']
  const tabBtnStyles = {
      active: 'bg-blue-self text-white',
      inactive: 'text-blue-self'
  }

  const featureData = [
    {
      title: "First Feature",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    },
    {
      title: "Second  Feature",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    },
    {
      title: "Third  Feature",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    },
    {
      title: "Fourth  Feature",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    }
  ]
  
  return (
    <div className="flex flex-col p-8vw md:p-4vw">
      <div className="flex-1">
        <h1 className="text-5xl leading-tight font-bold text-center">Features</h1>
      </div>
      <div className="flex-1 m-8">
        <CustomTabbar tabList={tabList} tabBtnStyles={tabBtnStyles}></CustomTabbar>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-6">
          {featureData.map((item, index) => (
            <div key={index.toString()} className="flex flex-col">
              <h1 className="text-3xl font-semibold leading-tight py-4">{item.title}</h1>
              <p className="text-xl font-normal leading-tight">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}