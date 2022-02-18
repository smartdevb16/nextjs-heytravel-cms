import Head from 'next/head'

import Header from '../components/common/header'
import Footer from '../components/common/footer'
import Special1 from '../components/special-content/special1'
import Special2 from '../components/special-content/special2'
import Special3 from '../components/special-content/special3'
import Special4 from '../components/special-content/special4'
import Special5 from '../components/special-content/special5'
import Special6 from '../components/special-content/special6'
import Special7 from '../components/special-content/special7'
import Special8 from '../components/special-content/special8'
import Special9 from '../components/special-content/special9'
import Special10 from '../components/special-content/special10'
import LogoMin from './assets/svg/logo-min.svg'

export default function SpecialContent1() {   
    return (
        <>
            <Head>
                <title>Special content</title>
                <link rel="shortcut icon" href={LogoMin} />
            </Head>

            <Header></Header>
            <div className="font-montserrat divide-y pt-24">
                <Special1></Special1>
                <Special2></Special2>
                <Special3></Special3>
                <Special4></Special4>
                <Special5></Special5>
                <Special6></Special6>
                <Special7></Special7>
                <Special8></Special8>
                <Special9></Special9>
                <Special10></Special10>
            </div>

            {/* timeline */}
            <Footer></Footer>
        </>
        
    )
}