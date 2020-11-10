import React from 'react'

function Resume() {
    return(
        <section id="resume">
            <p className="mt-3">You can download my resume <a href="https://drive.google.com/file/d/1jJDiMXH3RsuUsNbQ5Kqedg0fMyRH21sM/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.</p>
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
                <li>- Data analysis with the Pandas library for Python</li>
            </ul>
        </section>
    )
}

export default Resume