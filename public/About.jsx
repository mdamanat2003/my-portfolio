import React from 'react'
function About() {
  return (
    <section id="about" className="py-20 px-6" style={{backgroundColor: '#020617'}}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#CBD5E1'}}>
          About <span style={{color: '#14B8A6'}}>Myself</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="mb-4 text-lg" style={{color: '#CBD5E1'}}>
              I am a Full Stack Developer specializing in the MERN stack based in Kolkata.
               My passion for web development began during my college days, and since then, 
              I have been actively working and growing in this field. I enjoy building dynamic, 
              user-friendly applications and turning ideas into impactful digital experiences that live on the internet.
            </p>
            <p className="mb-4 text-lg" style={{color: '#CBD5E1'}}>
              My journey started with basic HTML/CSS, and i am working with modern 
              frameworks like React, Vite.js, and Node.js. I believe in continuous learning and 
              always try to expand my knowledge.
            </p>
            <p className="text-lg" style={{color: '#CBD5E1'}}>
             When I’m not coding, you can also find me reading books, traveling, 
             and exploring new technologies that inspire my work.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="p-6 rounded-lg shadow-md" style={{backgroundColor: '#020617'}}>
              <h3 className="text-xl font-semibold mb-4" style={{color: '#CBD5E1'}}>Personal Info</h3>
              <div className="space-y-3">
                <p style={{color: '#CBD5E1'}}><span className="font-medium" style={{color: '#14B8A6'}}>Name:</span> MD AMANAT ULLAH </p>
                <p style={{color: '#CBD5E1'}}><span className="font-medium" style={{color: '#14B8A6'}}>Location:</span> Kolkata,India</p>
                <p style={{color: '#CBD5E1'}}><span className="font-medium" style={{color: '#14B8A6'}}>Education:</span> B.Tech in Computer Science & Engineering</p>
                <p style={{color: '#CBD5E1'}}><span className="font-medium" style={{color: '#14B8A6'}}>Email:</span> mdamanatullah2003@gmail.com</p>
                <p style={{color: '#CBD5E1'}}><span className="font-medium" style={{color: '#14B8A6'}}>Freelance:</span> Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
  )
}
export default About
