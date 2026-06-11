export type Organization = {
  id: string;
  name: string;
  category: string;
  description: string;
};

export const organizations: Organization[] = [
  // Student Government
  {
    id: "el-consejo-atenista",
    name: "El Consejo Atenista",
    category: "Student Government",
    description:
      "The supreme student government of Ateneo de Zamboanga University, representing and advocating for the interests of the student body. Guided by Ignatian values, it promotes accountable leadership, participatory governance, and meaningful service.",
  },

  // Academic
  {
    id: "accountancy-academic-organization",
    name: "Accountancy Academic Organization",
    category: "Academic",
    description:
      "Serves as the official academic home for BS Accountancy students. It supports professional growth, academic excellence, and collaboration among future accountants.",
  },
  {
    id: "education-academic-organization",
    name: "Education Academic Organization",
    category: "Academic",
    description:
      "Represents students pursuing education-related programs. It fosters leadership, professional development, and a commitment to quality teaching.",
  },
  {
    id: "siteao",
    name: "Science, Information Technology, and Engineering Academic Organization (SITEAO)",
    category: "Academic",
    description:
      "Unites students from science, information technology, and engineering disciplines. It encourages academic achievement, collaboration, and technological innovation.",
  },
  {
    id: "nursing-academic-organization",
    name: "Nursing Academic Organization",
    category: "Academic",
    description:
      "Serves as the official organization for nursing students. It promotes professional competence, compassionate service, and academic excellence in healthcare.",
  },
  {
    id: "liberal-arts-academic-organization",
    name: "Liberal Arts Academic Organization",
    category: "Academic",
    description:
      "Represents students from liberal arts programs. It fosters critical thinking, creativity, and engagement with social and cultural issues.",
  },
  {
    id: "jieep-adzu",
    name: "Junior Institute of Electronics Engineers of the Philippines – AdZU Chapter",
    category: "Academic",
    description:
      "Supports electronics engineering students through technical learning, leadership opportunities, and professional development.",
  },
  {
    id: "samahang-pilosopiya-ng-ateneo",
    name: "Samahang Pilosopiya ng Ateneo",
    category: "Academic",
    description:
      "The co-curricular organization for philosophy students that promotes intellectual inquiry, ethical reflection, and meaningful discussion.",
  },
  {
    id: "information-security-students-organization",
    name: "Information Security Students Organization",
    category: "Academic",
    description:
      "Promotes cybersecurity awareness and responsible digital citizenship. It equips students with the skills needed to address modern cyber threats.",
  },
  {
    id: "fabricreate",
    name: "FabriCreate",
    category: "Academic",
    description:
      "Provides opportunities for students to explore digital fabrication, innovation, and design through hands-on learning experiences.",
  },
  {
    id: "international-studies-organization",
    name: "International Studies Organization",
    category: "Academic",
    description:
      "Serves students of the BA International Studies program while promoting global awareness and cultural understanding.",
  },
  {
    id: "bionics",
    name: "Biomedical Engineering Network of Integrated Clinical Sciences (BIONICS)",
    category: "Academic",
    description:
      "The home organization for Biomedical Engineering students, fostering innovation at the intersection of healthcare and engineering.",
  },
  {
    id: "aicg",
    name: "Ateneo Informatics and Computing Guild (AICG)",
    category: "Academic",
    description:
      "Brings together students from Information Technology, Computer Science, and New Media and Computer Animation programs to foster technical growth and innovation.",
  },
  {
    id: "adzu-ignatian-civil-engineering-students-organization",
    name: "ADZU Ignatian Civil Engineering Students Organization",
    category: "Academic",
    description:
      "Supports the academic and professional development of civil engineering students while integrating Ignatian values into engineering practice.",
  },
  {
    id: "ateneo-biological-society",
    name: "Ateneo Biological Society",
    category: "Academic",
    description:
      "Unites students passionate about biology and the natural sciences through scientific learning, environmental awareness, and community engagement.",
  },

  // Business
  {
    id: "management-academic-organization",
    name: "Management Academic Organization",
    category: "Business",
    description:
      "Supports students enrolled in management-related programs. It promotes leadership, innovation, and practical business learning.",
  },
  {
    id: "jpia",
    name: "Junior Philippine Institute of Accountants (JPIA)",
    category: "Business",
    description:
      "Represents students pursuing accounting and related disciplines. It prepares members for the accounting profession through leadership, training, and professional development.",
  },
  {
    id: "jma-adzu",
    name: "Junior Marketing Association – AdZU (JMA-AdZU)",
    category: "Business",
    description:
      "Develops future marketing professionals through leadership opportunities, strategic thinking, and practical learning experiences.",
  },
  {
    id: "legal-management-society",
    name: "Legal Management Society",
    category: "Business",
    description:
      "Supports students interested in law, governance, and business. It promotes professional growth, critical thinking, and legal awareness.",
  },

  // Sports and Recreation
  {
    id: "ateneo-blue-vigors",
    name: "Ateneo Blue Vigors",
    category: "Sports and Recreation",
    description:
      "The official dance organization of Ateneo de Zamboanga University. It develops performance skills while promoting teamwork, discipline, and artistic expression.",
  },
  {
    id: "ateneo-eagle-pep-squad",
    name: "Ateneo Eagle Pep Squad",
    category: "Sports and Recreation",
    description:
      "The university's official cheerleading team that energizes school events through athleticism, teamwork, and school spirit.",
  },
  {
    id: "ateneo-music-club",
    name: "Ateneo Music Club",
    category: "Sports and Recreation",
    description:
      "Brings together students who share a passion for music through collaboration, performance, and skill development.",
  },
  {
    id: "teatro-ateneo-de-zamboanga",
    name: "Teatro Ateneo de Zamboanga",
    category: "Sports and Recreation",
    description:
      "Dedicated to theater and performance arts, fostering creativity, storytelling, and cultural appreciation.",
  },
  {
    id: "ateneo-art-company",
    name: "Ateneo Art Company",
    category: "Sports and Recreation",
    description:
      "Promotes artistic expression and cultural awareness through workshops, exhibits, and collaborative projects.",
  },

  // Public and Communications
  {
    id: "imaje",
    name: "IMAJE",
    category: "Public and Communications",
    description:
      "A student-led multimedia organization specializing in visual storytelling through design, photography, film, animation, and digital media.",
  },
  {
    id: "la-liga-historia-zamboanguena",
    name: "La Liga Historia Zamboangueña",
    category: "Public and Communications",
    description:
      "Promotes historical awareness, cultural preservation, and meaningful dialogue about Zamboanga's heritage and identity.",
  },
  {
    id: "association-of-bse-centennial-scholars",
    name: "Association of BSE Centennial Scholars",
    category: "Public and Communications",
    description:
      "Represents education scholars while promoting leadership, academic excellence, and service.",
  },
  {
    id: "society-of-ateneo-scholars",
    name: "Society of Ateneo Scholars",
    category: "Public and Communications",
    description:
      "The official organization of Ateneo scholars that fosters leadership, scholarship, and community among student scholars.",
  },

  // Socio-Civic and Political
  {
    id: "sadaqah",
    name: "SADAQAH",
    category: "Socio-Civic and Political",
    description:
      "A socio-civic organization focused on community development and humanitarian service through initiatives addressing education, health, and wellness.",
  },
  {
    id: "el-fuente-ph",
    name: "El Fuente PH",
    category: "Socio-Civic and Political",
    description:
      "Empowers youth to become active contributors to society through leadership, advocacy, and civic engagement.",
  },
  {
    id: "adzu-red-cross-council",
    name: "AdZU Red Cross Council",
    category: "Socio-Civic and Political",
    description:
      "Promotes volunteerism, humanitarian values, disaster preparedness, and community service.",
  },
  {
    id: "laz-bellezas",
    name: "Laz Bellezas",
    category: "Socio-Civic and Political",
    description:
      "Advocates for gender equality, inclusivity, and women's empowerment through education and awareness campaigns.",
  },
  {
    id: "stand",
    name: "Students Taking Action for New Directions (STAND)",
    category: "Socio-Civic and Political",
    description:
      "A service-oriented organization dedicated to community engagement and social responsibility.",
  },
  {
    id: "ipadz",
    name: "Indigenous Peoples' Alliance for Development in Zamboanga (IPAdZ)",
    category: "Socio-Civic and Political",
    description:
      "Advocates for the rights, welfare, and cultural preservation of indigenous communities.",
  },
  {
    id: "solidarity-of-leaders",
    name: "Solidarity of Leaders",
    category: "Socio-Civic and Political",
    description:
      "Develops students into responsible and service-oriented leaders committed to community engagement and positive social impact.",
  },

  // Environmental
  {
    id: "the-ecowatch-organization",
    name: "The Ecowatch Organization",
    category: "Environmental",
    description:
      "Promotes environmental awareness, sustainability, and conservation efforts while encouraging responsible stewardship of the environment.",
  },
  {
    id: "safepaws",
    name: "Safepaws",
    category: "Environmental",
    description:
      "Advocates for animal welfare, responsible pet care, and community action to protect the well-being of animals.",
  },
];
