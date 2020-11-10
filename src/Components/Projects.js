import React from 'react'
import cat from '../pictures/pnghut_cat-pixel-art-pusheen-drawing_w3mZmFQ3yY.png';
import GoLPic from '../pictures/noun_Conways Game of Life_14951 (1).png'
import Heroku from '../pictures/heroku.svg'

let Catpedia = {
    name: "Catpedia",
    about: "A social media clone especially for catlovers!", 
    img: cat,
    links: ["https://github.com/junko911/catpedia-frontend", "https://github.com/junko911/catpedia-frontend"],
    tech: ["React (Routes) | ", "API calls"],
    stack: "JS | Rails",
    type: "Social Media Clone"
}

let GoL = {
    name: "Game of TensorFlow",
    about: "John Conway's classic Game of Life recreated using TensorFlow",
    img: GoLPic,
    links: ["https://github.com/jakelozano94/life-front", "https://github.com/jakelozano94/life-back", "https://game-of-tensor.herokuapp.com/"],
    tech: ["React | ", "TensorFlow.js"],
    stack: "JS | Rails",
    type: "Proof of Concept"
}

let projects = [GoL, Catpedia]

let projectHandler = (projects) => {

let herokuCheck=(project)=>{
    if(project.links[2]){
        return (
            <>
        <div className="title">Heroku</div>
        <a href={project.links[2]} target="_blank"><svg fill="#ffffff" width="35" height="35"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Heroku icon</title><path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"/></svg></a>
        </>)}
    }
    return projects.map(project =>


        <div className="center">
        <div className="card">
          <div className="additional">
            <div className="user-card">
              <div className="level center">
                Stack
              </div>
              <div className="points center">
                {project.stack}
              </div>
              <img src={project.img}/>
            </div>
            <div className="more-info">
              <h1>{project.name}</h1>
              <div class="coords">
                <span>Tech</span>
                <span>{project.tech.map(project => project)}</span>
              </div>
              <div class="coords">
                <span>App Type</span>
                <span>{project.type}</span>
              </div>
              <div className="stats">
             
                <div>
                    {herokuCheck(project)}
                </div>
                <div className="icon-cont">
                    <div className="title">Front</div>
                    <a href={project.links[0]} target="_blank"
                        ><svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="35" height="35" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
                    </a>
                </div>
                <div className="icon-cont">
                    <div className="title">Back</div>
                    <a href={project.links[1]} target="_blank"
                        ><svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="35" height="35" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg>
                    </a>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>{project.name}</h1>
            <p>{project.about}</p>
            {/* <span className="more">Mouse over the card for more info</span> */}
          </div>
        </div>
        </div>
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

