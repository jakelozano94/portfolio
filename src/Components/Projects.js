import React from 'react'
import cat from '../pictures/pnghut_cat-pixel-art-pusheen-drawing_w3mZmFQ3yY.png';
import GoLPic from '../pictures/GoL_pic.png'
let Catpedia = {
    name: "Catpedia",
    about: "A social media clone especially for catlovers!", 
    img: cat,
    links: ["https://github.com/junko911/catpedia-frontend", "https://github.com/junko911/catpedia-frontend"],
    tech: ["React", "React Routes", "Rails", "Reactstrap", "PostgreSQL", "external API"]
}

let GoL = {
    name: "Game of TensorFlow",
    about: "John Conway's classic Game of Life recreated using TensorFlow",
    img: GoLPic,
    links: ["https://game-of-tensor.herokuapp.com/","https://github.com/jakelozano94/life-front", "https://github.com/jakelozano94/life-back"],
    tech: ["React", "Rails", "TensorFlow.js"]
}

let projects = [GoL, Catpedia]

let projectHandler = (projects) => { 
    return projects.map(project =>
        <div className="center">
        <div className="card">
          <div className="additional">
            <div className="user-card">
              <div className="level center">
                Level 13
              </div>
              <div className="points center">
                5,312 Points
              </div>
              <img src={project.img}/>
            </div>
            <div className="more-info">
              <h1>{project.name}</h1>
              <div class="coords">
                <span>Group Name</span>
                <span>Joined January 2019</span>
              </div>
              <div class="coords">
                <span>Position/Role</span>
                <span>City, Country</span>
              </div>
              <div className="stats">
                <div>
                  <div className="title">Awards</div>
                  <i className="fa fa-trophy"></i>
                  <div className="value">2</div>
                </div>
                <div>
                  <div className="title">Matches</div>
                  <i className="fa fa-gamepad"></i>
                  <div className="value">27</div>
                </div>
                <div>
                  <div className="title">Pals</div>
                  <i className="fa fa-group"></i>
                  <div className="value">123</div>
                </div>
                <div>
                  <div className="title">Coffee</div>
                  <i className="fa fa-coffee"></i>
                  <div className="value infinity">∞</div>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span className="more">Mouse over the card for more info</span>
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
