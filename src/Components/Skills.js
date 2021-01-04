import React from 'react'

function Skills() {

    const profs = ["RoR", "Javascript", "React", "Redux", "CSS", "HTML", "Git", "Bootstrap", "Node.js"]
    const expos = ["PostgreSQL", "TensorFlow (Core & .js)", "R", "Python"]

    function lister(list){
        return list.map(skill =>
            <li>{skill}</li>
            )
    }

    return (
        <div className = "skills">
            <div id="prof_title"> Proficient: </div>
            <div className = "prof">
                <div>
                    <ul className="dashed">
                        {lister(profs)}
                    </ul>
                </div>
            </div>
            <div id="expo_title"> Exposed: </div>
            <div className = "exposed">
                <div>
                    <ul className ="dashed">
                        {lister(expos)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills