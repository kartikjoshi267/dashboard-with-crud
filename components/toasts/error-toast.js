"use client"
import React, {useEffect} from "react";
import useToast from "@/hooks/use-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

const ErrorToast = () => {
    const {isOpen, message, onClose} = useToast();

    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 2000);
        return () => clearTimeout(timeout);
    });

    if (!isOpen){
        return null;
    }

    return (
        <div
            className="fixed z-10 top-10 left-1/2 -translate-x-1/2 max-w-xs border border-gray-200 rounded-xl shadow-lg bg-red-500 opacity-90" role="alert">
            <div className="flex p-4 items-center">
                <div className="me-3">
                    <p className="text-sm text-white">
                        {message}
                    </p>
                </div>
                <div className="text-white bg-red-800 hover:bg-red-900 duration-100 px-1.5 rounded-full cursor-pointer" onClick={onClose}>
                    <FontAwesomeIcon icon={faClose}/>
                </div>
            </div>
        </div>
    )
}

export default ErrorToast;