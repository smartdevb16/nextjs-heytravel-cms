import 'react-calendar/dist/Calendar.css';
import Head from 'next/head'
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import Social1 from './../components/news-social/social1'
import Social2 from './../components/news-social/social2'
import Social3 from './../components/news-social/social3'
import Social4 from './../components/news-social/social4'
import Social5 from './../components/news-social/social5'
import Social6 from './../components/news-social/social6'
import Social7 from './../components/news-social/social7'
import Social8 from './../components/news-social/social8'

import LogoMin from './assets/svg/logo-min.svg'

export default function NewsSocial() {
    return (
        <>
            <Head>
                <title>News, social hub, blog</title>
                <link rel="shortcut icon" href={LogoMin} />
            </Head>

            <Header></Header>
            <div className="divide-y pt-24">
                <Social1></Social1>
                <Social2></Social2>
                <Social3></Social3>
                <Social4></Social4>
                <Social5></Social5>
                <Social6></Social6>
                <Social7></Social7>
                <Social8></Social8>
            </div>
            <Footer></Footer>
        </>
    )
}