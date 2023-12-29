"use client"
import React from 'react';
import ViewProjectModal from "@/components/modals/view-project-modal";
import CreateProjectModal from "@/components/modals/create-project-modal";
import UpdateProjectModal from "@/components/modals/update-project-modal";
import DeleteProjectModal from "@/components/modals/delete-project-modal";

const ModalProvider = () => {
    return (
        <>
            <ViewProjectModal/>
            <CreateProjectModal/>
            <UpdateProjectModal/>
            <DeleteProjectModal/>
        </>
    );
};

export default ModalProvider;