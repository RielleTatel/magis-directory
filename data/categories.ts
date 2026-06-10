import { Users, BookOpen, Palette, Globe, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Category = {
  icon: LucideIcon;
  name: string;
  description: string;
  count: number;
};

export const categories: Category[] = [
  {
    icon: Users,
    name: "Student Government",
    description: "Represents student voice and advocates for rights and welfare",
    count: 3,
  },
  {
    icon: BookOpen,
    name: "Academic Organizations",
    description: "Discipline-based societies fostering scholarly excellence",
    count: 12,
  },
  {
    icon: Palette,
    name: "Culture, Arts & Multimedia",
    description: "Creative communities celebrating Atenean culture through art",
    count: 8,
  },
  {
    icon: Globe,
    name: "Socio-Civic & Political Organizations",
    description: "Service-oriented groups driving advocacy and community action",
    count: 6,
  },
  {
    icon: Leaf,
    name: "Environmental Organizations",
    description: "Planet-forward groups championing sustainable campus action",
    count: 4,
  },
];
