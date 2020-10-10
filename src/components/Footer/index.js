import React from 'react'
import gitHubImg from '../../assets/images/socials/github.png'
import linkedInImg from '../../assets/images/socials/linkedin.png'
import twitterImg from '../../assets/images/socials/twitter.png'

function Footer() {
    function dummyClicked(event) {
        event.preventDefault()
        window.alert("That button is currently a placeholder!")
    }
    return (
        <footer className="justify-content-center my-2 d-flex">
            <div className="col-12 col-lg-5 d-flex justify-content-between">
                <a href="https://github.com/brian-presta">
                    <img src={gitHubImg} alt="link to my GitHub"/>
                </a>
                <a href="/">
                    <img src={linkedInImg} alt="link to my LinkedIn" onClick={dummyClicked}/>
                </a>
                <a href="/">
                    <img src={twitterImg} alt="link to my Twitter" onClick={dummyClicked}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer