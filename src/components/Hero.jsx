// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6" style={{backgroundColor: '#020617'}}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#CBD5E1'}}>
            Hello, I'm <span style={{color: '#14B8A6'}}>MD Amanat Ullah</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6" style={{color: '#CBD5E1'}}>
            Full Stack Developer & UI/UX Enthusiast
          </h2>
          <div className="flex space-x-4">
            <a href="https://github.com/mdamanat2003" className="text-white px-6 py-3 rounded-lg shadow-md" style={{backgroundColor: '#14B8A6'}}>
              My Projects
            </a>
            <a href="/contact" className="text-white px-6 py-3 rounded-lg" style={{borderColor: '#14B8A6', borderWidth: '1px', color: '#14B8A6'}}>
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <img 
              src="Passport.png" 
              alt="MD Amanat Ullah" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero