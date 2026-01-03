export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#58641D] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-[#002400]">Cabinet Arnaud</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#accueil" className="text-[#002400] hover:text-[#7B904B] transition-colors">Accueil</a>
              <a href="#services" className="text-[#002400] hover:text-[#7B904B] transition-colors">Services</a>
              <a href="#apropos" className="text-[#002400] hover:text-[#7B904B] transition-colors">À Propos</a>
              <a href="#contact" className="bg-[#58641D] text-white px-5 py-2 rounded-full hover:bg-[#273B09] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#DBD2E0]/30 to-[#7B904B]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#002400] leading-tight mb-6">
                Retrouvez votre <span className="text-[#58641D]">bien-être</span> naturellement
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Cabinet de chiropraxie dédié à soulager vos douleurs et améliorer votre qualité de vie. 
                Une approche douce et personnalisée pour chaque patient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="bg-[#58641D] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#273B09] transition-colors shadow-lg hover:shadow-xl">
                  Prendre Rendez-vous
                </a>
                <a href="#services" className="border-2 border-[#58641D] text-[#58641D] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#58641D] hover:text-white transition-colors">
                  Nos Services
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-80 bg-[#7B904B]/20 rounded-full flex items-center justify-center">
                <svg className="w-48 h-48 text-[#58641D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002400] mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Des soins chiropratiques adaptés à vos besoins pour retrouver mobilité et confort au quotidien.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[#DBD2E0]/20 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#58641D] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#002400] mb-3">Douleurs Dorsales</h3>
              <p className="text-gray-600">Traitement des lombalgies, sciatiques et tensions musculaires du dos.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-[#DBD2E0]/20 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#58641D] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#002400] mb-3">Douleurs Cervicales</h3>
              <p className="text-gray-600">Soulagement des torticolis, maux de tête et tensions cervicales.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-[#DBD2E0]/20 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#58641D] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#002400] mb-3">Bien-être Général</h3>
              <p className="text-gray-600">Amélioration de la posture et prévention des troubles musculo-squelettiques.</p>
            </div>
            {/* Service 4 */}
            <div className="bg-[#DBD2E0]/20 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#58641D] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#002400] mb-3">Sportifs</h3>
              <p className="text-gray-600">Accompagnement des athlètes pour optimiser leurs performances.</p>
            </div>
            {/* Service 5 */}
            <div className="bg-[#DBD2E0]/20 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#58641D] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#002400] mb-3">Femmes Enceintes</h3>
              <p className="text-gray-600">Soins adaptés pour accompagner la grossesse en douceur.</p>
            </div>
            {/* Service 6 */}
            <div className="bg-[#DBD2E0]/20 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#58641D] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#002400] mb-3">Enfants</h3>
              <p className="text-gray-600">Suivi chiropratique adapté aux plus jeunes pour une croissance harmonieuse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 px-4 bg-[#DBD2E0]/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="w-72 h-72 bg-[#7B904B]/20 rounded-2xl flex items-center justify-center">
                <svg className="w-32 h-32 text-[#58641D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002400] mb-6">À Propos</h2>
              <p className="text-gray-600 mb-4">
                Chiropracteur diplômé avec plusieurs années d&apos;expérience, je vous accueille dans mon cabinet 
                pour des soins personnalisés et adaptés à vos besoins.
              </p>
              <p className="text-gray-600 mb-6">
                Ma philosophie : une approche globale du corps, respectueuse et naturelle, 
                pour vous aider à retrouver votre équilibre et votre bien-être au quotidien.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#7B904B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#002400]">Diplômé certifié</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#7B904B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#002400]">Approche douce</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#7B904B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#002400]">Soins personnalisés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002400] mb-4">Contact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Prenez rendez-vous ou contactez-nous pour toute question.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#58641D] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#002400] mb-1">Adresse</h3>
                  <p className="text-gray-600">123 Rue de la Santé<br />75000 Paris, France</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#58641D] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#002400] mb-1">Téléphone</h3>
                  <p className="text-gray-600">01 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#58641D] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#002400] mb-1">Horaires</h3>
                  <p className="text-gray-600">Lundi - Vendredi: 9h - 19h<br />Samedi: 9h - 13h</p>
                </div>
              </div>
            </div>
            <div className="bg-[#DBD2E0]/20 p-8 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#002400] mb-2">Nom</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B904B] focus:ring-2 focus:ring-[#7B904B]/20 outline-none transition-all" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#002400] mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B904B] focus:ring-2 focus:ring-[#7B904B]/20 outline-none transition-all" placeholder="votre@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#002400] mb-2">Téléphone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B904B] focus:ring-2 focus:ring-[#7B904B]/20 outline-none transition-all" placeholder="06 12 34 56 78" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#002400] mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B904B] focus:ring-2 focus:ring-[#7B904B]/20 outline-none transition-all resize-none" placeholder="Votre message..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#58641D] text-white py-4 rounded-xl font-medium hover:bg-[#273B09] transition-colors">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002400] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#58641D] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-xl font-semibold">Cabinet Arnaud</span>
            </div>
            <div className="flex gap-8">
              <a href="#accueil" className="hover:text-[#7B904B] transition-colors">Accueil</a>
              <a href="#services" className="hover:text-[#7B904B] transition-colors">Services</a>
              <a href="#apropos" className="hover:text-[#7B904B] transition-colors">À Propos</a>
              <a href="#contact" className="hover:text-[#7B904B] transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2026 Cabinet de Chiropraxie Arnaud. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
