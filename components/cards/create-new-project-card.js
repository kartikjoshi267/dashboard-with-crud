"use client"

import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileCirclePlus} from "@fortawesome/free-solid-svg-icons";
import useModal from "@/hooks/use-modal";

const CreateNewProjectCard = () => {
    const { onOpen } = useModal();
    return (
        <div className={'bg-white p-3 rounded-xl m-2 cursor-pointer group'} onClick={() => onOpen('create-project-modal', {})}>
            <div className={'group-hover:bg-orange-300 duration-150 bg-orange-200 flex items-center justify-center text-3xl text-white rounded-xl'} style={{ aspectRatio: '16/10.7' }}>
                <FontAwesomeIcon icon={faFileCirclePlus}/>
            </div>
            <div className={'text-center mt-2 font-bold'}>Create a new project</div>
        </div>
    );
};

export default CreateNewProjectCard;