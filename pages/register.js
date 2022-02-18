import Head from 'next/head'
import Header from './../components/register/header'
import Footer from './../components/common/footer'
import Artboard1 from './../components/register/artboard1'
import Artboard2 from './../components/register/artboard2'
import StepWizard from "react-step-wizard";
import LogoMin from './assets/svg/logo-min.svg'

export default function Register() {
    // const []

    return(
        <>
            <Head>
                <title>Register</title>
                <link rel="shortcut icon" href={LogoMin} />
            </Head>

            <Header></Header>
            <StepWizard className="font-montserrat overflow-hidden">
                <Artboard1 step={1}></Artboard1>
                <Artboard2 step={2}></Artboard2>
            </StepWizard>
            <Footer></Footer>
        </>    
    )
}