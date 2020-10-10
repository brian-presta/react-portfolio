import React from 'react'
import projects from './projects'
import Card from 'react-bootstrap/Card'
function Portfolio() {
    return(
        
        <section className="row ml-lg-4">
            {projects.map( (project,i) => (
                <div className="col-12 col-lg-5 mb-2 mb-lg-0 card-wrapper" key={i}>
                    <Card.Img variant="top" src={require(`../../assets/images/${project.image}`)} className="unhide"/>
                    
                    <Card className="hide col-12">
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{project.stack}</Card.Subtitle>
                            <div>
                            <Card.Link href={project.deployment}>Deployment</Card.Link>
                            <Card.Link href={project.gitHub}>GitHub</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </section>
        
    )
}

export default Portfolio