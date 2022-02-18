import React from 'react'
import Head from 'next/head'

import LogoMin from './assets/svg/logo-min.svg'

import Header from '../components/common/header'
import Footer from '../components/common/footer'

import Carousel1 from '../components/teaser-carousel/carousel1'
import Carousel2 from '../components/teaser-carousel/carousel2'
import Caruosel3 from '../components/teaser-carousel/carousel3'
import Carousel4 from '../components/teaser-carousel/carousel4'
import Carousel5 from '../components/teaser-carousel/carousel5'
import Caruosel6 from '../components/teaser-carousel/carousel6'
import Teaser1 from '../components/teaser-carousel/teaser1'
import Teaser2 from '../components/teaser-carousel/teaser2'
import Teaser3 from '../components/teaser-carousel/teaser3'

export default function TeaserAndCarousel() {
    return (
        <>
            <Head>
                <title>Teaser & carousels</title>
                <link rel="shortcut icon" href={LogoMin} />
            </Head>

            <Header></Header>
            <div className="font-montserrat pt-24">
                <Carousel1></Carousel1>
                <Carousel2></Carousel2>
                <Caruosel3></Caruosel3>
                <Carousel4></Carousel4>
                <Carousel5></Carousel5>
                <Caruosel6></Caruosel6>
                <Teaser1></Teaser1>
                <Teaser2></Teaser2>
                <Teaser3></Teaser3>
            </div>
            <Footer></Footer>
        </>
    )
}