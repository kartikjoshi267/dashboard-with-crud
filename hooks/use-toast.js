"use client"
import {create} from "zustand";

const useToast = create((set) => ({
    isOpen: false,
    message: '',
    onOpen: (message) => set({ isOpen: true, message: message }),
    onClose: () => set({ isOpen: false, data: '' }),
}));

export default useToast;