import { Home, GraduationCap, Briefcase, Mail, Github, Linkedin, Code2, Smartphone, FileText, Star, Award, Calendar, MapPin, Phone, Send, Brain, Users, Clock, Trophy, ArrowRight, Shield, BarChart3, Play, X, Maximize2, Download } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

// Configuration EmailJS
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_elabidi_aya',
  TEMPLATE_ID: 'template_contact',
  PUBLIC_KEY: 'qWx4Fim3969V53pf4'
};

// URLs des médias - AVEC LES VRAIS LIENS GITHUB RAW
const MEDIA_BASE_URL = 'https://raw.githubusercontent.com/yaelaya/portfolio/main/docs';

// Projects data avec URLs GitHub Raw
const projects = [
  {
    title: 'DrugTrace - Système Blockchain',
    description: 'Système de traçabilité blockchain pour produits pharmaceutiques avec publication en cours dans SoftwareX. Solution innovante pour lutter contre la contrefaçon des médicaments.',
    tags: ['Blockchain', 'Smart Contracts', 'Web3', 'React', 'Node.js'],
    github: 'https://github.com/ayoubharati/medProject',
    video: `${MEDIA_BASE_URL}/Blockchain/blockchain.mp4`,
    featured: true,
    status: 'En cours de publication',
    period: '02/2025-05/2025',
    icon: Shield,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'DataIN - Plateforme Data Science',
    description: 'Solution intégrée d\'exploration de données par IA et visualisation interactive développée durant mon stage au Haut-Commissariat au Plan. Analyse de données massives avec machine learning.',
    tags: ['Python', 'Machine Learning', 'Data Visualization', 'React', 'FastAPI'],
    github: 'https://github.com/yaelaya/DataIN',
    video: `${MEDIA_BASE_URL}/DataIN/datain_1.mp4`,
    featured: true,
    period: 'Stage HCP - 06/2025-09/2025',
    icon: BarChart3,
    color: 'from-purple-500 to-blue-500'
  },
  {
    title: 'Prédiction du Diabète - Machine Learning',
    description: 'Analyse complète d\'un dataset médical avec techniques avancées de data mining. Développement de modèles prédictifs pour identifier les facteurs de risque du diabète, avec Random Forest atteignant un F1-score de 0.8845.',
    tags: ['Python', 'Machine Learning', 'Data Mining', 'Random Forest', 'XGBoost', 'Data Analysis', 'CRISP-DM'],
    github: 'https://github.com/yaelaya/diabetes-prediction-ml',
    images: [
      `${MEDIA_BASE_URL}/NLP/1.jpeg`,
      `${MEDIA_BASE_URL}/NLP/2.jpeg`
    ],
    featured: true,
    status: 'Projet Académique Complet',
    period: 'Projet Data Mining - 2025',
    icon: Brain,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Applications Mobiles Android',
    description: 'Développement d\'applications Android natives avec intégration d\'APIs REST, GraphQL et SOAP. Architecture MVVM et tests unitaires complets.',
    tags: ['Java', 'Android', 'Retrofit', 'GraphQL', 'REST', 'SOAP'],
    github: 'https://github.com/miskaraminaa/AssistDoc',
    period: 'Projet ENSA - 10/2024-12/2024',
    icon: Smartphone,
    color: 'from-green-600 to-emerald-500'
  },
  {
    title: 'Analyse des Retards de Vols - Business Intelligence',
    description: 'Chaîne BI complète avec ETL (Kettle) et tableaux de bord interactifs (Google Data Studio). Analyse prédictive des causes de retards aériens.',
    tags: ['ETL', 'Business Intelligence', 'Data Studio', 'Kettle', 'Analyse', 'Data Visualization'],
    images: [
      `${MEDIA_BASE_URL}/BI/1.jpg`,
      `${MEDIA_BASE_URL}/BI/2.jpg`,
      `${MEDIA_BASE_URL}/BI/3.jpg`,
      `${MEDIA_BASE_URL}/BI/4.jpg`,
      `${MEDIA_BASE_URL}/BI/5.jpg`,
      `${MEDIA_BASE_URL}/BI/6.jpg`
    ],
    period: 'Projet ENSA - 10/2024-12/2024',
    icon: BarChart3,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Application Web JEE - Gestion des Examens',
    description: 'Application web conçue pour gérer les surveillances des examens au sein d\'une université. Développement CRUD avec Spring Boot et Spring Data en Java EE.',
    tags: ['Spring Boot', 'Java EE', 'Spring Data', 'JPA', 'REST API', 'CRUD'],
    github: 'https://github.com/YounesAO/ExamSessionManger',
    video: `${MEDIA_BASE_URL}/JEE/ExamSession.mp4`,
    period: 'Projet ENSA - 11/2024-01/2025',
    icon: Code2,
    color: 'from-red-500 to-pink-500'
  }
];

export default function Layouts() {
  // Education data
  const education = [
    {
      degree: 'Ingénieurie en Informatique et Technologies Emergentes',
      school: 'École Nationale des Sciences Appliquées (ENSA)',
      location: 'El Jadida, Maroc',
      period: '10/2023 - Présent',
      description: 'Formation en ingénierie informatique avec spécialisation en technologies émergentes',
      achievements: [
        'Projets en développement web, mobile et intelligence artificielle',
        'Travaux sur blockchain, data science et systèmes distribués',
        'Formation complète en génie logiciel et architecture système'
      ]
    },
    {
      degree: 'Classes Préparatoires PSI*',
      school: 'Lycée International de Valbonne',
      location: 'Valbonne, France',
      period: '09/2021 - 08/2023',
      description: 'Formation intensive en mathématiques et sciences physiques',
      achievements: [
        'Préparation aux concours des grandes écoles d\'ingénieurs',
        'Renforcement des compétences scientifiques',
        'Développement de la rigueur et méthode de travail'
      ]
    },
    {
      degree: 'Baccalauréat Science Mathématique B',
      school: 'Al Manbaa',
      location: 'Rabat, Maroc',
      period: '06/2021',
      description: 'Baccalauréat scientifique avec mention Bien',
      achievements: [
        'Mention Bien',
        'Spécialisation mathématiques et sciences physiques',
        'Excellentes bases scientifiques'
      ]
    }
  ];

  // Stats data
  const stats = [
    { number: '6+', label: 'Projets Académiques', icon: GraduationCap },
    { number: '2', label: 'Stages Professionnels', icon: Users },
    { number: '4+', label: 'Années d\'Études', icon: Clock }
  ];

  // Highlights data
  const highlights = [
    {
      icon: Code2,
      title: 'Développement Full Stack',
      description: 'Expérience en React, Spring Boot, Java EE et développement d\'applications web complètes'
    },
    {
      icon: Brain,
      title: 'Technologies Émergentes',
      description: 'Formation en blockchain, IA, data science et systèmes distribués à l\'ENSA'
    },
    {
      icon: Award,
      title: 'Projets Académiques',
      description: '6+ projets réalisés couvrant le développement web, mobile et les systèmes distribués'
    }
  ];

  // États pour les emails
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  // États pour les modales de zoom
  const [zoomedMedia, setZoomedMedia] = useState<{ type: 'image' | 'video'; url: string } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Gestion de l'envoi d'email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current!,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setEmailStatus('success');
      formRef.current?.reset();
      
      setTimeout(() => setEmailStatus('idle'), 5000);
    } catch (error) {
      console.error('Erreur envoi email:', error);
      setEmailStatus('error');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Fonction pour ouvrir le zoom
  const openZoom = (type: 'image' | 'video', url: string, index?: number) => {
    setZoomedMedia({ type, url });
    if (index !== undefined) setCurrentImageIndex(index);
  };

  // Fonction pour fermer le zoom
  const closeZoom = () => {
    setZoomedMedia(null);
  };

  // Navigation dans le slider d'images zoomé
  const nextImage = (images: string[]) => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (images: string[]) => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Gestion du swipe pour mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (images: string[]) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage(images);
    } else if (isRightSwipe) {
      prevImage(images);
    }
  };

  // Fermer la modale avec la touche Échap
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeZoom();
      }
    };

    if (zoomedMedia) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [zoomedMedia]);

  // Composant VideoPlayer amélioré avec fallback
  const VideoPlayer = ({ videoUrl, title }: { videoUrl: string; title: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const handleLoadStart = () => setIsLoading(true);
      const handleCanPlay = () => setIsLoading(false);
      const handleError = () => {
        setIsLoading(false);
        setHasError(true);
        console.error(`Erreur de chargement vidéo: ${videoUrl}`);
      };

      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }, [videoUrl]);

    const handlePlay = () => setIsPlaying(true);
    const handleVideoClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      openZoom('video', videoUrl);
    };

    if (hasError) {
      return (
        <div className="h-48 mb-4 rounded-lg bg-slate-100 flex flex-col items-center justify-center text-slate-500 p-4">
          <div className="text-center">
            <Play className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm font-medium mb-2">Vidéo non disponible</p>
            <p className="text-xs mb-3">Problème de chargement</p>
            <a
              href={videoUrl}
              download
              className="inline-flex items-center gap-1 px-3 py-1 bg-slate-200 rounded text-xs hover:bg-slate-300 transition-colors"
            >
              <Download className="w-3 h-3" />
              Télécharger la vidéo
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-slate-100 group">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600"></div>
          </div>
        )}
        
        <video
          ref={videoRef}
          className="w-full h-full object-cover cursor-pointer"
          controls
          preload="metadata"
          onPlay={handlePlay}
          onClick={handleVideoClick}
        >
          <source src={videoUrl} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        
        <button
          onClick={handleVideoClick}
          className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {!isPlaying && !isLoading && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
            onClick={handleVideoClick}
          >
            <div className="bg-black/50 rounded-full p-3 backdrop-blur-sm">
              <Play className="w-6 h-6 text-white fill-current" />
            </div>
          </div>
        )}
      </div>
    );
  };

  // Composant ImageSlider amélioré
  const ImageSlider = ({ images, title }: { images: string[]; title: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

    useEffect(() => {
      setLoadedImages(new Array(images.length).fill(false));
    }, [images]);

    const handleImageLoad = (index: number) => {
      setLoadedImages(prev => {
        const newLoaded = [...prev];
        newLoaded[index] = true;
        return newLoaded;
      });
    };

    const handleImageError = (index: number) => {
      console.error(`Erreur de chargement image: ${images[index]}`);
    };

    const nextImage = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevImage = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-slate-100 group">
        {!loadedImages[currentIndex] && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-slate-600"></div>
          </div>
        )}
        
        <img
          src={images[currentIndex]}
          alt={`${title} - Slide ${currentIndex + 1}`}
          className="w-full h-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
          onClick={() => openZoom('image', images[currentIndex], currentIndex)}
          onLoad={() => handleImageLoad(currentIndex)}
          onError={() => handleImageError(currentIndex)}
        />
        
        <button
          onClick={() => openZoom('image', images[currentIndex], currentIndex)}
          className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  // Composant Modal pour le zoom
  const ZoomModal = () => {
    if (!zoomedMedia) return null;

    const currentProject = projects.find(project => 
      project.images?.includes(zoomedMedia.url) || project.video === zoomedMedia.url
    );

    const currentImages = currentProject?.images || [];

    return (
      <div 
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={closeZoom}
      >
        <div 
          className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Bouton fermer */}
          <button
            onClick={closeZoom}
            className="absolute top-4 right-4 z-10 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Contenu du média */}
          {zoomedMedia.type === 'image' ? (
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd(currentImages)}
            >
              <img
                src={zoomedMedia.url}
                alt="Zoomed view"
                className="max-w-full max-h-full object-contain rounded-lg select-none"
                draggable={false}
              />
              
              {/* Navigation pour les images dans le zoom */}
              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={() => prevImage(currentImages)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    <ArrowRight className="w-6 h-6 rotate-180" />
                  </button>
                  <button
                    onClick={() => nextImage(currentImages)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  
                  {/* Indicateur de position */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 backdrop-blur-sm bg-black/30 rounded-full px-3 py-2">
                    {currentImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                          setZoomedMedia({ type: 'image', url: currentImages[index] });
                        }}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Indicateur de swipe pour mobile */}
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-sm backdrop-blur-sm bg-black/30 rounded-full px-4 py-2 opacity-70">
                    ← Swipe → 
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="w-full max-w-4xl">
              <div className="relative">
                <video
                  className="w-full h-auto max-h-[80vh] rounded-lg"
                  controls
                  autoPlay
                  preload="metadata"
                >
                  <source src={zoomedMedia.url} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
                
                {/* Bouton retour pour vidéo */}
                <button
                  onClick={closeZoom}
                  className="absolute -top-12 left-0 bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Retour
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Légende */}
        {currentProject && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center backdrop-blur-sm bg-black/30 rounded-lg px-4 py-2">
            <p className="font-semibold">{currentProject.title}</p>
            <p className="text-sm opacity-80">Cliquez à l'extérieur ou appuyez sur Échap pour fermer</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Modal de zoom */}
      <ZoomModal />

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-bold">
                AE
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800">Aya EL ABIDI</h1>
                <p className="text-sm text-slate-600">Étudiante en Ingénierie Informatique</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {[
                { id: 'home', label: 'Accueil', icon: Home },
                { id: 'education', label: 'Formation', icon: GraduationCap },
                { id: 'projects', label: 'Projets', icon: Briefcase },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`${MEDIA_BASE_URL}/CV_.pdf`}
                download="CV_Aya_EL_ABIDI.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium"
              >
                <FileText className="w-4 h-4" />
                CV
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Étudiante en Ingénierie Informatique</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-slate-800 leading-tight">
                Aya EL ABIDI
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Etudiante en dernière année d'Ingénierie Informatique et Technologies Émergentes à l'École Nationale des Sciences Appliquées d'El Jadida.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                >
                  Voir mes projets
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                >
                  Me contacter
                </button>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/yaelaya/DataIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <Github className="w-5 h-5 text-slate-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/elabidi-aya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <Linkedin className="w-5 h-5 text-slate-700" />
                </a>
                <a
                  href="mailto:ayaaa.elabidi@gmail.com"
                  className="p-3 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <Mail className="w-5 h-5 text-slate-700" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-slate-50 rounded-lg"
                    >
                      <stat.icon className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-800 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Domaines d'Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-slate-200"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Formation</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Un parcours académique solide qui m'a permis de développer mes compétences techniques 
              et ma passion pour l'informatique et les technologies émergentes.
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                    <p className="text-lg font-semibold text-slate-600 mb-4">{edu.school}</p>

                    <div className="flex flex-wrap gap-4 mb-4 text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">{edu.description}</p>

                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Trophy className="w-5 h-5 text-slate-600" />
                        <h4 className="font-semibold text-slate-700">Points Forts</h4>
                      </div>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-700">
                            <Award className="w-4 h-4 text-slate-500 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Projets</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Une sélection de mes réalisations techniques démontrant mon expertise en développement 
              full-stack, data science et technologies émergentes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="p-6">
                  {
  title: 'Prédiction du Diabète - Machine Learning',
  description: 'Analyse complète d\'un dataset médical avec techniques avancées de data mining. Développement de modèles prédictifs pour identifier les facteurs de risque du diabète, avec Random Forest atteignant un F1-score de 0.8845.',
  tags: ['Python', 'Machine Learning', 'Data Mining', 'Random Forest', 'XGBoost', 'Data Analysis', 'CRISP-DM'],
  github: 'https://github.com/yaelaya/Diabetes-Prediction-NLP',
  images: [
    `${MEDIA_BASE_URL}/NLP/1.jpeg`,
    `${MEDIA_BASE_URL}/NLP/2.jpeg`
  ],
  featured: true,  // ← ICI il est marqué comme featured
  status: 'Projet Académique Complet',
  period: 'Projet Data Mining - 2025',
  icon: Brain,
  color: 'from-orange-500 to-red-500'
}

                  {project.status && (
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {project.status}
                    </div>
                  )}
                  
                  {project.period && (
                    <p className="text-sm text-slate-500 mb-3 font-medium">{project.period}</p>
                  )}

                  {/* Affichage des médias */}
                  {project.video && (
                    <VideoPlayer videoUrl={project.video} title={project.title} />
                  )}
                  
                  {project.images && (
                    <ImageSlider images={project.images} title={project.title} />
                  )}

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bouton Code Source seulement si GitHub existe */}
                  {project.github && (
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all font-medium"
                      >
                        <Github className="w-4 h-4" />
                        Code Source
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Contact</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Actuellement en recherche de stage pour mettre en pratique mes compétences 
              en développement et contribuer à des projets innovants.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Coordonnées</h3>

                <div className="space-y-4">
                  <a
                    href="mailto:ayaaa.elabidi@gmail.com"
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Email</p>
                      <p className="text-slate-800 font-semibold">ayaaa.elabidi@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/elabidi-aya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">LinkedIn</p>
                      <p className="text-slate-800 font-semibold">elabidi-aya</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Téléphone</p>
                      <p className="text-slate-800 font-semibold">0669012552</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-8 text-white">
                <Calendar className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-3">Disponibilité</h3>
                <p className="text-slate-300 leading-relaxed">
                  Actuellement en recherche de stage de fin d'études à partir de Janvier 2026.
                </p>
              </div>
            </div>

            {/* Formulaire de contact avec EmailJS */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Envoyez un Message</h3>

              {/* Messages de statut */}
              {emailStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                </div>
              )}

              {emailStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  ❌ Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement à ayaaa.elabidi@gmail.com
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Nom
                    </label>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      placeholder="Votre nom"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="reply_to" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      id="reply_to"
                      name="reply_to"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Sujet
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Sujet de votre message"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={emailStatus === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
                >
                  {emailStatus === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/yaelaya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/elabidi-aya/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ayaaa.elabidi@gmail.com"
              className="p-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-slate-400">
            © 2024 Aya EL ABIDI. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}