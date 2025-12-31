// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="py-12 px-8" style={{backgroundColor: '#020617', color: '#CBD5E1'}}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
        
        </div>
        
        <div className="border-t mt-8 pt-8 text-center" style={{borderColor: '#CBD5E1'}}>
          <p>© {new Date().getFullYear()} mdamanaatullah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer