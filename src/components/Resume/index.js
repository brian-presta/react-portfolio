import React from 'react'

function Resume() {
    function resumeHanlder(event) {
        event.preventDefault()
        window.alert("Resume link is currently a placeholder!")
    }
    return(
        <section id="resume">
            <p className="mt-3">You can download my resume <a href="./my-resume.pdf" onClick={resumeHanlder}>here</a>.</p>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>- HTML/CSS/JS</li>
                <li>- React</li>
                <li>- Handlebars</li>
                <li>- JQuery</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>- Node.js</li>
                <li>- Express.js</li>
                <li>- SQL</li>
                <li>- MongoDB</li>
                <li>- Writing RESTful APIs</li>
                <li>- Writing Graph QL APIs</li>
            </ul>
        </section>
    )
}

export default Resume