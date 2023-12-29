import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
    return (
        <div className={'bg-white w-full p-4 flex justify-end gap-x-2'}>
            <div className={'flex flex-col gap-y-1'}>
                <div className={'flex text-xs gap-x-2 items-center'}>
                    <p className={'font-bold text-sm'}>Free Trial</p>
                    <p className={'font-bold text-sm'}>|</p>
                    <p>2 days left</p>
                </div>
                <div className={'text-orange-400 text-xs'}>
                    Extend free trial
                </div>
            </div>
            <div className={'flex justify-center items-center gap-x-2'}>
                <Image src={'/avatar.png'} alt={'avatar'} width={40} height={10} className={'rounded-full bg-blue-600'}/>
                <FontAwesomeIcon icon={faCaretDown}/>
            </div>
        </div>
    )
}

export default Topbar;