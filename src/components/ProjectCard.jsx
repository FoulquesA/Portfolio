import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const ProjectCard = ({ 
  title, 
  brief, 
  badges, 
  imagePlaceholder = true,
  githubUrl,
  stagger = 0 
}) => {
  return (
    <ScrollReveal type="card" stagger={stagger}>
      <div className="group relative bg-white rounded-2xl border-2 border-neutral-200 overflow-hidden hover:border-primary-400 hover:shadow-2xl transition-all duration-300">
        {/* Gradient overlay au hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-accent-600/0 group-hover:from-primary-600/5 group-hover:to-accent-600/5 transition-all duration-300 pointer-events-none" />
        
        {/* Image placeholder */}
        <div className="relative aspect-video bg-gradient-to-br from-primary-100 via-accent-50 to-primary-100 flex items-center justify-center overflow-hidden">
          {/* Pattern background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-600 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-600 rounded-full blur-2xl" />
          </div>
          
          {imagePlaceholder && (
            <div className="relative text-center px-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl shadow-xl mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <p className="text-sm text-neutral-600 font-semibold">Visuel à venir</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Contenu */}
        <div className="relative p-7">
          <h3 className="text-2xl font-bold mb-4 text-balance group-hover:text-primary-700 transition-colors">
            {title}
          </h3>
          
          <p className="text-neutral-600 leading-relaxed mb-6 border-l-4 border-primary-200 pl-4 group-hover:border-primary-400 transition-colors">
            {brief}
          </p>
          
          {/* Badges techno avec style plus marqué */}
          <div className="flex flex-wrap gap-2 mb-6">
            {badges.slice(0, 3).map((badge, index) => (
              <span 
                key={index}
                className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-lg shadow-md"
              >
                {badge}
              </span>
            ))}
          </div>
          
          {/* Bouton GitHub avec style plus affirmé */}
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl group/btn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span>Détails techniques</span>
              <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}

export default ProjectCard
