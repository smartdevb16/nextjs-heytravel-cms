import Head from 'next/head'
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import Gallery1 from './../components/gallery/gallery1'
import Gallery2 from './../components/gallery/gallery2'
import Gallery3 from './../components/gallery/gallery3'
import Gallery4 from './../components/gallery/gallery4'

import LogoMin from './assets/svg/logo-min.svg'

export default function Gallery() {
    return (
        <>
            <Head>
                <title>Galleries</title>
                <link rel="shortcut icon" href={LogoMin} />
            </Head>

            <Header></Header>
            <div className=" pt-24">
                <Gallery1></Gallery1>
                <Gallery2></Gallery2>
                <Gallery3></Gallery3>
                <Gallery4></Gallery4>
            </div>
            <Footer></Footer>
        </>
    )
}