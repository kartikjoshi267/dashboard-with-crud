"use client"

import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
    faClover,
    faDatabase,
    faMessage,
    faPlayCircle,
    faQuestionCircle,
    faSquareCaretUp,
    faTh
} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {useScreenResizer} from "@/components/providers/screen-resizer-provider";

const Sidebar = () => {
    const {isMobile, isVisible, setIsVisible} = useScreenResizer();

    if (!isVisible) {
        return (
            <FontAwesomeIcon icon={faBars}
                             className={'text-[20px] my-5 mx-2 absolute px-1 py-0.5 bg-zinc-400 text-white rounded cursor-pointer hover:bg-zinc-500 duration-150'}
                             onClick={() => setIsVisible(!isVisible)}/>
        )
    }

    return (
        <>
            <div
                className={`${isMobile ? "w-full absolute" : "w-56 fixed"} flex flex-col justify-between items-stretch h-screen p-3 text-[16px] text-zinc-400 font-semibold bg-white`}>
                <div>
                    <Image src={'/logo.png'} alt={'Logo'} width={80} height={20} className={'mx-auto m-3'}/>
                    <hr/>
                    <div className={'m-5 flex flex-col gap-y-5'}>
                        <div className={'flex gap-x-2 cursor-pointer hover:text-orange-400 duration-200 items-center'}>
                            <FontAwesomeIcon icon={faDatabase} width={'16px'}/>
                            <div>My Projects</div>
                        </div>
                        <div className={'flex gap-x-2 cursor-pointer hover:text-orange-400 duration-200 items-center'}>
                            <FontAwesomeIcon icon={faClover} width={'16px'} className={'rotate-45'}/>
                            <div>Sample Projects</div>
                        </div>
                    </div>
                    <hr/>
                    <div className={'m-5 flex flex-col gap-y-5'}>
                        <div className={'flex gap-x-2 cursor-pointer hover:text-orange-400 duration-200 items-center'}>
                            <FontAwesomeIcon icon={faTh} width={'16px'}/>
                            <div>Apps</div>
                        </div>
                        <div className={'flex gap-x-2 cursor-pointer hover:text-orange-400 duration-200 items-center'}>
                            <FontAwesomeIcon icon={faPlayCircle} width={'16px'}/>
                            <div>Intro to Necleo</div>
                        </div>
                    </div>
                </div>
                <div className={'m-5 flex flex-col gap-y-5'}>
                    <div className={'flex gap-x-2 cursor-pointer hover:text-orange-400 duration-200 items-center'}>
                        <FontAwesomeIcon icon={faQuestionCircle} width={'16px'}/>
                        <div>Help & Support</div>
                    </div>
                    <div className={'flex gap-x-2 cursor-pointer hover:text-orange-400 duration-200 items-center'}>
                        <FontAwesomeIcon icon={faMessage} width={'16px'}/>
                        <div>Feedback</div>
                    </div>
                    <div className={'text-black flex gap-x-2 cursor-pointer items-center'}
                         onClick={() => setIsVisible(!isVisible)}>
                        <FontAwesomeIcon icon={faSquareCaretUp} className={'-rotate-90'} width={'16px'}/>
                        <div>Collapse</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;