import React from 'react';
import { Container } from 'react-bootstrap';
// import ProjectCard from '../widget/ProjectCard';
import NonFlipCard from '../widget/NonFlipCard';

const Projects = ()=>{
    return(
        <Container className='h-100 w-100 p-0'>
            {/* <ProjectCard/> */}
            <NonFlipCard/>
        </Container>
    )
}

export default Projects;

