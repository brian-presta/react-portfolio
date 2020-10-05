import React from 'react'
import projects from './projects'

function Portfolio() {
    return(
        <section className="row">
            {projects.map(project => (
                <div className="col-lg-4 col-12 row">
                    <img src={require(`../../assets/images/${project.image}`)} alt={project.description} className="col-12"/>
                    <h3>{project.title}</h3>
                </div>
            ))}
        </section>
    )
}

export default Portfolio