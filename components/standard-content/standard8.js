import Link from 'next/link'
import HomeLuxo from './../../pages/assets/svg/home-luxo.svg'

export default function Standard8() {
    const content1 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed di voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam et, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est."
    const content2 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."

    return (
        <div className="flex flex-col p-8vw md:p-4vw">
          <div className="flex-1 mb-6">
            <h1 className="text-5xl leading-tight font-bold text-center">THIS IS A HEADLINE</h1>
          </div>
          <div className="flex-1 flex flex-col lg:flex-row">
            <div className="flex-1 flex flex-col m-auto mr-0 lg:mr-6">
              <p className="flex-1 text-xl font-normal leading-tight">{content1}</p>
              <p className="flex-1 text-3xl font-semibold leading-tight py-4">Unsorted list</p>
              <ul className="flex-1 list-disc list-inside text-xl">
                  <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                  <li>At vero eos et accusam et justo duo dolores et ea rebum</li>
                  <li>Justo duo dolores et ea rebum. Stet clita kasd</li>
                  <li>Magna aliquyam erat, sed diam voluptua at vero eos et accus</li>
                  <li>Invidunt ut labore et dolore magna aliquyam erat, sed diam</li>
              </ul>
              <p className="flex-1 text-xl font-normal leading-tight py-4">{content1}</p>
            </div>
            <div className="flex-1 flex flex-col m-auto mr-0 lg:ml-6">
              <div className="grid place-content-center bg-indigo-100 h-30vw">
                <img className="" src={HomeLuxo} alt="HomeLuxo"></img>                           
              </div>
              <p className="flex-1 text-3xl font-semibold leading-tight py-4">Subheadline</p>
              <p className="flex-1 text-xl font-normal leading-tight">{content2}</p>
              <p className="flex-1 text-xl font-normal leading-tight py-4">{content2}</p>
              <Link href="#">
                <a className="flex-1 text-xl font-normal text-indigo-400 hover:text-indigo-600 leading-tight">Additional Link for further Information</a>
              </Link>
            </div>
          </div>
        </div>
    )
}