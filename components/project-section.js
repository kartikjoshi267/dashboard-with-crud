"use client"

import React, {useEffect, useState} from 'react';
import CreateNewProjectCard from "@/components/cards/create-new-project-card";
import axios from "axios";
import ProjectCard from "@/components/cards/project-card";
import generateRandomImages from "@/lib/generate-random-images";
import {useScreenResizer} from "@/components/providers/screen-resizer-provider";
import useToast from "@/hooks/use-toast";

const ProjectSection = () => {
    const {isVisible} = useScreenResizer();
    const [projects, setProjects] = useState([]);
    const [srcs, setSrcs] = useState([]);
    const [loading, setLoading] = useState(false);
    const {onOpen} = useToast();

    const getProjects = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('/api/projects/');
            setTimeout(() => {
                setProjects(data);
                setLoading(false);
            }, 1000);
        } catch (error) {
            onOpen('Error in fetching projects');
            setLoading(false);
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    useEffect(() => {
        const getRandomImages = async () => {
            try {
                setSrcs(await generateRandomImages(projects.length));
            } catch (error) {
                onOpen('Error in fetching images');
            }
        }
        if (projects)
            getRandomImages();
    }, [projects]);

    return (
        <div className={`${isVisible && 'ml-56'} p-12`}>
            <h1 className={'font-bold text-4xl'}>My Projects</h1>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6`}>
                <CreateNewProjectCard/>
                {
                    !loading ? (
                        <>
                            {projects.map((project, index) => (
                                <ProjectCard project={project} key={project._id} image={srcs[index]}/>
                            ))}
                        </>
                    ) : (
                        <>
                            <div className="animate-pulse bg-gray-300 p-3 rounded-xl m-2" style={{ aspectRatio: '16/13' }}></div>
                            <div className="animate-pulse bg-gray-300 p-3 rounded-xl m-2" style={{ aspectRatio: '16/13' }}></div>
                            <div className="animate-pulse bg-gray-300 p-3 rounded-xl m-2" style={{ aspectRatio: '16/13' }}></div>
                            <div className="animate-pulse bg-gray-300 p-3 rounded-xl m-2" style={{ aspectRatio: '16/13' }}></div>
                            <div className="animate-pulse bg-gray-300 p-3 rounded-xl m-2" style={{ aspectRatio: '16/13' }}></div>
                            <div className="animate-pulse bg-gray-300 p-3 rounded-xl m-2" style={{ aspectRatio: '16/13' }}></div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default ProjectSection;