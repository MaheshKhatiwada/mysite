import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="intro">
      <div className="intro-content">
      <h3 className=" text-secondary intro1">Hi, It's me</h3>
      <h1 className="intro2">Mahesh Khatiwada</h1>
      <h3 className="text-secondary intro1">Computer Engineer</h3>
      </div>
      <div className="intro-icons">
        <ul>
          <li><Link to ={{pathname:"https://github.com/maheshkhatiwada/"}} target="_blank"><i className="fab fa-github"></i></Link></li>
          <li><Link to ={{pathname:"https://www.facebook.com/mahesh.khatiwada1/"}} target="_blank"><i class="fab fa-facebook"></i></Link></li>
          <li><Link to ={{pathname:"https://www.instagram.com/mahesh.khatiwada"}}target="_blank"><i className="fab fa-instagram"></i></Link></li>


        </ul>
      </div>
    </div>
  )
}

export default Home


