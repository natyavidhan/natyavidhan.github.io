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
                            description='A web app to post blogs anonymously. Built with Flask and MongoDB' 
                            source='https://github.com/studiousgamer/AnonBlogs'
                            demo="https://anonblogs.vercel.app"  
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='Snipper' 
                        description='A web app for sharing code snippets. Built with Flask and MongoDB. Supports over 120 languages and 65 Themes which can be used to customize your code appearance.' 
                        source='https://github.com/studiousgamer/snipper' 
                        demo="https://classroom-clone.herokuapp.com/"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='Classroom Clone' 
                        description='A Clone of google Classroom with almost 80-90% of its features. Supporst class creation, student adding, assignment (text and file based) creation, resource providing, Rich text editor and more.' 
                        source='https://github.com/studiousgamer/classroom-clone' 
                        demo="https://classroom-clone.herokuapp.com/"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='RegShop' 
                        description='A web app to manage all your shops. It supports multiple shop creation, Shop Item list making, Receipt making and viewing receipt history.' 
                        source='https://github.com/studiousgamer/regshop' 
                        demo="http://regshop.vercel.app/"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='Derpy Peeps' 
                        description='A web app for generating random Profile pictures' 
                        source='https://github.com/studiousgamer/derpy-peeps' 
                        demo="http://derpy-peeps.vercel.app/"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                            name='PokeData' 
                            description='A web app for displaying Data of various Pokemons' 
                            source='https://github.com/studiousgamer/pokedata' 
                            demo="http://pokedata.vercel.app/"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                            name='Space Explorer' 
                            description='A website for Space Enthusiasts ' 
                            source='https://github.com/studiousgamer/Space-Explorer'
                            demo="https://space-explorer-web.herokuapp.com/"
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='DosisPy' 
                        description='The one and only manager you need to manage your medical stuff ' 
                        source='https://github.com/studiousgamer/DosisPy'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                            name='Da Cookbook' 
                            description='A web app for storing all your delicious recipes' 
                            source='https://github.com/studiousgamer/Da-cookbook'
                    />
                </CarouselItem>
            </Carousel>

            <h3 className="section">Game Development</h3>
            <Carousel>
                <CarouselItem>
                    <Project 
                        name='Tic-Tac-Toe AI'
                        description='A Game made with pygame in which you can play Tic tac toe with another player or against AI. The AI uses Minimax algorithm to find the best solution to the given board position'
                        source='https://github.com/studiousgamer/Tic-Tac-Toe-AI'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='Sudoku Solver'
                        description='A GUI Sudoku Game with built in Auto-Solver. The game is made with PyGame and uses Backtracking Algorithm to solve the puzzle.'
                        source='https://github.com/studiousgamer/sudoku-solver'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='Tyro Engine'
                        description='A Game Engine completely made in python. Runs on top of PyGame and provides an Easy Interface to make games.'
                        source='https://github.com/Tyro-Inc/Tyro-Engine'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='Maze generator'
                        description='A Maze generator in python. The maze is generated using the Backtracking Search algorithm.'
                        source='https://github.com/studiousgamer/maze-generator'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='Multiplayer-Hangman'
                        description='Hangman, but you can play with your homies'
                        source='https://github.com/studiousgamer/Multiplayer-Hangman'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='Pygame Raycaster'
                        description='A Raycaster made in pygame. Its like a library which can be used to make Doom like games easily (Not Finished yet)'
                        source='https://github.com/studiousgamer/pygame-raycaster-thingy'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='JS-Games'
                        description='Some games i made in pure javascript to show off my js Skills :D'
                        source='https://github.com/studiousgamer/JS-Games'
                        demo='https://natya.is-a.dev/JS-Games/'
                    />
                </CarouselItem>
            </Carousel>

            <h3 className="section">Software Development</h3>
            <Carousel>
                <CarouselItem>
                    <Project 
                        name='ASCII-fy'
                        description='A Software made with python and TKinter that coverts any image to ASCII art.'
                        source='https://github.com/studiousgamer/ASCII-fy'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='Quick Python Projects'
                        description='Small but useful python GUI Applications'
                        source='https://github.com/studiousgamer/Quick-Python-Projects'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='MailMan'
                        description='A Python GUI for making GET, POST, PUT and DELETE requests '
                        source='https://github.com/studiousgamer/MailMan'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='Python Password Manager'
                        description='A simple yet secure password manager written in python (Forked GUI version)'
                        source='https://github.com/studiousgamer/python-password-manager'
                    />
                </CarouselItem>
            </Carousel>

            <h3 className="section">Miscellaneous Projects</h3>
            <Carousel>
                <CarouselItem>
                    <Project 
                        name='Wave Function Collapse'
                        description='An implementation of the wave function collapse algorithm in python'
                        source='https://github.com/studiousgamer/wfc'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='Bad Apple'
                        description='A Program which renders the entire bad apple video on MatPlotLib. It uses RLE algorithm to convert video frames into textual data of small size'
                        source='https://github.com/studiousgamer/Bad-Apple'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='PlumScipt'
                        description='A Scripting language made with python for simulating Keyboard and Mouse inputs. It can be used to automate tasks like opening a webpage, closing a webpage, moving the mouse, typing text, etc.'
                        source=''
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='BotDotPy'
                        description='A Discord Bot made in python. Its a basic bot with moderation features, Reaction roles, Logging, Error Handling and Few fun commands.'
                        source='https://github.com/studiousgamer/BotDotPy'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='FizzBuzz'
                        description='The FizzBuzz program in as many languages i can'
                        source='https://github.com/studiousgamer/FizzBuzz'
                    />
                </CarouselItem>
                <CarouselItem>
                    <Project 
                        name='PyPantry'
                        description='An API wrapper for Pantry json database '
                        source='https://github.com/studiousgamer/PyPantry'
                    />
                </CarouselItem>
            </Carousel>
        </div>
    )
}

export default Projects