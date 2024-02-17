import React from 'react'
import './Works.css'
import wrk1 from '../../Assets/portfolio-1.png'
import wrk2 from '../../Assets/portfolio-2.png'
import wrk3 from '../../Assets/portfolio-3.png'
import wrk4 from '../../Assets/portfolio-4.png'
import wrk5 from '../../Assets/portfolio-5.png'
import wrk6 from '../../Assets/portfolio-6.png'

function Works() {
  return (
    <section id="works">
         <h2 className="worksTitle">My portfolio</h2>
         <span className="worksDesc">I take pride attention to the smallest details and making sure that my work is pixel perfect.Iam excited to bring my skills and experience to help achieve my goals and create a strong online presence</span>
         <div className="worksImages">
          <img src={wrk1} alt="" className="workImg" />
          <img src={wrk2} alt="" className="workImg" />
          <img src={wrk3} alt="" className="workImg" />
          <img src={wrk4} alt="" className="workImg" />
          <img src={wrk5} alt="" className="workImg" />
          <img src={wrk6} alt="" className="workImg" />
          <div className="glow-wrap">
            <i className="glow"></i>
          </div>
         </div>
         <button className="workBtn">See More</button>
    </section>
  )
}

export default Works