export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  heroImage: string;
  overview: string;
  approach: string;
  indications: string[];
  technology: string[];
  duration: string;
  anesthesia: string;
  doctorInCharge: string;
  doctorSlug: string;
  faqs: { question: string; answer: string }[];
}

export const treatments: Treatment[] = [
  {
    id: "dental-implants",
    slug: "dental-implants",
    title: "Dental Implants & Biological Reconstruction",
    category: "Reconstructive Surgery",
    tagline: "A natural result begins beneath the surface.",
    heroImage: "/assets/aurea/dentistry/dentistry-instruments.jpg",
    overview: "Immediate load biological implants utilizing biocompatible zirconia and high-grade titanium. We combine 3D CBCT guided surgical splints with microscopic tissue preservation to restore chewing dynamics and bone volume seamlessly.",
    approach: "We perform static and dynamic computer-navigated surgery. By preserving the biological peri-implant architecture and utilizing customized zirconia emergence abutments, our restorations integrate indistinguishably with natural gingiva.",
    indications: [
      "Single or multiple missing teeth requiring lifelong structural integrity",
      "Severe bone atrophy requiring bilateral sinus elevation or ridge expansion",
      "Full arch terminal dentition requiring immediate-load fixed prosthetics",
      "Titanium-sensitive individuals seeking metal-free zirconia implants"
    ],
    technology: [
      "3D Cone Beam Computed Tomography (CBCT)",
      "Trios 5 Wireless Optical Surface Scanners",
      "3D Printed Computer-Guided Surgical Guides",
      "Piezoelectric Bone Surgery for zero soft-tissue trauma"
    ],
    duration: "1 to 2 visits for surgical placement; final ceramics after integration",
    anesthesia: "Micro-local infiltration or twilight conscious sedation with anesthesiologist",
    doctorInCharge: "Dr. Adrian Laurent",
    doctorSlug: "dr-adrian-laurent",
    faqs: [
      {
        question: "How does AUREA ensure implants look indistinguishable from natural teeth?",
        answer: "The secret lies in the 'emergence profile' — how the crown emerges from the gum tissue. We design custom zirconia healing collars that train the gingiva into natural parabolic contours before the final master porcelain crown is placed."
      },
      {
        question: "Is the procedure painful?",
        answer: "Because we use computer-guided flapless surgery and piezoelectric precision instruments, trauma to the bone and gum is minimal. Most patients report feeling only mild pressure, with complete return to normal social activities within 24-48 hours."
      }
    ]
  },
  {
    id: "smile-design",
    slug: "smile-design",
    title: "Digital Smile Architecture",
    category: "Aesthetic Dentistry",
    tagline: "Facial harmony engineered before a single tooth is touched.",
    heroImage: "/assets/aurea/dentistry/dentistry-smile-natural.jpg",
    overview: "We do not believe in cookie-cutter Hollywood smiles. AUREA Smile Architecture begins with facial proportion analysis, speech dynamics, and lip mobility mapping to design an organic smile that enhances your unique facial geometry.",
    approach: "Our 3D Test-Drive protocol allows you to wear and evaluate a physical temporary composite prototype in your mouth. You see, feel, and speak with your future smile in natural lighting before any definitive ceramic artistry begins.",
    indications: [
      "Asymmetric smile lines or uneven tooth display upon smiling",
      "Wear, chipping, or discoloration resistant to whitening",
      "Disproportion between teeth, gums, and perioral lip volume",
      "Desire for complete aesthetic rejuvenation with strict natural realism"
    ],
    technology: [
      "4K Dynamic Facial Motion Tracking",
      "Digital Smile Design (DSD) CAD Workstations",
      "3D Intraoral Mockup Printing",
      "Spectrophotometric Digital Shade Analysis"
    ],
    duration: "2 to 3 unhurried appointments over 10 days",
    anesthesia: "Non-invasive preliminary phase; comfort anesthesia if required",
    doctorInCharge: "Dr. Elena Vance",
    doctorSlug: "dr-elena-vance",
    faqs: [
      {
        question: "What is a 3D Smile Test-Drive?",
        answer: "It is a physical mock-up placed over your existing teeth without any preparation. You can look in the mirror, talk, walk outside in natural Da Nang daylight, and take photos to confirm you love the aesthetics before moving forward."
      },
      {
        question: "Can my teeth look natural rather than fake white?",
        answer: "Natural realism is our primary ethos. We hand-craft micro-translucency, subtle mamelons, and natural enamel texture so your teeth look youthful, radiant, and completely authentic."
      }
    ]
  },
  {
    id: "veneers",
    slug: "veneers",
    title: "Master Ceramic Veneers",
    category: "Restorative Artistry",
    tagline: "Microscopic ceramic layering replicating living tooth structure.",
    heroImage: "/assets/aurea/dentistry/dentistry-ceramic-prep.jpg",
    overview: "Crafted individually by our in-house master ceramists, our ultra-thin porcelain veneers require conservative preparation (often 0.2mm to 0.4mm) and boast exquisite optical properties that capture, refract, and reflect light identically to natural enamel.",
    approach: "Utilizing Swiss feldspathic porcelain and high-density lithium disilicate, each veneer is built up by hand under 20x stereomicroscopes with multi-layered ceramic powders, creating subtle optical depths and lifelike biological vitality.",
    indications: [
      "Permanent intrinsic enamel discoloration (fluorosis, tetracycline staining)",
      "Diastemas (gaps) and microdontia (undersized teeth)",
      "Fractured, chipped, or cosmetically compromised front teeth",
      "Refining proportions after orthodontic alignment"
    ],
    technology: [
      "Dental Operating Microscopes (Zeiss)",
      "High-Resolution 5-Axis Ceramic Milling",
      "Ceramic Vacuum Sintering Furnaces",
      "Total-Etch Adhesive Bonding under Rubber Dam Isolation"
    ],
    duration: "2 clinical sessions; 7-10 days laboratory fabrication",
    anesthesia: "Mild localized anesthetic for maximum tranquility",
    doctorInCharge: "Dr. Elena Vance",
    doctorSlug: "dr-elena-vance",
    faqs: [
      {
        question: "How long do master ceramic veneers last?",
        answer: "When bonded strictly to enamel with modern adhesive protocols and cared for with routine hygiene, master feldspathic veneers routinely demonstrate 15 to 25+ years of biological and aesthetic longevity."
      },
      {
        question: "How much tooth structure is reduced?",
        answer: "We practice ultra-conservative dentistry. Because of our 3D diagnostic planning, preparations are minimal (0.2mm - 0.4mm), preserving up to 95% of healthy enamel."
      }
    ]
  },
  {
    id: "full-mouth-rehabilitation",
    slug: "full-mouth-rehabilitation",
    title: "Full Mouth Occlusal Rehabilitation",
    category: "Complex Prosthodontics",
    tagline: "Rebuilding collapsed bites, TMJ health, and facial vertical dimension.",
    heroImage: "/assets/aurea/cases/case-full-rehab.jpg",
    overview: "For patients experiencing severe dental wear, loss of vertical facial height, or chronic temporomandibular joint (TMJ) discomfort. We holistically restore the harmonious relationship between jaw joints, masticatory muscles, and ceramic tooth surfaces.",
    approach: "A multidisciplinary rehabilitation beginning with computerized kinesiography and neuromuscular bite recording. We reset the jaw to its physiological resting state before systematically restoring all teeth to ideal functional angles.",
    indications: [
      "Severe nocturnal bruxism and generalized acid erosion wear",
      "Collapsed lower third of face resulting in premature facial aging",
      "Multiple fractured teeth and failing historical dental work",
      "Chronic tension headaches, neck strain, and TMJ clicking"
    ],
    technology: [
      "Digital Jaw Motion Tracking (Modjaw / K7 System)",
      "CBCT Condylar Fossa Volumetric Mapping",
      "Computerized Occlusal T-Scan Analysis",
      "Neuromuscular TENS Muscle Deconditioning"
    ],
    duration: "Comprehensive phased treatment protocol over 3 to 6 months",
    anesthesia: "Full conscious sedation protocols available for ultimate relaxation",
    doctorInCharge: "Dr. Adrian Laurent",
    doctorSlug: "dr-adrian-laurent",
    faqs: [
      {
        question: "How does bite reconstruction lift facial features?",
        answer: "When back teeth wear down, the distance between the chin and nose collapses, causing sunken lips and deep marionette folds. By restoring 3 to 5mm of vertical tooth height, we naturally de-age the lower face without invasive plastic surgery."
      }
    ]
  },
  {
    id: "orthodontics",
    slug: "orthodontics",
    title: "Discrete Lingual & Clear Aligners",
    category: "Orthodontics & Airway",
    tagline: "Biomechanical precision with invisible aesthetics.",
    heroImage: "/assets/aurea/dentistry/dentistry-chair-detail.jpg",
    overview: "Orthodontic treatment designed for discerning adults. We offer fully custom lingual appliances hidden entirely behind your teeth and medical-grade clear aligner therapy programmed with AI biomechanical movement algorithms.",
    approach: "We focus on the facial profile, lip support, and airway dimensions — never extracting healthy premolars unless strictly necessary. The goal is a broad, radiant dental arch that supports the mid-face throughout life.",
    indications: [
      "Adult crowding, spacing, or post-relapse misalignments",
      "Narrow upper arches compromising breathing or smile buccal corridors",
      "Deep bites or open bites affecting chewing mechanics",
      "Pre-prosthetic tooth uprighting before veneer or implant therapy"
    ],
    technology: [
      "Trios 5 AI Orthodontic Movement Simulation",
      "Custom 3D Cast Gold Lingual Brackets",
      "SmartTrack Multi-Layer Elastomeric Aligners",
      "Photobiomodulation Acceleration Devices"
    ],
    duration: "6 to 18 months depending on skeletal complexity",
    anesthesia: "Completely non-invasive; zero anesthesia required",
    doctorInCharge: "Dr. Elena Vance",
    doctorSlug: "dr-elena-vance",
    faqs: [
      {
        question: "Will anyone be able to tell I am undergoing orthodontic treatment?",
        answer: "With custom lingual appliances placed behind the teeth, the system is 100% invisible from the outside. With our clear aligner protocols, the medical-grade polymers are virtually undetectable even at conversational distance."
      }
    ]
  },
  {
    id: "aesthetic-medicine",
    slug: "aesthetic-medicine",
    title: "Facial Aesthetics & Regenerative Medicine",
    category: "Medical Aesthetics",
    tagline: "Restoring the underlying architectural framework of the face.",
    heroImage: "/assets/aurea/aesthetics/aesthetics-facial-profile.jpg",
    overview: "Led by dermatological physicians, our aesthetic medicine suite operates in synergy with dental architecture. We emphasize regenerative cellular therapies, collagen biostimulators, and structural contouring rather than artificial volumizing.",
    approach: "The mouth and jaw constitute the foundation for 60% of the face. By combining dental bite support with deep-plane biostimulation (PLLA, CaHA, polynucleotides), we achieve radiant skin texture and refined facial contouring that remains utterly natural.",
    indications: [
      "Loss of mid-face and jawline definition",
      "Perioral fine lines, smoker lines, and volume deficit",
      "Skin laxity, solar elastosis, and cellular dehydration",
      "Pre- or post-dental smile rejuvenation integration"
    ],
    technology: [
      "High-Resolution 3D Ultrasound for Vascular Mapping",
      "Micro-Focused Ultrasound with Visualization (MFU-V)",
      "Medical Grade Polynucleotide & Exosome Delivery",
      "Picosecond Acoustic Laser Resurfacing"
    ],
    duration: "45 to 90 minutes per session; minimal to zero social downtime",
    anesthesia: "Compound topical lidocaine/tetracaine or nerve block",
    doctorInCharge: "Dr. Maya Linh",
    doctorSlug: "dr-maya-linh",
    faqs: [
      {
        question: "Why should facial aesthetics be coordinated with dental treatment?",
        answer: "Teeth and jawbones are the scaffold upon which facial soft tissues rest. Addressing skin or volume without evaluating dental support yields unnatural results. At AUREA, both disciplines collaborate in the same treatment plan."
      }
    ]
  }
];