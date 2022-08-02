import React from 'react';

import Project from '../components/Project';
import Carousel, {CarouselItem} from '../components/Carousel';

function Projects() {
    return (
        <div id="projects">
            <h2>Projects</h2>
            <h3 className='section'>Web Development</h3>
            <Carousel>
                <CarouselItem>
                    <Project 
                            name='AnonBlogs' 
                            description='A Webapp to post blogs anonymously. Built with Flask and MongoDB' 
                            source='https://github.com/studiousgamer/AnonBlogs'
                            demo="https://anonblogs.vercel.app"  
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                            name='Snipper' 
                            description='A WebApp for sharing code snippets. Built with Flask and MongoDB. Supports over 120 languages and 65 Themes which can be used to customize your code appearance.' 
                            source='https://github.com/studiousgamer/snipper' 
                            demo="https://classroom-clone.herokuapp.com/"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                            name='Classroom Clone' 
                            description='A Clone of google Classroom with almost 80-90% of its features. Supporst class creation, student adding, assignment (text and file based) creation, resource providing, Rich text editor and more.' 
                            source='https://github.com/studiousgamer/classroom-clone' 
                            demo="test"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                            name='RegShop' 
                            description='A WebApp to manage all your shops. It supports multiple shop creation, Shop Item list making, Receipt making and viewing receipt history.' 
                            source='https://github.com/studiousgamer/regshop' 
                            demo="http://regshop.vercel.app/"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                            name='Derpy Peeps' 
                            description='A WebApp for generating random Profile pictures' 
                            source='https://github.com/studiousgamer/derpy-peeps' 
                            demo="http://derpy-peeps.vercel.app/"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                            name='PokeData' 
                            description='A WebApp for displaying Data of various Pokemons' 
                            source='https://github.com/studiousgamer/pokedata' 
                            demo="http://pokedata.vercel.app/"
                    />
                </CarouselItem>
            </Carousel>
        </div>
    )
}

export default Projects