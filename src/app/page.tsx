const DOCTOLIB_IFRAME_SRC = "https://www.doctolib.fr/osteopathe/la-norville/arnaud-fornetran/booking/motive-categories?specialityId=10&telehealth=false&placeId=practice-550349&bookingFunnelSource=profile";
const PRACTITIONER_PHOTO_SRC = "/assets/Arnaud%20Cabinet%20Pictures/IMG_6483.jpg";
const CONTACT_EMAIL = "a.fornetran.osteo@gmail.com";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#191720]/70 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#90B7DB]/15 rounded-full flex items-center justify-center ring-1 ring-[#90B7DB]/25">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-xl font-semibold tracking-tight">Cabinet Arnaud</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#accueil" className="text-white/85 hover:text-white transition-colors">Accueil</a>
              <a href="#services" className="text-white/85 hover:text-white transition-colors">Services</a>
              <a href="#apropos" className="text-white/85 hover:text-white transition-colors">À Propos</a>
              <a href={DOCTOLIB_IFRAME_SRC} target="_blank" rel="noreferrer" className="bg-[#90B7DB] text-[#191720] px-5 py-2 rounded-full hover:bg-[#90B7DB]/90 transition-colors">Prendre RDV</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Une chiropraxie <span className="text-[#90B7DB]">moderne</span>, une expérience apaisante
              </h1>
              <p className="text-lg text-white/75 mb-8 max-w-xl">
                Une approche personnalisée pour soulager vos douleurs, améliorer votre posture et vous aider à retrouver une mobilité durable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={DOCTOLIB_IFRAME_SRC} target="_blank" rel="noreferrer" className="bg-[#90B7DB] text-[#191720] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#90B7DB]/90 transition-colors shadow-lg shadow-black/25">
                  Prendre Rendez-vous
                </a>
                <a href="#services" className="border-2 border-white/25 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors">
                  Nos Services
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-80 rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/15 shadow-2xl shadow-black/35">
                <img
                  src={PRACTITIONER_PHOTO_SRC}
                  alt="Portrait du praticien"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soins & accompagnement</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Des séances adaptées à vos besoins pour retrouver confort, mobilité et sérénité.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/8 transition-colors">
              <div className="w-14 h-14 bg-[#90B7DB]/15 rounded-xl flex items-center justify-center mb-6 ring-1 ring-[#90B7DB]/25">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Douleurs dorsales</h3>
              <p className="text-white/70">Lombalgies, sciatiques, tensions musculaires — prise en charge progressive.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/8 transition-colors">
              <div className="w-14 h-14 bg-[#90B7DB]/15 rounded-xl flex items-center justify-center mb-6 ring-1 ring-[#90B7DB]/25">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Nuque & cervicales</h3>
              <p className="text-white/70">Raideurs, torticolis, inconforts — une approche douce et ciblée.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/8 transition-colors">
              <div className="w-14 h-14 bg-[#90B7DB]/15 rounded-xl flex items-center justify-center mb-6 ring-1 ring-[#90B7DB]/25">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Posture & prévention</h3>
              <p className="text-white/70">Équilibre, mobilité et conseils simples pour des résultats durables.</p>
            </div>
            {/* Service 4 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/8 transition-colors">
              <div className="w-14 h-14 bg-[#90B7DB]/15 rounded-xl flex items-center justify-center mb-6 ring-1 ring-[#90B7DB]/25">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sportifs</h3>
              <p className="text-white/70">Préparation, récupération et prévention des blessures.</p>
            </div>
            {/* Service 5 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/8 transition-colors">
              <div className="w-14 h-14 bg-[#90B7DB]/15 rounded-xl flex items-center justify-center mb-6 ring-1 ring-[#90B7DB]/25">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Grossesse</h3>
              <p className="text-white/70">Confort, bassin et lombaires — prise en charge adaptée.</p>
            </div>
            {/* Service 6 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/8 transition-colors">
              <div className="w-14 h-14 bg-[#90B7DB]/15 rounded-xl flex items-center justify-center mb-6 ring-1 ring-[#90B7DB]/25">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enfants</h3>
              <p className="text-white/70">Suivi en douceur pour accompagner posture et croissance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="w-72 h-72 rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/15">
                <img src={PRACTITIONER_PHOTO_SRC} alt="Portrait du praticien" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">À Propos</h2>
              <p className="text-white/70 mb-4">
                Chiropracteur diplômé avec plusieurs années d&apos;expérience, je vous accueille dans mon cabinet 
                pour des soins personnalisés et adaptés à vos besoins.
              </p>
              <p className="text-white/70 mb-6">
                Ma philosophie : une approche globale du corps, respectueuse et naturelle, 
                pour vous aider à retrouver votre équilibre et votre bien-être au quotidien.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#90B7DB]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/85">Diplômé certifié</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#90B7DB]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/85">Approche douce</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#90B7DB]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/85">Soins personnalisés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Réserver & contacter</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Placeholders à personnaliser. Intégrez Doctolib pour une prise de rendez-vous simple.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/12 overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="px-6 py-6 bg-white/5">
                <h3 className="text-xl font-semibold">Prendre rendez-vous</h3>
                <p className="mt-2 text-sm text-white/70">
                  La réservation en ligne est disponible via Doctolib.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href={DOCTOLIB_IFRAME_SRC} target="_blank" rel="noreferrer" className="bg-[#90B7DB] text-[#191720] px-6 py-3 rounded-full font-medium hover:bg-[#90B7DB]/90 transition-colors text-center">
                    Réserver sur Doctolib
                  </a>
                  <a href={DOCTOLIB_IFRAME_SRC} target="_blank" rel="noreferrer" className="border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors text-center">
                    Ouvrir Doctolib
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-xs text-white/60">Tarifs</div>
                    <div className="mt-1 font-semibold">60€</div>
                    <div className="mt-1 text-sm text-white/60">Consultation standard</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-xs text-white/60">Tarif enfant</div>
                    <div className="mt-1 font-semibold">55€</div>
                    <div className="mt-1 text-sm text-white/60">Première consultation</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-8 border border-white/12 backdrop-blur-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-xs text-white/60">Adresse</div>
                  <div className="mt-1 font-semibold">60, chemin de la Garenne</div>
                  <div className="mt-1 text-sm text-white/60">91290 La Norville, France</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-xs text-white/60">Téléphone</div>
                  <div className="mt-1 font-semibold">06 86 75 26 59</div>
                  <div className="mt-1 text-sm text-white/60">Appel / SMS</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-xs text-white/60">Horaires</div>
                  <div className="mt-2 space-y-1">
                    <div className="font-semibold">Lundi - Mercredi</div>
                    <div className="text-sm text-white/80">9h - 21h</div>
                    <div className="font-semibold mt-2">Jeudi - Samedi</div>
                    <div className="text-sm text-white/80">9h - 14h</div>
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-xs text-white/60">Moyens de paiement</div>
                  <div className="mt-1 font-semibold">Chèques & Espèces</div>
                  <div className="mt-1 text-sm text-white/60">CB non acceptées</div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-5">
                <div className="text-sm font-medium text-white">Envoyer un message (placeholder)</div>
                <form className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Nom</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#90B7DB]/60 focus:ring-2 focus:ring-[#90B7DB]/20 outline-none transition-all" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#90B7DB]/60 focus:ring-2 focus:ring-[#90B7DB]/20 outline-none transition-all" placeholder="votre@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#90B7DB]/60 focus:ring-2 focus:ring-[#90B7DB]/20 outline-none transition-all resize-none" placeholder="Votre message..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#90B7DB] text-[#191720] py-3 rounded-xl font-medium hover:bg-[#90B7DB]/90 transition-colors">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#191720]/80 text-white py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#90B7DB]/15 rounded-full flex items-center justify-center ring-1 ring-[#90B7DB]/25">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-xl font-semibold">Cabinet Arnaud</span>
            </div>
            <div className="flex gap-8">
              <a href="#accueil" className="text-white/75 hover:text-[#90B7DB] transition-colors">Accueil</a>
              <a href="#services" className="text-white/75 hover:text-[#90B7DB] transition-colors">Services</a>
              <a href="#apropos" className="text-white/75 hover:text-[#90B7DB] transition-colors">À Propos</a>
              <a href="#contact" className="text-white/75 hover:text-[#90B7DB] transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>© 2026 Cabinet de Chiropraxie Arnaud. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
