import React from 'react'


let Catpedia = {
    about: "A social media clone especially for catlovers!", 
    img: "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80",
    links: ["https://github.com/junko911/catpedia-frontend", "https://github.com/junko911/catpedia-frontend"],
    tech: ["React", "React Routes", "Rails", "Reactstrap", "PostgreSQL", "external API"]
}

let GoL = {
    about: "John Conway's classic Game of Life recreated using TensorFlow",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif",
    links: ["https://game-of-tensor.herokuapp.com/","https://github.com/jakelozano94/life-front", "https://github.com/jakelozano94/life-back"],
    tech: ["React", "Rails", "TensorFlow.js"]
}

let projects = [GoL, Catpedia]

let projectHandler = (projects) => { 
    return projects.map(project =>
    <>
        <img src = {project.img}/>
        <div className="proj_cards"></div>
     </>
)}

function Projects(){

 return (
     <div className="projects">
         <div id="proj_title">
            <h1> Projects</h1>
         </div>
         <div id="proj_cards_cont">{projectHandler(projects)}</div>
     </div>
 )
}

export default Projects