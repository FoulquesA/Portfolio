import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()
  
  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/projects', label: 'Projets' },
    { path: '/cv', label: 'CV' },
    { path: '/contact', label: 'Contact' },
  ]
  
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b-2 border-neutral-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
          </Link>
          
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-bold transition-all ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <div className="absolute -bottom-5 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
