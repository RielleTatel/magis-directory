import { Users, BookOpen, Briefcase, Trophy, Megaphone, Globe, Leaf, Heart } from "lucide-react";
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
    count: 1,
  },
  {
    icon: BookOpen,
    name: "Academic",
    description: "Discipline-based societies fostering scholarly excellence",
    count: 17,
  },
  {
    icon: Briefcase,
    name: "Business",
    description: "Organizations for future professionals in business and finance",
    count: 6,
  },
  {
    icon: Trophy,
    name: "Sports and Recreation",
    description: "Performance, arts, and athletic communities for campus life",
    count: 5,
  },
  {
    icon: Megaphone,
    name: "Public and Communications",
    description: "Media, heritage, and scholar communities driving campus discourse",
    count: 6,
  },
  {
    icon: Globe,
    name: "Socio-Civic and Political",
    description: "Service-oriented groups driving advocacy and community action",
    count: 10,
  },
  {
    icon: Heart,
    name: "Faith and Formation",
    description: "Faith communities and Ignatian formation groups nurturing the whole person",
    count: 8,
  },
  {
    icon: Leaf,
    name: "Environmental",
    description: "Planet-forward groups championing sustainable campus action",
    count: 2,
  },
];
