import Head from 'next/head'
import Header from './../components/common/header'
import Footer from './../components/common/footer'
import Contact1 from './../components/contact-form/contact1'
import Contact2 from './../components/contact-form/contact2'
import Contact3 from './../components/contact-form/contact3'
import Contact4 from './../components/contact-form/contact4'
import Contact5 from './../components/contact-form/contact5'
import Contact6 from './../components/contact-form/contact6'
import Contact7 from './../components/contact-form/contact7'
import Contact8 from './../components/contact-form/contact8'
import Contact9 from './../components/contact-form/contact9'

import LogoMin from './assets/svg/logo-min.svg'

export default function ContactForm() {
    return (
        <>
            <Head>
                <title>Contact forms</title>
                <link rel="shortcut icon" href={LogoMin} />
            </Head>

            <Header></Header>
            <div className="divide-y pt-24">
                <Contact1></Contact1>
                <Contact2></Contact2>
                <Contact3></Contact3>
                <Contact4></Contact4>
                <Contact5></Contact5>
                <Contact6></Contact6>
                <Contact7></Contact7>
                <Contact8></Contact8>
                <Contact9></Contact9>
            </div>
            <Footer></Footer>
        </>
    )
}