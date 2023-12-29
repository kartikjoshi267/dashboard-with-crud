"use client"

import React, {useEffect, useState} from 'react';
import useModal from "@/hooks/use-modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import useToast from "@/hooks/use-toast";

const DeleteProjectModal = () => {
    const {isOpen, type, data, onClose} = useModal();
    const {onOpen:onOpenToast} = useToast();

    const onCloseHandler = (e) => {
        onClose();
    }

    const onSubmitHandler = async () => {
        try {
            const {data: project} = await axios.delete(`/api/projects?_id=${data.project.id}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            window.location.reload();
            onClose();
        } catch (error) {
            onOpenToast('Error in deleting project');
        }
    }

    const visible = isOpen && type === 'delete-project-modal';

    if (!visible) {
        return null;
    }

    return (
        <div
            className="fixed top-0 left-0 right-0 z-50 justify-center items-center w-full inset-0 max-h-full bg-[rgba(0,0,0,0.5)]"
            onClick={onCloseHandler}
        >
            <div onClick={e => {
                e.stopPropagation();
            }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-md max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow">
                    {/* Modal header */}
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                        <h3 className="text-xl overflow-hidden font-semibold text-gray-900 mr-5">
                            Do you want to delete?
                        </h3>
                        <button
                            type="button"
                            className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 duration-150 rounded-lg text-sm w-8 h-6 ms-auto inline-flex justify-center items-center"
                            onClick={onCloseHandler}
                        >
                            <FontAwesomeIcon icon={faClose} className={'text-md'}/>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal footer */}
                    <div
                        className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-end">
                        <button
                            type="button"
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-150"
                            onClick={onSubmitHandler}
                        >
                            Yes
                        </button>
                        <button
                            type="button"
                            className="ms-3 text-black bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 duration-150"
                            onClick={onCloseHandler}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProjectModal;