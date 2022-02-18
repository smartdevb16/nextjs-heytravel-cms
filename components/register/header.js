import Link from 'next/link'
import Image from 'next/image'

import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

import LogoMin from './../../pages/assets/svg/logo-min.svg'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FirstHeader() {
    const [current, setCurrent] = useState(-1)

    return (
        <Disclosure as="nav" className="fixed z-50 w-full h-24 bg-white border-b-2 border-gray-100">
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-6 xl:px-8 h-full">
                    <div className="relative flex items-center justify-between h-full">
                        <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-neutral-800 focus:ring-neutral-400 focus:ring-2 focus:ring-inset">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                            )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <div className="relative items-center inline-block h-auto font-black leading-none">
                                    <Link href="/">
                                        <a>
                                            {/* <img className="h-16 w-auto" src={LogoMin} /> */}
                                            <Image src={LogoMin} alt="LogoMin" width={258} height={64}></Image>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden lg:block lg:ml-4 flex-1">
                                <div className="flex lg:space-x-1 xl:space-x-4 my-3">
                                    <div className="flex-grow"></div>
                                    <Link href="/login">
                                        <a className="justify-items-end rounded-full text-base font-medium text-white bg-blue-self px-10 py-2 shadow-md fold-bold hover:shadow-xl">Login</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu button*/}
                <Disclosure.Panel className="lg:hidden border-t-2 border-gray-100 bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="/login">
                            <a className="block rounded-full text-base font-medium text-white bg-blue-self px-6 py-2 shadow-md fold-bold hover:shadow-xl">Login</a>
                        </Link>
                    </div>
                </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    )
}