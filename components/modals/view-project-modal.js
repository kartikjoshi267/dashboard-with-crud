"use client"

import React from 'react';
import useModal from "@/hooks/use-modal";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faTrash} from "@fortawesome/free-solid-svg-icons";

const ViewProjectModal = () => {
    const {isOpen, type, data, onClose, onOpen} = useModal();

    const visible = isOpen && type === 'view-project-modal';

    if (!visible) {
        return null;
    }

    return (
        <div
            className="fixed top-0 left-0 right-0 z-50 justify-center items-center w-full inset-0 max-h-full bg-[rgba(0,0,0,0.5)]"
            onClick={onClose}
        >
            <div onClick={e => {
                e.stopPropagation();
            }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-2xl max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow">
                    {/* Modal header */}
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                        <h3 className="text-xl overflow-hidden font-semibold text-gray-900 mr-5">
                            {data.project.name}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 duration-150 rounded-lg text-sm w-8 h-6 ms-auto inline-flex justify-center items-center"
                            onClick={onClose}
                        >
                            <FontAwesomeIcon icon={faClose} className={'text-md'}/>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="flex flex-col p-4 md:p-5 space-y-4 justify-center">
                        <img src={data.image.download_url} alt={data.project.name} style={{aspectRatio: '16/10.7'}}/>
                        <div className={'h-16 overflow-y-scroll break-words border-2 p-2 rounded'}>
                            {data.project.description}
                        </div>
                    </div>
                    {/* Modal footer */}
                    <div
                        className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-between">
                        <div>
                            Author:&nbsp;<span className={'text-orange-400 font-bold'}>{data.project.author}</span>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200"
                                onClick={() => {
                                    const thisData = Object.assign({}, data);
                                    onClose();
                                    onOpen('update-project-modal', thisData);
                                }}
                            >
                                Update
                            </button>
                            <button
                                type="button"
                                className="ms-3 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 duration-200 focus:z-10"
                                onClick={() => {
                                    const thisData = Object.assign({}, data);
                                    onClose();
                                    onOpen('delete-project-modal', thisData);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProjectModal;