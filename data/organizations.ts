export type Organization = {
  id: string;
  name: string;
  category: string;
  description: string;
  logo?: string;
};

export const organizations: Organization[] = [
  // Student Government
  {
    id: "el-consejo-atenista",
    name: "El Consejo Atenista",
    category: "Student Government",
    description:
      "The supreme student government of Ateneo de Zamboanga University, representing and advocating for the interests of the student body. Guided by Ignatian values, it promotes accountable leadership, participatory governance, and meaningful service.",
    logo: "/logos/El Consejo Atenista.jpg",
  },

  // Academic
  {
    id: "accountancy-academic-organization",
    name: "Accountancy Academic Organization",
    category: "Academic",
    description:
      "Serves as the official academic home for BS Accountancy students. It supports professional growth, academic excellence, and collaboration among future accountants.",
    logo: "/logos/Accountancy Academic Organization.jpg",
  },
  {
    id: "education-academic-organization",
    name: "Education Academic Organization",
    category: "Academic",
    description:
      "Represents students pursuing education-related programs. It fosters leadership, professional development, and a commitment to quality teaching.",
    logo: "/logos/EAO.jpg",
  },
  {
    id: "siteao",
    name: "Science, Information Technology, and Engineering Academic Organization (SITEAO)",
    category: "Academic",
    description:
      "Unites students from science, information technology, and engineering disciplines. It encourages academic achievement, collaboration, and technological innovation.",
    logo: "/logos/SITEAO.jpg",
  },
  {
    id: "nursing-academic-organization",
    name: "Nursing Academic Organization",
    category: "Academic",
    description:
      "Serves as the official organization for nursing students. It promotes professional competence, compassionate service, and academic excellence in healthcare.",
    logo: "/logos/NAO.jpg",
  },
  {
    id: "liberal-arts-academic-organization",
    name: "Liberal Arts Academic Organization",
    category: "Academic",
    description:
      "Represents students from liberal arts programs. It fosters critical thinking, creativity, and engagement with social and cultural issues.",
    logo: "/logos/LAAO.jpg",
  },
  {
    id: "jieep-adzu",
    name: "Junior Institute of Electronics Engineers of the Philippines – AdZU Chapter",
    category: "Academic",
    description:
      "Supports electronics engineering students through technical learning, leadership opportunities, and professional development.",
    logo: "/logos/Junior Institute of Electronics Engineers of the Philippines- ADZU Chapter.jpg",
  },
  {
    id: "samahang-pilosopiya-ng-ateneo",
    name: "Samahang Pilosopiya ng Ateneo",
    category: "Academic",
    description:
      "The co-curricular organization for philosophy students that promotes intellectual inquiry, ethical reflection, and meaningful discussion.",
    logo: "/logos/Samahang Pilosopiya ng Ateneo.jpg",
  },
  {
    id: "information-security-students-organization",
    name: "Information Security Students Organization",
    category: "Academic",
    description:
      "Promotes cybersecurity awareness and responsible digital citizenship. It equips students with the skills needed to address modern cyber threats.",
    logo: "/logos/Information Security Students Organization.jpg",
  },
  {
    id: "fabricreate",
    name: "FabriCreate",
    category: "Academic",
    description:
      "Provides opportunities for students to explore digital fabrication, innovation, and design through hands-on learning experiences.",
    logo: "/logos/FabriCreate.jpg",
  },
  {
    id: "international-studies-organization",
    name: "International Studies Organization",
    category: "Academic",
    description:
      "Serves students of the BA International Studies program while promoting global awareness and cultural understanding.",
    logo: "/logos/International Studies Organization.jpg",
  },
  {
    id: "bionics",
    name: "Biomedical Engineering Network of Integrated Clinical Sciences (BIONICS)",
    category: "Academic",
    description:
      "The home organization for Biomedical Engineering students, fostering innovation at the intersection of healthcare and engineering.",
    logo: "/logos/Biomedical Engineering Network of Integrated Clinical Sciences.jpg",
  },
  {
    id: "aicg",
    name: "Ateneo Informatics and Computing Guild (AICG)",
    category: "Academic",
    description:
      "Brings together students from Information Technology, Computer Science, and New Media and Computer Animation programs to foster technical growth and innovation.",
    logo: "/logos/Ateneo Informatics Computing Guild.jpg",
  },
  {
    id: "adzu-ignatian-civil-engineering-students-organization",
    name: "ADZU Ignatian Civil Engineering Students Organization",
    category: "Academic",
    description:
      "Supports the academic and professional development of civil engineering students while integrating Ignatian values into engineering practice.",
    logo: "/logos/ADZU Ignatian Civil Engineering Students Organization.jpg",
  },
  {
    id: "ateneo-biological-society",
    name: "Ateneo Biological Society",
    category: "Academic",
    description:
      "Unites students passionate about biology and the natural sciences through scientific learning, environmental awareness, and community engagement.",
    logo: "/logos/Ateneo Biological Society.jpg",
  },
  {
    id: "ateneo-debate-union",
    name: "Ateneo Debate Union",
    category: "Academic",
    description:
      "Develops students' critical thinking, public speaking, and argumentation skills through competitive debate and forensic activities, representing AdZU in local and national competitions.",
    logo: "/logos/Ateneo Debate Union.jpg",
  },
  {
    id: "foundation-of-ateneo-student-tutors",
    name: "Foundation of Ateneo Student Tutors (FAST)",
    category: "Academic",
    description:
      "Provides peer tutoring services across academic disciplines, helping students achieve excellence while developing the teaching and leadership skills of its tutors.",
    logo: "/logos/Foundation of Ateneo Student Tutors.jpg",
  },
  {
    id: "gdg-on-campus-blue-eagle",
    name: "Google Developer Groups On Campus Blue Eagle",
    category: "Academic",
    description:
      "Connects students passionate about technology with Google's developer ecosystem through workshops, hackathons, and tech talks that build practical, industry-relevant skills.",
    logo: "/logos/Google Developer Groups On Campus Blue Eagle.jpg",
  },

  // Business
  {
    id: "management-academic-organization",
    name: "Management Academic Organization",
    category: "Business",
    description:
      "Supports students enrolled in management-related programs. It promotes leadership, innovation, and practical business learning.",
    logo: "/logos/MAO.jpg",
  },
  {
    id: "jpia",
    name: "Junior Philippine Institute of Accountants (JPIA)",
    category: "Business",
    description:
      "Represents students pursuing accounting and related disciplines. It prepares members for the accounting profession through leadership, training, and professional development.",
    logo: "/logos/Junior Philippine Institute of Accountants.jpg",
  },
  {
    id: "jma-adzu",
    name: "Junior Marketing Association – AdZU (JMA-AdZU)",
    category: "Business",
    description:
      "Develops future marketing professionals through leadership opportunities, strategic thinking, and practical learning experiences.",
    logo: "/logos/Junior Institute for Marketing Association - Ateneo de Zamboanga University.jpg",
  },
  {
    id: "legal-management-society",
    name: "Legal Management Society",
    category: "Business",
    description:
      "Supports students interested in law, governance, and business. It promotes professional growth, critical thinking, and legal awareness.",
  },
  {
    id: "developing-entrepreneur-ateneo-league",
    name: "Developing Entrepreneur Ateneo League (DEAL)",
    category: "Business",
    description:
      "Cultivates entrepreneurial mindsets and skills among AdZU students through competitions, mentorship, and experiential learning in business innovation and venture creation.",
    logo: "/logos/Developing Entrepreneur Ateneo League.jpg",
  },
  {
    id: "junior-jaycees-chamber-adzu",
    name: "Junior Jaycees Chamber – AdZU",
    category: "Business",
    description:
      "The AdZU chapter of the Junior Chamber International, developing young leaders through civic projects, community service, and hands-on leadership training.",
    logo: "/logos/Junior Jaycees Chamber - AdZU.jpg",
  },

  // Sports and Recreation
  {
    id: "ateneo-blue-vigors",
    name: "Ateneo Blue Vigors",
    category: "Sports and Recreation",
    description:
      "The official dance organization of Ateneo de Zamboanga University. It develops performance skills while promoting teamwork, discipline, and artistic expression.",
    logo: "/logos/Ateneo Blue Vigors.jpg",
  },
  {
    id: "ateneo-eagle-pep-squad",
    name: "Ateneo Eagle Pep Squad",
    category: "Sports and Recreation",
    description:
      "The university's official cheerleading team that energizes school events through athleticism, teamwork, and school spirit.",
    logo: "/logos/Ateneo Eagle Pep Squad.jpg",
  },
  {
    id: "ateneo-music-club",
    name: "Ateneo Music Club",
    category: "Sports and Recreation",
    description:
      "Brings together students who share a passion for music through collaboration, performance, and skill development.",
    logo: "/logos/Ateneo Music Club.jpg",
  },
  {
    id: "teatro-ateneo-de-zamboanga",
    name: "Teatro Ateneo de Zamboanga",
    category: "Sports and Recreation",
    description:
      "Dedicated to theater and performance arts, fostering creativity, storytelling, and cultural appreciation.",
    logo: "/logos/Teatro Ateneo de Zamboanga.jpg",
  },
  {
    id: "ateneo-art-company",
    name: "Ateneo Art Company",
    category: "Sports and Recreation",
    description:
      "Promotes artistic expression and cultural awareness through workshops, exhibits, and collaborative projects.",
    logo: "/logos/ArtCo.jpg",
  },

  // Public and Communications
  {
    id: "imaje",
    name: "IMAJE",
    category: "Public and Communications",
    description:
      "A student-led multimedia organization specializing in visual storytelling through design, photography, film, animation, and digital media.",
    logo: "/logos/IMAJE - Ateneo de Zamboanga Animators Guild.jpg",
  },
  {
    id: "la-liga-historia-zamboanguena",
    name: "La Liga Historia Zamboangueña",
    category: "Public and Communications",
    description:
      "Promotes historical awareness, cultural preservation, and meaningful dialogue about Zamboanga's heritage and identity.",
    logo: "/logos/La liga.jpg",
  },
  {
    id: "association-of-bse-centennial-scholars",
    name: "Association of BSE Centennial Scholars",
    category: "Public and Communications",
    description:
      "Represents education scholars while promoting leadership, academic excellence, and service.",
    logo: "/logos/Association of BSE Centennial Scholars.jpg",
  },
  {
    id: "society-of-ateneo-scholars",
    name: "Society of Ateneo Scholars",
    category: "Public and Communications",
    description:
      "The official organization of Ateneo scholars that fosters leadership, scholarship, and community among student scholars.",
    logo: "/logos/Society of Ateneo Scholars.jpg",
  },
  {
    id: "the-beacon-publications",
    name: "The Beacon Publications",
    category: "Public and Communications",
    description:
      "AdZU's official student publication that upholds press freedom and journalistic excellence through news reporting, feature writing, and campus advocacy.",
    logo: "/logos/The Beacon Publications.jpg",
  },
  {
    id: "sinag",
    name: "SINAG",
    category: "Public and Communications",
    description:
      "A campus organization that illuminates student voices and amplifies community stories through creative media, advocacy campaigns, and youth-led initiatives.",
    logo: "/logos/SINAG.jpg",
  },

  // Socio-Civic and Political
  {
    id: "sadaqah",
    name: "SADAQAH",
    category: "Socio-Civic and Political",
    description:
      "A socio-civic organization focused on community development and humanitarian service through initiatives addressing education, health, and wellness.",
    logo: "/logos/SADAQAH.jpg",
  },
  {
    id: "el-fuente-ph",
    name: "El Fuente PH",
    category: "Socio-Civic and Political",
    description:
      "Empowers youth to become active contributors to society through leadership, advocacy, and civic engagement.",
    logo: "/logos/El Fluente.jpg",
  },
  {
    id: "adzu-red-cross-council",
    name: "AdZU Red Cross Council",
    category: "Socio-Civic and Political",
    description:
      "Promotes volunteerism, humanitarian values, disaster preparedness, and community service.",
    logo: "/logos/Red Cross Youth Council.jpg",
  },
  {
    id: "laz-bellezas",
    name: "Laz Bellezas",
    category: "Socio-Civic and Political",
    description:
      "Advocates for gender equality, inclusivity, and women's empowerment through education and awareness campaigns.",
    logo: "/logos/Laz Bellezas.jpg",
  },
  {
    id: "stand",
    name: "Students Taking Action for New Directions (STAND)",
    category: "Socio-Civic and Political",
    description:
      "A service-oriented organization dedicated to community engagement and social responsibility.",
    logo: "/logos/Stand.jpg",
  },
  {
    id: "ipadz",
    name: "Indigenous Peoples' Alliance for Development in Zamboanga (IPAdZ)",
    category: "Socio-Civic and Political",
    description:
      "Advocates for the rights, welfare, and cultural preservation of indigenous communities.",
    logo: "/logos/ipadz.jpg",
  },
  {
    id: "solidarity-of-leaders",
    name: "Solidarity of Leaders",
    category: "Socio-Civic and Political",
    description:
      "Develops students into responsible and service-oriented leaders committed to community engagement and positive social impact.",
  },
  {
    id: "ateneo-peers-circle",
    name: "Ateneo Peers' Circle",
    category: "Socio-Civic and Political",
    description:
      "A peer support and mental health advocacy organization that promotes emotional well-being, active listening, and psychological health awareness among AdZU students.",
    logo: "/logos/Ateneo Peers' Circle.jpg",
  },
  {
    id: "usad-adzu",
    name: "USAD Ateneo de Zamboanga",
    category: "Socio-Civic and Political",
    description:
      "Fosters unity and development among AdZU students through cultural exchange, community programs, and collaborative action toward shared student welfare.",
    logo: "/logos/USAD Ateneo de Zamboanga.jpg",
  },
  {
    id: "yahra",
    name: "Youth Alliance for Human Rights Ateneo (YAHRA)",
    category: "Socio-Civic and Political",
    description:
      "Advocates for human rights education and justice through campaigns, forums, and community engagement rooted in the Ignatian call to serve the marginalized.",
    logo: "/logos/Youth Alliance for Human Rights Ateneo - YAHRA.jpg",
  },

  // Faith and Formation
  {
    id: "ateneo-catechetical-instruction-league",
    name: "Ateneo Catechetical Instruction League (ACIL)",
    category: "Faith and Formation",
    description:
      "Trains students as catechists and faith educators, deepening their understanding of Catholic doctrine and preparing them for meaningful service in their communities.",
    logo: "/logos/Ateneo Catechetical Instruction League ADZU.jpg",
  },
  {
    id: "ateneo-liturgical-society",
    name: "Ateneo Liturgical Society",
    category: "Faith and Formation",
    description:
      "Enriches the university's liturgical life by forming student lectors, commentators, and ministers who lead communal worship with reverence and excellence.",
    logo: "/logos/Ateneo Liturgical Society.jpg",
  },
  {
    id: "cfc-youth-for-christ-adzu",
    name: "CFC Youth For Christ – ADZU Campus Based",
    category: "Faith and Formation",
    description:
      "A faith-based youth community rooted in the Couples for Christ charism, fostering spiritual growth, discipleship, and Christian living among students.",
    logo: "/logos/CFC Youth For Christ - ADZU Campus Based.jpg",
  },
  {
    id: "christian-life-community-adzu",
    name: "Christian Life Community – AdZU",
    category: "Faith and Formation",
    description:
      "A Jesuit-inspired faith community that accompanies students in their spiritual journey through prayer, discernment, and apostolic service grounded in Ignatian spirituality.",
    logo: "/logos/Christian Life Community - Ateneo de Zamboanga University .jpg",
  },
  {
    id: "every-nation-campus-adzu",
    name: "Every Nation Campus",
    category: "Faith and Formation",
    description:
      "A campus ministry that seeks to raise up student leaders through worship, discipleship, and mission, building a vibrant Christian community within AdZU.",
    logo: "/logos/Every Nation Campus.jpg",
  },
  {
    id: "muslim-students-association-adzu",
    name: "Muslim Students Association – AdZU",
    category: "Faith and Formation",
    description:
      "Serves as a home for Muslim students at AdZU, promoting Islamic values, cultural understanding, and a spirit of unity and inter-religious dialogue on campus.",
    logo: "/logos/Muslim Students Association - Ateneo de Zamboanga University.jpg",
  },
  {
    id: "psalm-adzu",
    name: "PSALM AdZU",
    category: "Faith and Formation",
    description:
      "A praise and worship community that leads the student body in musical ministry, fostering spiritual growth and a deeper relationship with God through song and service.",
    logo: "/logos/Psalm AdZU .jpg",
  },
  {
    id: "society-of-the-knights-of-ignatius",
    name: "Society of the Knights of Ignatius – ADZU College",
    category: "Faith and Formation",
    description:
      "An organization rooted in Ignatian spirituality that forms students into servant-leaders through spiritual exercises, retreats, and values-centered community service.",
    logo: "/logos/Society of the Knights of Ignatius - ADZU College.jpg",
  },

  // Environmental
  {
    id: "the-ecowatch-organization",
    name: "The Ecowatch Organization",
    category: "Environmental",
    description:
      "Promotes environmental awareness, sustainability, and conservation efforts while encouraging responsible stewardship of the environment.",
    logo: "/logos/EcoWatch.jpg",
  },
  {
    id: "safepaws",
    name: "Safepaws",
    category: "Environmental",
    description:
      "Advocates for animal welfare, responsible pet care, and community action to protect the well-being of animals.",
    logo: "/logos/Safepaws.jpg",
  },
];
