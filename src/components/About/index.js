import React from 'react'
import devPic from '../../assets/images/me.jpg'
function About() {

    return(
        <section className="row mt-2">
            <img src={devPic} alt="The developer" className="col-lg-4 col-12"/>
            <p className="col-lg-8 col-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque rerum recusandae officiis unde? Corporis facilis sapiente quibusdam, voluptates vel reprehenderit, excepturi, perspiciatis delectus voluptate distinctio commodi harum doloremque nam praesentium?
            </p>
        </section>
    )
}

export default About