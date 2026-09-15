export interface Doctor {
  id: string;
  slug: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  secondaryImage: string;
  quote: string;
  bio: string;
  credentials: string[];
  clinicalInterests: string[];
  procedures: string[];
  languages: string[];
  scheduleLimit: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-adrian-laurent",
    slug: "dr-adrian-laurent",
    name: "Dr. Adrian Laurent",
    role: "Chief Implant Surgeon & Surgical Reconstructive Director",
    specialty: "Advanced Oral Implantology & Bone Regeneration",
    image: "/assets/aurea/doctors/dr-adrian-laurent.jpg",
    secondaryImage: "/assets/aurea/doctors/doctor-in-operatory.jpg",
    quote: "True surgical mastery is invisible. When bone, tissue, and ceramic integrate harmoniously, nature is simply restored to its rightful state.",
    bio: "With over 18 years of focused practice in computer-guided reconstructive surgery and complex bone grafting, Dr. Adrian Laurent leads surgical operations at AUREA. His approach prioritizes tissue preservation, piezoelectric microsurgery, and biological zirconia implants that eliminate metal exposure while stimulating healthy osteogenesis.",
    credentials: [
      "International Clinical Training & Oral Reconstruction",
      "Fellow, International Team for Implantology (ITI)",
      "Diplomate in Computer-Guided Reconstructive Surgery",
      "Senior Lecturer, International Surgical Symposia"
    ],
    clinicalInterests: [
      "Biomimetic Bone Augmentation & Sinus Elevation",
      "Immediate Load Full Arch Zirconia Rehabilitation",
      "Metal-Free Zirconia Dental Implants",
      "Dynamic Real-Time Optical Surgical Navigation"
    ],
    procedures: [
      "Dental Implants",
      "Full Mouth Occlusal Rehabilitation",
      "Computer-Guided Flapless Surgery",
      "Autogenous Ridge Augmentation"
    ],
    languages: ["English", "French", "Vietnamese (Conversational)"],
    scheduleLimit: "Strictly capped at 3 comprehensive surgical cases per week"
  },
  {
    id: "dr-elena-vance",
    slug: "dr-elena-vance",
    name: "Dr. Elena Vance",
    role: "Master Aesthetic Dentist & Digital Smile Architect",
    specialty: "Restorative Prosthodontics & Micro-Ceramics",
    image: "/assets/aurea/doctors/dr-elena-vance.jpg",
    secondaryImage: "/assets/aurea/doctors/doctor-in-consultation.jpg",
    quote: "A smile should never enter the room before the person does. My purpose is to create teeth that belong so innately to your face that they seem entirely untouched by human hands.",
    bio: "Dr. Elena Vance is internationally recognized for her conservative, microscopic approach to porcelain veneers and digital smile planning. Working alongside our in-house master ceramist, she evaluates dynamic facial muscular movement and phonetics, hand-sculpting prototypes that honor each patient’s biological identity.",
    credentials: [
      "Master Clinician in Digital Restorative Dentistry",
      "Accredited Member, European Society of Cosmetic Dentistry (ESCD)",
      "Postgraduate Honors in Fixed Prosthodontics",
      "Visiting Faculty in Biomimetic Ceramic Dentistry"
    ],
    clinicalInterests: [
      "Micro-Preparation & Non-Prep Feldspathic Veneers",
      "Digital Smile Architecture & 3D Phonetic Prototyping",
      "Biomimetic Direct Composite Layering",
      "Enamel Microabrasion & Internal Bleaching Protocols"
    ],
    procedures: [
      "Digital Smile Design",
      "Master Ceramic Veneers",
      "Discrete Orthodontics Alignment",
      "Full Mouth Restorative Synergy"
    ],
    languages: ["English", "German", "Vietnamese (Conversational)"],
    scheduleLimit: "Treats a maximum of 2 restorative aesthetic patients daily"
  },
  {
    id: "dr-maya-linh",
    slug: "dr-maya-linh",
    name: "Dr. Maya Linh",
    role: "Director of Facial Aesthetics & Dermatological Medicine",
    specialty: "Aesthetic Medicine & Regenerative Dermatology",
    image: "/assets/aurea/doctors/dr-maya-linh.jpg",
    secondaryImage: "/assets/aurea/aesthetics/aesthetics-care-ritual.jpg",
    quote: "The lower third of the face is anchored by the jaws and teeth. When medical dermatology collaborates with structural dentistry, the rejuvenation is effortless and lifelong.",
    bio: "Dr. Maya Linh specializes in regenerative facial aesthetics, cellular skin stimulation, and structural facial balancing. Trained across Europe and Asia, she advocates for subtle restorative enhancements over volume inflation, employing high-frequency ultrasound diagnostics to ensure vascular safety and millimeter precision in every procedure.",
    credentials: [
      "Doctor of Medicine (M.D.) with Specialization in Dermatology",
      "Fellow, International Academy of Aesthetic Medicine",
      "Board Certified in Advanced Non-Surgical Facial Contouring",
      "Researcher in Polynucleotide and Exosome Biostimulation"
    ],
    clinicalInterests: [
      "Ultrasound-Guided Deep Plane Biostimulation",
      "Perioral Micro-Architecture & Lip Rebalancing",
      "Medical Regenerative Microneedling & Exosomes",
      "Picosecond Laser Skin Clarification"
    ],
    procedures: [
      "Facial Aesthetics & Regenerative Medicine",
      "Collagen Biostimulator Therapy (PLLA / CaHA)",
      "Perioral Structural Harmonization",
      "Advanced Medical Skin Analysis"
    ],
    languages: ["Vietnamese", "English", "French"],
    scheduleLimit: "Dedicated 1-on-1 consultations with 60-minute diagnostic windows"
  }
];