
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import TodayPicker from './today-picker';

export default class Social1 extends React.Component {
    constructor() {
        super();

        this.state = { winWid: 0};

        this.socialData = [
            {
                description: "At vero eos et accusam et justo duo dolores et",
                linkTitle: "Read more"
            },
            {
                description: "At vero eos et accusam et justo duo dolores et",
                linkTitle: "Read more"
            },
            {
                description: "At vero eos et accusam et justo duo dolores et",
                linkTitle: "Read more"
            },
            {
                description: "At vero eos et accusam et justo duo dolores et",
                linkTitle: "Read more"
            },
        ]
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({winWid: window.innerWidth});
    }

    classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    render() {
        return(
            <div className="w-full flex flex-col lg:flex-row">
                {/* left */}
                <div className="h-[100vw] lg:h-[50vw] flex-1 bg-indigo-200">
                    <div className="w-full h-[100vw] lg:h-[50vw] relative p-8">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-9xl">
                            <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                        </div>
                        <div className="w-full h-full grid grid-cols-1 content-end">
                            <TodayPicker className="w-16 h-16" />
                            <h1 className="w-[320px] text-3xl py-4 z-10">At vero eos et accusam et justo duo dolores et</h1>
                            <Link href="#">
                                <a className="text-blue-self block">Read more</a>
                            </Link>
                        </div>
                        
                    </div>
                </div>
                {/* right */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
                    {this.socialData.map((item, index) => {
                        let bgColor = ""
                        if(this.state.winWid < 1024){ // less than lg
                            bgColor = index % 2 === 0 ? "" : "bg-indigo-100"
                        } else { // more than lg
                            bgColor = parseInt((index % 2 + index / 2) % 2) === 0 ? "" : "bg-indigo-100"
                        }
                        
                        return(
                            <div key={index.toString()} className={this.classNames(bgColor, "w-full h-full flex flex-row lg:flex-col p-8")}>
                                <div className="flex-1 grow-0 lg:grow"></div>
                                <div className='flex-1 grow-0 mr-4'>
                                    <TodayPicker className="w-16 h-16"></TodayPicker>
                                </div>
                                <div className='flex-1 grow lg:grow-0 flex flex-col text-left'>
                                    <h1 className="text-xl pb-4 lg:py-2">{item.description}</h1>
                                    <Link href="#">
                                        <a className="text-base text-blue-self">{item.linkTitle}</a>
                                    </Link>
                                </div>
                                <div className="flex-1 grow-0"></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}