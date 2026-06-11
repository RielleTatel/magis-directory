export type FeaturedOrg = {
  id: string;
  name: string;
  category: string;
  description: string;
  color: string;
  textColor: string;
  categoryColor: string;
};

export const featuredOrgs: FeaturedOrg[] = [
  {
    id: "el-consejo-atenista",
    name: "El Consejo Atenista",
    category: "Student Government",
    description:
      "The supreme student government of AdZU, representing and advocating for the interests of the student body through accountable leadership and meaningful service.",
    color: "bg-[#1B3F8B]",
    textColor: "text-white",
    categoryColor: "bg-white/20 text-white",
  },
  {
    id: "siteao",
    name: "SITEAO",
    category: "Academic",
    description:
      "Unites students from science, information technology, and engineering disciplines through academic achievement, collaboration, and technological innovation.",
    color: "bg-[#4A7FC1]",
    textColor: "text-white",
    categoryColor: "bg-white/20 text-white",
  },
  {
    id: "teatro-ateneo-de-zamboanga",
    name: "Teatro Ateneo de Zamboanga",
    category: "Sports and Recreation",
    description:
      "Dedicated to theater and performance arts, fostering creativity, storytelling, and cultural appreciation within the AdZU community.",
    color: "bg-[#D6E4F5]",
    textColor: "text-[#1B3F8B]",
    categoryColor: "bg-[#1B3F8B]/15 text-[#1B3F8B]",
  },
  {
    id: "adzu-red-cross-council",
    name: "AdZU Red Cross Council",
    category: "Socio-Civic and Political",
    description:
      "Promotes volunteerism, humanitarian values, disaster preparedness, and community service among Ateneo students.",
    color: "bg-[#2C3E55]",
    textColor: "text-white",
    categoryColor: "bg-white/20 text-white",
  },
];
