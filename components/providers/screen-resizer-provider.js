"use client";
import {createContext, useContext, useState, useEffect} from "react";

const screenResizeContext = createContext(null);

export const ScreenResizerProvider = ({children}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const handleScreenSizeChange = () => {
        if (document.documentElement.clientWidth <= 650) {
            setIsVisible(false);
            setIsMobile(true);
        } else {
            setIsMobile(false);
            setIsVisible(true);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleScreenSizeChange);
        return () => window.removeEventListener('resize', handleScreenSizeChange);
    }, []);

    useEffect(() => {
        handleScreenSizeChange();
    }, []);

    return (
        <screenResizeContext.Provider value={{ isMobile, isVisible, setIsVisible, setIsMobile }}>
            {children}
        </screenResizeContext.Provider>
    )
}

export const useScreenResizer = () => {
    return useContext(screenResizeContext);
}