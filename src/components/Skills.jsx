// src/components/Skills.jsx
const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'MongoDB', level: 70 },
    { name: 'Git/Github', level: 80 },
    { name: 'UI/UX Design', level: 70 },
  ]

  return (
    <section id="skills" className="py-20 px-6" style={{backgroundColor: '#020617'}}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#CBD5E1'}}>
          My <span style={{color: '#14B8A6'}}>Skills</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{color: '#CBD5E1'}}>
          Here are my technical skills which i use in my projects. 
          I'm always learning new technologies to improve myself.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md" style={{backgroundColor: '#020617'}}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium" style={{color: '#CBD5E1'}}>{skill.name}</h3>
                <span className="text-sm" style={{color: '#CBD5E1'}}>{skill.level}%</span>
              </div>
              <div className="w-full rounded-full h-2.5" style={{backgroundColor: '#CBD5E1', opacity: 0.3}}>
                <div 
                  className="h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%`, backgroundColor: '#14B8A6' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills