import React from 'react'
import './Skills.css'
import ui from '../../Assets/ui.webp'
import web from '../../Assets/website.webp'
import code from '../../Assets/code.webp'

function Skills() {
  return (
    <section id="skills">
       <span className="skillTitle"> What I do </span>
       <span className="skillDesc"> Iam skilled and passionate webdesigner with experience in creating visually appealing and user-friendly <br />websites. I have a strong understanding of design and a keep eye for detail. Iam proficient in HTML, CSS, <br /> and JavaScript.  </span>
       <div className="skillBars">
        <div className="skillBar">
            <img src={ui} alt="" className='skillBarImg' />
            <h2>UI/UX Design</h2>
            <p className='pOne'>Write something about that content</p>
        </div>
        <div className="skillBar">
            <img src={web} alt="" className='skillBarImg' />
            <h2>Website Design</h2>
            <p className='pTwo'>Write something about that content</p>
        </div>
        <div className="skillBar">
            <img src={code} alt="" className='skillBarImg' />
            <h2>My Skills</h2>
            <p className='pThree'>Write something about that content</p>
            
        </div>
       </div>
    </section>
  )
}

export default Skills