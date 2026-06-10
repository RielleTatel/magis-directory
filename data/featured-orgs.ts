export type FeaturedOrg = {
  name: string;
  category: string;
  description: string;
  color: string;
  textColor: string;
  categoryColor: string;
};

export const featuredOrgs: FeaturedOrg[] = [
  {
    name: "Student Council of AdZU",
    category: "Student Government",
    description:
      "The primary representative body of the student population, advocating for student rights and welfare across all colleges.",
    color: "bg-[#1B3F8B]",
    textColor: "text-white",
    categoryColor: "bg-white/20 text-white",
  },
  {
    name: "Junior Ateneans in Science",
    category: "Academic Organizations",
    description:
      "Fosters scientific excellence and curiosity through research, talks, and collaborative projects among AdZU's science students.",
    color: "bg-[#D6E4F5]",
    textColor: "text-[#2C3E55]",
    categoryColor: "bg-[#1B3F8B]/10 text-[#1B3F8B]",
  },
  {
    name: "AdZU Fine Arts Society",
    category: "Culture, Arts & Multimedia",
    description:
      "A home for visual artists, musicians, and creatives celebrating Atenean culture through art in all its forms.",
    color: "bg-[#4A7FC1]",
    textColor: "text-white",
    categoryColor: "bg-white/20 text-white",
  },
  {
    name: "Green Ateneans Movement",
    category: "Environmental Organizations",
    description:
      "Dedicated to environmental stewardship and sustainable action within the AdZU community and beyond.",
    color: "bg-[#F0F4FB]",
    textColor: "text-[#2C3E55]",
    categoryColor: "bg-[#1B3F8B]/10 text-[#1B3F8B]",
  },
];
