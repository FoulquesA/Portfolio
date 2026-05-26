import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { path: '/', label: 'Accueil' },
  { path: '/projects', label: 'Projets' },
  { path: '/cv', label: 'CV' },
  { path: '/contact', label: 'Contact' },
]

const Navigation = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3" aria-label="Accueil">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
              Foulques Arbaretier
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-semibold transition-colors py-1 ${
                    isActive ? 'text-primary-700' : 'text-neutral-700 hover:text-neutral-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-expanded={open}
            aria-label="Ouvrir le menu"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <motion.path
                d="M3 6h18"
                animate={open ? { d: 'M5 5l14 14', y: 0 } : { d: 'M3 6h18' }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                d="M3 12h18"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                d="M3 18h18"
                animate={open ? { d: 'M5 19l14 -14' } : { d: 'M3 18h18' }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-neutral-200 bg-white"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((link, i) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                        isActive
                          ? 'bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700'
                          : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
