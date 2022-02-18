import HomeLuxo from './../../pages/assets/svg/home-luxo.svg'

export default function Standard12() {
  return (
    <div className="w-full h-[125vw] sm:h-[100vw] md:h-[90vw] lg:h-[75vw] p-16 xl:p-24">
      <h1 className="text-5xl leading-tight font-bold text-center pb-8">Impressions</h1>
      <div className="relative">
        <div className="absolute w-[55vw] h-[36vw] grid place-content-center bg-indigo-100">
          <img className="" src={HomeLuxo} alt="HomeLuxo"></img>                           
        </div>
        <div className="absolute w-[29vw] h-[37vw] left-[52vw] top-[11vw] grid place-content-center bg-indigo-200">
          <img className="" src={HomeLuxo}></img>
        </div>
        <div className="absolute w-[30vw] h-[21.5vw] left-[27.5vw] top-[32vw] grid place-content-center bg-indigo-300">
          <img className="" src={HomeLuxo}></img>
        </div>
        <div className="absolute w-full lg:w-[25vw] top-[60vw] lg:top-[40vw]">
          <p className="text-lg lg:text-xl font-normal leading-tight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>
      </div>
  </div>
  )
}