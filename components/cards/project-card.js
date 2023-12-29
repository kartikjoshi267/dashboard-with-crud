"use client"

import React from 'react';
import useModal from "@/hooks/use-modal";

const ProjectCard = ({project, image}) => {
    const { onOpen } = useModal();

    return (
        <div className={'bg-white p-3 rounded-xl m-2 cursor-pointer transition-transform hover:scale-105 duration-200'} onClick={() => {
            if (image)
                onOpen('view-project-modal', {project, image})
        }}>
            {
                image ? (
                    <img src={image.download_url} alt={project.name}
                         className={'bg-gray-200 flex items-center justify-center text-4xl text-white rounded-xl w-full'} style={{ aspectRatio: '16/10.7' }}/>
                ) : (
                    <div
                        className={'animate-pulse bg-gray-300 w-full rounded-xl'} style={{ aspectRatio: '16/10.7' }}>
                    </div>
                )
            }
            <div className={'text-center mt-2 font-bold text-wrap overflow-hidden'}>{project.name}</div>
            <div className={'text-center mt-2'}><span className={'font-serif text-orange-400'}>{project.author}</span></div>
        </div>
    );
};

export default ProjectCard;