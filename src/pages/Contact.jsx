import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'bcc57557-277c-4080-9461-4b122d081e86', // ← Colle ta clé Web3Forms ici
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    })

    if (response.ok) {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 5000)
    } else {
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-accent-50">
      {/* Header */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6">
          <ScrollReveal type="text">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <p className="text-white font-bold text-sm tracking-wider">CONTACT</p>
            </div>
            <h1 className="text-white mb-6">Parlons-en</h1>
            <p className="text-2xl text-white/90 max-w-2xl leading-relaxed">
              Disponible immédiatement pour un <span className="font-semibold">CDI à Paris</span> en Marketing Data Analyst, Product Analyst ou Consultant Web Analytics. Pour échanger sur un poste ou une mission, écrivez-moi.
            </p>
          </ScrollReveal>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Bandeau infos rapides */}
        <ScrollReveal type="card" stagger={0.05}>
          <div className="mb-8 p-6 bg-white border-2 border-neutral-200 rounded-2xl shadow-md">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs font-bold tracking-wider text-neutral-500 mb-1">LOCALISATION</p>
                <p className="text-lg font-semibold text-neutral-900">Paris, France</p>
              </div>
              <div className="sm:border-l sm:border-r border-neutral-200">
                <p className="text-xs font-bold tracking-wider text-neutral-500 mb-1">STATUT</p>
                <p className="text-lg font-semibold text-neutral-900">Recherche CDI</p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-wider text-neutral-500 mb-1">DISPONIBILITÉ</p>
                <p className="text-lg font-semibold text-primary-700">Immédiate</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          <ScrollReveal type="card" stagger={0.1}>
            <a 
              href="https://www.linkedin.com/in/foulques-arbaretier/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative p-8 bg-white border-2 border-accent-200 rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:border-accent-400 transition-all">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="group-hover:text-white transition-colors">
                    <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
                    <p className="text-lg opacity-80">linkedin.com/in/foulques-arbaretier</p>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-6 h-6 text-neutral-400 group-hover:text-white group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </ScrollReveal>
          
          <ScrollReveal type="card" stagger={0.2}>
            <a 
              href="https://github.com/FoulquesA"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative p-8 bg-white border-2 border-neutral-300 rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:border-neutral-500 transition-all">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </div>
                  <div className="group-hover:text-white transition-colors">
                    <h3 className="text-xl font-bold mb-1">GitHub</h3>
                    <p className="text-lg opacity-80">github.com/FoulquesA</p>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-6 h-6 text-neutral-400 group-hover:text-white group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal type="card" stagger={0.3}>
            <div className="p-8 bg-white border-2 border-primary-200 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Envoyer un message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="votre.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                    <p className="text-green-700 font-semibold text-center">Message envoyé avec succès !</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                    <p className="text-red-700 font-semibold text-center">Erreur lors de l'envoi. Réessayez.</p>
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

export default Contact