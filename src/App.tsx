import React from 'react';
import { Github, Linkedin, Mail, BookOpen, Code2, Heart, GitBranch, Database, Monitor, FileText, Paintbrush, PenTool } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Olivier FACELINA
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Etudiant en Troisième Année de Bachelor Design UI/UX & Développement IA
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/OlivierFacelina" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/olivier-facelina-633a33205/" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:olivier.facelina@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noreferrer">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">A propos</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Salut ! Bienvenue sur mon portfolio. Je m'appelle Olivier FACELINA, étudiant de 23 ans en 3e année de bachelor Chef de Projet Développement et Intelligence Artificielle à La Manu, une école située à Amiens.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Passionné par le développement full stack, j'explore autant le front-end que le back-end. Mon objectif est de continuer à apprendre et à créer des solutions innovantes en poursuivant un master MIAGE après mon bachelor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Parcours scolaire</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Bachelor Web Design UI/UX & Développement IA</h3>
                  <p className="text-gray-600">La Manu • 2022 - Present</p>
                  <p className="text-gray-500 mt-2">
                    Développement web avec différents langages (back-end et front-end) ainsi que du design avec la suite Adobe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-5">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">BTS Services Informatiques aux Organisations (SIO)</h3>
                  <p className="text-gray-600">Lycée Saint-Vincent • 2021 - 2022</p>
                  <p className="text-gray-500 mt-2">
                    Développement web (HTML, CSS, PHP), cybersécurité, réseau, versioning.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-5">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Diplôme de Comptabilité et de Gestion (DCG)</h3>
                  <p className="text-gray-600">Lycée Jules Uhry • 2019 - 2021</p>
                  <p className="text-gray-500 mt-2">
                    Comptabilité, droit, économie, gestion du package Microsoft (Excel, Office).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-5">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Baccalauréat Sciences Technologiques du Management et de la Gestion</h3>
                  <p className="text-gray-600">Lycée Charles de Gaulle • 2019</p>
                  <p className="text-gray-500 mt-2">
                    Obtention du baccalauréat avec mention "Assez bien".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Monitor className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Front-end</h3>
              <ul className="space-y-2 text-gray-600">
                <li>HTML / CSS / Sass</li>
                <li>Bootstrap</li>
                <li>vueJS / JavaScript / TypeScript</li>
                <li>React</li>
                <li>SinonJS</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Database className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Back-end</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Python</li>
                <li>PHP / MySQL</li>
                <li>Java</li>
                <li>Symfony</li>
                <li>C#</li>
                <li>NodeJS</li>
                <li>Apache Solr</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <GitBranch className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Versioning / réseaux</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Git</li>
                <li>Github</li>
                <li>Commandes</li>
                <li>Docker</li>
                <li>Linux</li>
                <li>Ubuntu</li>
                <li>CircleCI</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <FileText className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">CMS</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Wordpress</li>
                <li>Elementor</li>
                <li>Divi</li>
                <li>WooCommerce</li>
                <li>Prestashop</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Paintbrush className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Design UI/UX</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Adobe</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
                <li>InDesign</li>
                <li>Figma</li>
                <li>CapCut</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <PenTool className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Logiciels</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Visual Studio Code</li>
                <li>Visual Studio Community</li>
                <li>Postman</li>
                <li>Eclipse IDE</li>
                <li>Blender</li>
                <li>Unity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Hobbies</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Heart className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Voyager</h3>
              <p className="text-gray-600">
                Singapour, Japon, Etats-Unis, Espagne, Thaïlande, Martinique.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Heart className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sports</h3>
              <p className="text-gray-600">
                Football, tennis, basketball, hockey, Formule 1, rugby.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Heart className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Autre</h3>
              <p className="text-gray-600">
                Ecouter de la musique, sortir avec des amis, aller au cinéma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Olivier FACELINA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;