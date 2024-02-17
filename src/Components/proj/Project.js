import React from 'react'
import './Project.css'
import lg3 from '../../Assets/LG3.png'
import lg4 from '../../Assets/LG4.png'
import lg5 from '../../Assets/LG5.png'
import lg6 from '../../Assets/LG6.png'
import lg7 from '../../Assets/LG7.png'

function Project() {
  return (
    <section id="Projects">
         <h2 className="projectTitle">My projects</h2>
         <span className="projectDesc">provides a comprehensive project overview, including its phases, processes, goals, and objectives.</span>
         <div className="projectImages">
          <img src={lg3} alt="" className="projectImg" />
          <img src={lg4} alt="" className="projectImg" />
          <img src={lg5} alt="" className="projectImg" />
          <img src={lg6} alt="" className="projectImg" />
          <img src={lg7} alt="" className="projectImg" />
         </div>
         <button className="projectBtn">See More</button>
         </section>
  )
}

export default Project