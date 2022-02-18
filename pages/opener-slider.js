import Head from 'next/head'
import Header from './../components/common/header'
import Footer from './../components/common/footer'
import Opener1 from './../components/opener-slider/opener1'
import Opener2 from './../components/opener-slider/opener2'
import Opener3 from './../components/opener-slider/opener3'
import Opener4 from './../components/opener-slider/opener4'
import Opener5 from './../components/opener-slider/opener5'
import Opener6 from './../components/opener-slider/opener6'
import Opener7 from './../components/opener-slider/opener7'
import Opener8 from './../components/opener-slider/opener8'
import Opener9 from './../components/opener-slider/opener9'

import LogoMin from './assets/svg/logo-min.svg'

export default function OpenerAndSlider() {

    return (
        <>
            <Head>
                <title>Opener & slider</title>
                <link rel="shortcut icon" href={LogoMin} />
            </Head>

            <Header></Header>
            <div className="flex flex-col overflow-hidden pt-24 divide-y">
                <Opener1></Opener1>
                <Opener2></Opener2>
                <Opener3></Opener3>
                <Opener4></Opener4>
                <Opener5></Opener5>
                <Opener6></Opener6>
                <Opener7></Opener7>
                <Opener8></Opener8>
                <Opener9></Opener9>
            </div>
            <Footer></Footer>
        </>
        
    )
}