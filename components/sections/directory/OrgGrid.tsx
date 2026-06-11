"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, X, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { organizations } from "@/data/organizations";
import { categories } from "@/data/categories";

const CATEGORY_BADGE: Record<string, string> = {
  "Student Government": "bg-[#1B3F8B] text-white",
  "Academic": "bg-[#D6E4F5] text-[#1B3F8B]",
  "Business": "bg-[#4A7FC1] text-white",
  "Sports and Recreation": "bg-[#2C3E55] text-white",
  "Public and Communications": "bg-[#D6E4F5] text-[#1B3F8B]",
  "Socio-Civic and Political": "bg-[#1B3F8B] text-white",
  "Faith and Formation": "bg-[#4A7FC1] text-white",
  "Environmental": "bg-[#D6E4F5] text-[#1B3F8B]",
};

const ALL = "All";

export default function OrgGrid() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL);

  const filtered = useMemo(() => {
    return organizations.filter((org) => {
      const matchesCategory = activeCategory === ALL || org.category === activeCategory;
      const matchesQuery =
        !query || org.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <section className="bg-[#F0F4FB] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Controls */}
        <div className="mb-10 flex flex-col gap-4">
          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4A7FC1] pointer-events-none"
              strokeWidth={2}
            />
            <input
              type="text"
              placeholder="Search organizations..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-12 bg-white rounded-lg text-[#2C3E55] placeholder:text-[#2C3E55]/40 font-medium text-base border-2 border-transparent focus:border-[#1B3F8B] focus:bg-white outline-none transition-all duration-200"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center text-[#2C3E55]/40 hover:text-[#2C3E55] transition-colors"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </button>
            )}
          </div>

          {/* Category filter + result count */}
          <div className="flex items-center gap-4">
            <Select value={activeCategory} onValueChange={(v) => setActiveCategory(v ?? ALL)}>
              <SelectTrigger className="w-52 h-10 bg-white rounded-lg border-2 border-transparent focus-visible:border-[#1B3F8B] focus-visible:ring-0 text-[#2C3E55] font-medium text-sm px-4">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-lg shadow-none ring-1 ring-[#D6E4F5]">
                <SelectItem value={ALL} className="font-medium text-[#2C3E55] focus:bg-[#D6E4F5] focus:text-[#1B3F8B]">
                  All Categories
                </SelectItem>
                {categories.map((cat) => (
                  <SelectItem
                    key={cat.name}
                    value={cat.name}
                    className="font-medium text-[#2C3E55] focus:bg-[#D6E4F5] focus:text-[#1B3F8B]"
                  >
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <p className="text-[#2C3E55]/50 text-sm font-medium">
              Showing{" "}
              <span className="text-[#1B3F8B] font-bold">{filtered.length}</span>{" "}
              of {organizations.length} organizations
            </p>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((org) => (
              <a
                key={org.id}
                href={`/directory/${org.id}`}
                className="group flex"
              >
                <Card className="flex flex-col w-full ring-0 rounded-lg bg-white transition-all duration-200 group-hover:scale-[1.02]">
                  {org.logo && (
                    <div className="relative w-full h-40 bg-gray-100 rounded-t-lg overflow-hidden">
                      <Image
                        src={org.logo}
                        alt={org.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-2 gap-2">
                    <span
                      className={`self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-md ${
                        CATEGORY_BADGE[org.category] ?? "bg-[#D6E4F5] text-[#1B3F8B]"
                      }`}
                    >
                      {org.category}
                    </span>
                    <CardTitle
                      className="text-[#2C3E55] font-bold text-lg leading-tight"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {org.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 pb-3">
                    <CardDescription className="text-[#2C3E55]/60 text-sm leading-relaxed line-clamp-3">
                      {org.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="border-0 bg-transparent pt-0 pb-4">
                    <div className="flex items-center gap-1 text-[#1B3F8B] font-semibold text-sm">
                      <span>View profile</span>
                      <ChevronRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        strokeWidth={2.5}
                      />
                    </div>
                  </CardFooter>
                </Card>
              </a>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="h-16 w-16 bg-[#D6E4F5] rounded-full flex items-center justify-center mb-6">
              <Search className="h-7 w-7 text-[#1B3F8B]" strokeWidth={2} />
            </div>
            <h3
              className="text-[#2C3E55] font-bold text-xl mb-2"
              style={{ letterSpacing: "-0.01em" }}
            >
              No organizations found
            </h3>
            <p className="text-[#2C3E55]/60 text-sm max-w-xs">
              Try a different search term or clear the category filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
