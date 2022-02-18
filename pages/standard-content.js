import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Header from './../components/common/header'
import Footer from './../components/common/footer'
import Standard1 from '../components/standard-content/standard1'
import Standard2 from '../components/standard-content/standard2'
import Standard3 from '../components/standard-content/standard3'
import Standard4 from '../components/standard-content/standard4'
import Standard5 from '../components/standard-content/standard5'
import Standard6 from '../components/standard-content/standard6'
import Standard7 from '../components/standard-content/standard7'
import Standard8 from '../components/standard-content/standard8'
import Standard9 from '../components/standard-content/standard9'
import Standard10 from '../components/standard-content/standard10'
import Standard11 from '../components/standard-content/standard11'
import Standard12 from '../components/standard-content/standard12'
import Standard13 from '../components/standard-content/standard13'

import LogoMin from './assets/svg/logo-min.svg'

export default function StandardContent() {
    return (
        <>
            <Head>
                <title>Standard content</title>
                <link rel="shortcut icon" href={LogoMin} />
            </Head>

            <Header></Header>
            <div className="font-montserrat flex flex-col divide-y pt-24">
                <Standard1></Standard1>
                <Standard2></Standard2>
                <Standard3></Standard3>
                <Standard4></Standard4>
                <Standard5></Standard5>
                <Standard6></Standard6>
                <Standard7></Standard7>
                <Standard8></Standard8>
                <Standard9></Standard9>
                <Standard10></Standard10>
                <Standard11></Standard11>
                <Standard12></Standard12>
                <Standard13></Standard13>
            </div>
            <Footer></Footer>
        </>
        
    )
}