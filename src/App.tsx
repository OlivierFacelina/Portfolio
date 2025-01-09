import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, BookOpen, GitBranch, Database, Monitor, FileText, Paintbrush, PenTool, Heart } from 'lucide-react';
import meImage from './assets/img/me.jpg';

function App() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.should-animate').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden px-4 sm:px-6">
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 scale-in">
              Olivier FACELINA
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 scale-in delay-200 px-4 sm:px-0">
              Etudiant en Troisième Année de Bachelor Design UI/UX & Développement IA
            </p>
            <div className="flex justify-center space-x-6 scale-in delay-300">
              <a href="https://github.com/OlivierFacelina" className="text-gray-600 hover:text-gray-900 transition-colors hover-scale p-2" target="_blank" rel="noreferrer">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a href="https://www.linkedin.com/in/olivier-facelina-633a33205/" className="text-gray-600 hover:text-gray-900 transition-colors hover-scale p-2" target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
              <a href="mailto:olivier.facelina@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors hover-scale p-2" target="_blank" rel="noreferrer">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 should-animate">A propos</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0">
                <img
                  src={meImage}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover shadow-lg hover-scale"
                />
              </div>
              <div className="should-animate text-center md:text-left">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  Salut ! Bienvenue sur mon portfolio. Je m'appelle Olivier FACELINA, étudiant de 23 ans en 3e année de bachelor Chef de Projet Développement et Intelligence Artificielle à La Manu, une école située à Amiens.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Passionné par le développement full stack, j'explore autant le front-end que le back-end. Mon objectif est de continuer à apprendre et à créer des solutions innovantes en poursuivant un master MIAGE après mon bachelor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 should-animate">Parcours scolaire</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                title: "Bachelor Web Design UI/UX & Développement IA",
                school: "La Manu",
                period: "2022 - Present",
                description: "Développement web avec différents langages (back-end et front-end) ainsi que du design avec la suite Adobe."
              },
              {
                title: "BTS Services Informatiques aux Organisations (SIO)",
                school: "Lycée Saint-Vincent",
                period: "2021 - 2022",
                description: "Développement web (HTML, CSS, PHP), cybersécurité, réseau, versioning."
              },
              {
                title: "Diplôme de Comptabilité et de Gestion (DCG)",
                school: "Lycée Jules Uhry",
                period: "2019 - 2021",
                description: "Comptabilité, droit, économie, gestion du package Microsoft (Excel, Office)."
              },
              {
                title: "Baccalauréat Sciences Technologiques du Management et de la Gestion",
                school: "Lycée Charles de Gaulle",
                period: "2019",
                description: "Obtention du baccalauréat avec mention \"Assez bien\"."
              }
            ].map((edu, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start should-animate hover-lift p-4 sm:p-6 bg-white rounded-lg">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                </div>
                <div className="sm:ml-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">{edu.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{edu.school} • {edu.period}</p>
                  <p className="text-sm sm:text-base text-gray-500 mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 should-animate">Skills</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mb-4" />,
                title: "Front-end",
                skills: ["HTML / CSS / Sass", "Bootstrap", "VueJS / JavaScript / TypeScript", "React", "SinonJS"]
              },
              {
                icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mb-4" />,
                title: "Back-end",
                skills: ["Python", "PHP / MySQL", "Java", "Symfony", "C#", "NodeJS", "Apache Solr"]
              },
              {
                icon: <GitBranch className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mb-4" />,
                title: "Versioning / réseaux",
                skills: ["Git", "Github", "Commandes", "Docker", "Linux", "Ubuntu", "CircleCI"]
              },
              {
                icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mb-4" />,
                title: "CMS",
                skills: ["Wordpress", "Elementor", "Divi", "WooCommerce", "Prestashop"]
              },
              {
                icon: <Paintbrush className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mb-4" />,
                title: "Design UI/UX",
                skills: ["Adobe", "Illustrator", "Photoshop", "InDesign", "Figma", "CapCut"]
              },
              {
                icon: <PenTool className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mb-4" />,
                title: "Logiciels",
                skills: ["Visual Studio Code", "Visual Studio Community", "Postman", "Eclipse IDE", "Blender", "Unity"]
              }
            ].map((category, index) => (
              <div key={index} className="p-4 sm:p-6 bg-gray-50 rounded-lg should-animate hover-lift">
                {category.icon}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{category.title}</h3>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 should-animate">Hobbies</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Voyager",
                description: "Singapour, Japon, Etats-Unis, Espagne, Thaïlande, Martinique."
              },
              {
                title: "Sports",
                description: "Football, tennis, basketball, hockey, Formule 1, rugby."
              },
              {
                title: "Autre",
                description: "Ecouter de la musique, sortir avec des amis, aller au cinéma."
              }
            ].map((hobby, index) => (
              <div key={index} className="p-4 sm:p-6 bg-white rounded-lg shadow-sm should-animate hover-lift">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{hobby.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center scale-in">
          <p className="text-xs sm:text-sm md:text-base">© 2025 Olivier FACELINA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;