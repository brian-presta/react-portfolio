import React from 'react'

function Resume() {
    function resumeHanlder(event) {
        event.preventDefault()
        window.alert("Resume link is currently a placeholder!")
    }
    return(
        <p>You can download my resume <a href="./my-resume.pdf" onClick={resumeHanlder}>here</a></p>
    )
}

export default Resume