import React from 'react';

import Project from '../components/Project';
import Carousel, {CarouselItem} from '../components/Carousel';

function Projects() {
    return (
        <div id="projects">
            <h2>Projects</h2>
            <h3 className='section'>Web Dev</h3>
            <Carousel>
                <CarouselItem>
                    <Project name='AnonBlogs 1' description='makes sussy blogs' source='https://github.com/studiousgamer/AnonBlogs' />
                </CarouselItem>
                <CarouselItem>
                    <Project name='AnonBlogs 2' description='makes sussy blogs' source='https://github.com/studiousgamer/AnonBlogs' demo="test"/>
                </CarouselItem>
                <CarouselItem>
                    <Project name='AnonBlogs 3' description='makes sussy blogs' source='https://github.com/studiousgamer/AnonBlogs' />
                </CarouselItem>
                <CarouselItem>
                    <Project name='AnonBlogs 4' description='makes sussy blogs' source='https://github.com/studiousgamer/AnonBlogs' />
                </CarouselItem>
                <CarouselItem>
                    <Project name='AnonBlogs 5' description='makes sussy blogs' source='https://github.com/studiousgamer/AnonBlogs' />
                </CarouselItem>
                <CarouselItem>
                    <Project name='AnonBlogs 6' description='makes sussy blogs' source='https://github.com/studiousgamer/AnonBlogs' />
                </CarouselItem>
                <CarouselItem>
                    <Project name='AnonBlogs 7' description='makes sussy blogs' source='https://github.com/studiousgamer/AnonBlogs' />
                </CarouselItem>
            </Carousel>
        </div>
    )
}

export default Projects