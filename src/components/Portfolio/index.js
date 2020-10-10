import React from 'react'
import projects from '../../assets/data/projects.json'
import Project from './Project'

function Portfolio() {
    return(
        
        <section className="row ml-lg-4">
            {projects.map( (project,i) => (
                <Project project={project} key={i}/>
            ))}
        </section>
        
    )
}

export default Portfolio