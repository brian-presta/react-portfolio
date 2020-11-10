import React from 'react'
import devPic from '../../assets/images/me.jpg'
function About() {

    return(
        <div className="container">
        <section className="row mt-2">
            <img src={devPic} alt="The developer" className="col-lg-4 col-12"/>
            <p className="col-lg-8 col-12 mt-2">
            Lifelong coding and technology enthusiast, looking to make a career shift towards leveraging those skills professionally. SF Peninsula native. Other interests include gaming, trying new foods, and talking to people about their dogs.
            </p>
        </section>
        </div>
    )
}

export default About