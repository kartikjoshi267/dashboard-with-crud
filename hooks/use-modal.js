"use client"
import {create} from "zustand";

const useModal = create((set) => ({
    isOpen: false,
    type: null,
    data: {},
    onOpen: (type, data) => set({ type: type, isOpen: true, data: data }),
    onClose: () => set({ type: null, isOpen: false, data: {} }),
}));

export default useModal;