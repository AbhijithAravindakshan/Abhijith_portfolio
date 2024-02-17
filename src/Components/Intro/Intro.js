import React from 'react'
import './Intro.css'
import bg from '../../Assets/bg1.png'
import { Link } from 'react-scroll'
import hire from '../../Assets/Hire me.png'
import { saveAs } from 'file-saver';

function Intro() {

  const saveFile = () => {
    saveAs(
      process.env.REACT_APP_CLIENT_URL + "../../Assets/Resource/AbhiResume.pdf.pdf",
      "Abhijith CV.pdf"
    );
  };

  return (
    
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">AbhijithAravindakshan</span> <br />Frontend Developer</span>
            <p className="introPara">I am a skilled and passionate Frontend Developer with experience in creating <br /> visually and appealing user-friendly Websites.</p>

            <Link><button className="btn" onClick={saveFile}><img src={hire} alt="Hireme" className='hire' /> <b>Hire me</b></button></Link>
        </div>
        <img src={bg} alt="profile" className='bg' />
    </section>
  )
}

export default Intro