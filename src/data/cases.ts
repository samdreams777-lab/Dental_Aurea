export interface ClinicalCase {
  id: string;
  title: string;
  discipline: "Smile Architecture" | "Implantology" | "Full Rehabilitation" | "Aesthetic Medicine";
  leadImage: string;
  detailImage: string;
  summary: string;
  patientContext: string;
  clinicalApproach: string;
  materialsUsed: string[];
  duration: string;
  clinicians: string[];
}

export const clinicalCases: ClinicalCase[] = [
  {
    id: "case-01",
    title: "Case 01 — Biomimetic Ceramic Harmony",
    discipline: "Smile Architecture",
    leadImage: "/assets/aurea/cases/case-smile-design.jpg",
    detailImage: "/assets/aurea/dentistry/dentistry-ceramic-prep.jpg",
    summary: "Refinement of smile architecture using 10 custom hand-layered feldspathic porcelain veneers with subtle enamel micro-texture and organic cervical translucency.",
    patientContext: "Patient presented with historical composite edge bonding demonstrating marginal discoloration, moderate tooth length attrition, and asymmetric incisal display.",
    clinicalApproach: "Utilizing 3D facial tracking, a digital prototype was tested intraorally. Following 0.3mm conservative enamel micro-preparation under high magnification, individually fired feldspathic veneers were placed with light-cure resin under total rubber dam isolation.",
    materialsUsed: [
      "Feldspathic Master Porcelain (Creation CC)",
      "Variolink Esthetic Warm Translucent Resin Cement",
      "Gingival Laser Biostimulation"
    ],
    duration: "2 clinical sessions over 9 days",
    clinicians: ["Dr. Elena Vance"]
  },
  {
    id: "case-02",
    title: "Case 02 — Biological Zirconia Reconstruction",
    discipline: "Implantology",
    leadImage: "/assets/aurea/cases/case-implant-reconstruction.jpg",
    detailImage: "/assets/aurea/technology/tech-diagnostics-display.jpg",
    summary: "Immediate-load posterior implant reconstruction utilizing metal-free zirconia fixtures and custom emergent titanium-zirconia abutments.",
    patientContext: "Terminal molar dentition with historical root fractures, localized bone loss, and severe chewing discomfort on the right quadrant.",
    clinicalApproach: "Flapless computer-guided osteotomy guided by 3D CBCT registration. Simultaneous autologous PRF membrane placement and immediate screw-retained monolithic zirconia provisory, followed by final layered zirconia restoration at 12 weeks.",
    materialsUsed: [
      "Straumann Pure Ceramic Zirconia Implants",
      "Platelet-Rich Fibrin (PRF) Autologous Membranes",
      "Screw-Retained Katana Zirconia Crowns"
    ],
    duration: "Immediate provisory at Day 1; final integration at 12 weeks",
    clinicians: ["Dr. Adrian Laurent"]
  },
  {
    id: "case-03",
    title: "Case 03 — Full Arch Occlusal Restoration",
    discipline: "Full Rehabilitation",
    leadImage: "/assets/aurea/cases/case-full-rehab.jpg",
    detailImage: "/assets/aurea/clinic/clinic-suite.jpg",
    summary: "Comprehensive rehabilitation restoring 4.2mm of lost vertical dimension of occlusion, resolving severe TMJ muscle fatigue and structural tooth wear.",
    patientContext: "Severe generalized nocturnal bruxism and acid reflux erosion across all quadrants. Patient reported chronic morning tension headaches and flattened front teeth.",
    clinicalApproach: "TENS neuromuscular deconditioning to establish stable centric relation. Phased digital reconstruction with 28 bonded lithium disilicate overlays and crowns, establishing canine guidance and balanced bilateral contacts.",
    materialsUsed: [
      "IPS e.max CAD Lithium Disilicate High Translucency",
      "Panavia V5 Dual-Curing Resin Cement",
      "Custom Digital Occlusal Splint Night Orthotic"
    ],
    duration: "Phased across 4 months",
    clinicians: ["Dr. Adrian Laurent", "Dr. Elena Vance"]
  },
  {
    id: "case-04",
    title: "Case 04 — Perioral & Mid-Face Structural Balance",
    discipline: "Aesthetic Medicine",
    leadImage: "/assets/aurea/cases/case-facial-balancing.jpg",
    detailImage: "/assets/aurea/aesthetics/aesthetics-skin-botanicals.jpg",
    summary: "Deep-plane collagen biostimulation paired with perioral architectural framing to complement completed restorative dental therapy.",
    patientContext: "Patient experienced subtle volume loss around the nasolabial fold and lower lip corners following decades of improper bite posture.",
    clinicalApproach: "Ultrasound-guided cannula delivery of poly-L-lactic acid (PLLA) stimulating native neocollagenesis at the periosteal level, harmonizing mid-face soft tissues with newly restored anterior dental support.",
    materialsUsed: [
      "Poly-L-Lactic Acid Biostimulator",
      "High-Molecular-Weight Hyaluronic Framing Complex",
      "Polynucleotide Cellular Rejuvenation"
    ],
    duration: "2 sessions spaced 6 weeks apart",
    clinicians: ["Dr. Maya Linh"]
  }
];

export interface JournalArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  authorRole: string;
  image: string;
}

export const journalArticles: JournalArticle[] = [
  {
    slug: "mathematics-of-natural-harmony",
    title: "The Mathematics of Natural Harmony: Golden Ratios vs. Organic Asymmetry",
    category: "Aesthetic Philosophy",
    date: "September 2026",
    readTime: "6 min read",
    excerpt: "Why the pursuit of mathematical perfection often creates unnatural dental aesthetics, and how master ceramists embrace biological micro-irregularities to achieve true luxury.",
    author: "Dr. Elena Vance",
    authorRole: "Master Aesthetic Dentist",
    image: "/assets/aurea/editorial/editorial-shadows.jpg"
  },
  {
    slug: "biocompatibility-in-modern-implantology",
    title: "Biocompatibility in Modern Implantology: The Paradigm Shift to Ceramic Zirconia",
    category: "Clinical Engineering",
    date: "August 2026",
    readTime: "8 min read",
    excerpt: "Examining peri-implant soft tissue attachment, mucosal seal integrity, and biological longevity when replacing missing teeth with modern non-metallic biomaterials.",
    author: "Dr. Adrian Laurent",
    authorRole: "Chief Implant Surgeon",
    image: "/assets/aurea/technology/tech-precision-instruments.jpg"
  },
  {
    slug: "architectural-approach-to-facial-aging",
    title: "The Architectural Approach to Facial Aging: Supporting Bone Structure Before Soft Tissue",
    category: "Regenerative Medicine",
    date: "July 2026",
    readTime: "5 min read",
    excerpt: "Facial aging is fundamentally a story of bone resorption and loss of dental vertical dimension. Exploring how integrated dental-dermatological care restores authentic youthfulness.",
    author: "Dr. Maya Linh",
    authorRole: "Director of Facial Aesthetics",
    image: "/assets/aurea/aesthetics/aesthetics-natural-symmetry.jpg"
  }
];