import Head from 'next/head'
import LogoMin from './assets/svg/logo-min.svg'
import IndexHeader from './../components/index/header'
import Footer from './../components/common/footer'
import Index1 from "./../components/index/index1"
import Index2 from "./../components/index/index2"
import Index3 from "./../components/index/index3"
import Index4 from "./../components/index/index4"
import Index5 from "./../components/index/index5"
import Index6 from "./../components/index/index6"
import Index7 from "./../components/index/index7"
import Index8 from "./../components/index/index8"
import Index9 from "./../components/index/index9"

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Welcome to Hey Travel</title>
                <link rel="shortcut icon" href={LogoMin} />
            </Head>

            <div className="font-montserrat flex flex-col overflow-hidden">
                <IndexHeader></IndexHeader>

                <div className="divide-y pt-24">
                    <Index1></Index1>
                    <Index2></Index2>
                    <Index3></Index3>
                    <Index4></Index4>
                    <Index5></Index5>
                    <Index6></Index6>
                    <Index7></Index7>
                    <Index8></Index8>
                    <Index9></Index9>
                </div>
                
                <Footer></Footer>
            </div>
        </>
    )
}