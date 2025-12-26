"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  BookOpen,
  Lock,
  Network,
  Key,
  ArrowRight,
  Search,
  Layers,
  Code2,
  AlertTriangle,
  Wrench,
  Filter,
  Clock,
  TrendingUp,
  Zap,
  ChevronRight,
} from "lucide-react";

const articles = [
  // Fundamentals
  {
    id: "overview",
    title: "DRM Overview",
    description:
      "Introduction to Digital Rights Management, its purpose, and how it protects digital content.",
    icon: BookOpen,
    category: "Fundamentals",
    readTime: "10 min",
    difficulty: "Beginner",
    tags: ["basics", "introduction", "concepts"],
  },
  {
    id: "history",
    title: "History of DRM",
    description:
      "From CSS on DVDs to modern streaming DRM - the evolution of content protection technology.",
    icon: BookOpen,
    category: "Fundamentals",
    readTime: "12 min",
    difficulty: "Beginner",
    tags: ["history", "evolution", "CSS", "AACS"],
  },
  {
    id: "threat-model",
    title: "DRM Threat Model",
    description:
      "Understanding what DRM protects against, attack vectors, and realistic security expectations.",
    icon: Shield,
    category: "Fundamentals",
    readTime: "15 min",
    difficulty: "Intermediate",
    tags: ["security", "threats", "defense"],
  },
  // DRM Systems
  {
    id: "widevine",
    title: "Widevine Deep Dive",
    description:
      "Google's DRM solution used by Netflix, Disney+, and other major streaming platforms.",
    icon: Shield,
    category: "DRM Systems",
    readTime: "15 min",
    difficulty: "Intermediate",
    tags: ["widevine", "google", "L1", "L3", "CDM"],
  },
  {
    id: "fairplay",
    title: "FairPlay Streaming",
    description:
      "Apple's proprietary DRM system for content protection on Apple devices and services.",
    icon: Shield,
    category: "DRM Systems",
    readTime: "12 min",
    difficulty: "Intermediate",
    tags: ["fairplay", "apple", "iOS", "macOS"],
  },
  {
    id: "playready",
    title: "PlayReady",
    description:
      "Microsoft's DRM technology used for Windows devices and Xbox platforms.",
    icon: Shield,
    category: "DRM Systems",
    readTime: "12 min",
    difficulty: "Intermediate",
    tags: ["playready", "microsoft", "windows", "xbox"],
  },
  {
    id: "multi-drm",
    title: "Multi-DRM Architecture",
    description:
      "How to implement content protection across all major platforms using CENC and multiple DRM systems.",
    icon: Layers,
    category: "DRM Systems",
    readTime: "18 min",
    difficulty: "Advanced",
    tags: ["multi-drm", "CENC", "architecture", "cross-platform"],
  },
  // Technical
  {
    id: "encryption",
    title: "Encryption in DRM",
    description:
      "Understanding AES-CTR, AES-CBC, key derivation, and encryption schemes used in DRM systems.",
    icon: Lock,
    category: "Technical",
    readTime: "20 min",
    difficulty: "Advanced",
    tags: ["AES", "CTR", "CBC", "encryption", "cryptography"],
  },
  {
    id: "protocols",
    title: "License Protocols",
    description:
      "How license acquisition works, including EME, MSE, and PSSH boxes.",
    icon: Network,
    category: "Technical",
    readTime: "18 min",
    difficulty: "Advanced",
    tags: ["EME", "MSE", "PSSH", "protocols", "license"],
  },
  {
    id: "cenc",
    title: "CENC Standard",
    description:
      "Common Encryption - the standard that enables single-encryption multi-DRM workflows.",
    icon: Code2,
    category: "Technical",
    readTime: "15 min",
    difficulty: "Advanced",
    tags: ["CENC", "standard", "ISO", "encryption"],
  },
  {
    id: "cdm-architecture",
    title: "CDM Architecture",
    description:
      "How Content Decryption Modules work internally - key management, secure storage, and output protection.",
    icon: Key,
    category: "Technical",
    readTime: "22 min",
    difficulty: "Advanced",
    tags: ["CDM", "architecture", "decryption", "keys"],
  },
  {
    id: "tee",
    title: "Trusted Execution Environments",
    description:
      "ARM TrustZone, Intel SGX, and other TEE technologies that enable L1 security.",
    icon: Shield,
    category: "Technical",
    readTime: "18 min",
    difficulty: "Advanced",
    tags: ["TEE", "TrustZone", "SGX", "hardware", "security"],
  },
  // Security
  {
    id: "attack-vectors",
    title: "Common Attack Vectors",
    description:
      "Understanding how DRM systems are attacked - from MITM to CDM extraction.",
    icon: AlertTriangle,
    category: "Security",
    readTime: "20 min",
    difficulty: "Advanced",
    tags: ["attacks", "MITM", "extraction", "vulnerabilities"],
  },
  {
    id: "key-extraction",
    title: "Key Extraction Techniques",
    description:
      "How attackers attempt to extract keys from L3 CDMs and the countermeasures that exist.",
    icon: Key,
    category: "Security",
    readTime: "25 min",
    difficulty: "Advanced",
    tags: ["extraction", "L3", "reverse-engineering", "countermeasures"],
  },
  {
    id: "hdcp",
    title: "HDCP Explained",
    description:
      "High-bandwidth Digital Content Protection - the last line of defense in the display chain.",
    icon: Lock,
    category: "Security",
    readTime: "14 min",
    difficulty: "Intermediate",
    tags: ["HDCP", "output-protection", "display", "encryption"],
  },
  // Implementation
  {
    id: "implementation-guide",
    title: "DRM Implementation Guide",
    description:
      "Step-by-step guide to implementing DRM in your streaming application.",
    icon: Wrench,
    category: "Implementation",
    readTime: "30 min",
    difficulty: "Advanced",
    tags: ["implementation", "guide", "tutorial", "development"],
  },
  {
    id: "testing-drm",
    title: "Testing DRM Implementations",
    description:
      "How to test and validate your DRM implementation across platforms.",
    icon: Network,
    category: "Implementation",
    readTime: "16 min",
    difficulty: "Intermediate",
    tags: ["testing", "validation", "QA", "debugging"],
  },
];

const categories = [
  { name: "All", icon: BookOpen, color: "text-foreground", bgColor: "bg-foreground/10" },
  { name: "Fundamentals", icon: BookOpen, color: "text-blue-400", bgColor: "bg-blue-500/20" },
  { name: "DRM Systems", icon: Shield, color: "text-purple-400", bgColor: "bg-purple-500/20" },
  { name: "Technical", icon: Code2, color: "text-green-400", bgColor: "bg-green-500/20" },
  { name: "Security", icon: AlertTriangle, color: "text-red-400", bgColor: "bg-red-500/20" },
  { name: "Implementation", icon: Wrench, color: "text-yellow-400", bgColor: "bg-yellow-500/20" },
];

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
};

const featuredArticles = ["overview", "widevine", "encryption", "attack-vectors"];

export default function KnowledgeBasePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featured = articles.filter((a) => featuredArticles.includes(a.id));

  const getCategoryData = (categoryName: string) => {
    return categories.find((c) => c.name === categoryName) || categories[0];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 py-16 sm:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-1/2 right-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 animate-slide-up">
              <BookOpen className="mr-1 h-3 w-3" />
              Knowledge Base
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="gradient-text">Learn DRM Security</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Comprehensive documentation and guides on digital rights management,
              from fundamentals to advanced security concepts.
            </p>

            {/* Search Bar */}
            <div className="mx-auto mt-8 max-w-xl animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles, tags, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/50 backdrop-blur-sm py-4 pl-12 pr-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300 hover:border-primary/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {searchQuery === "" && selectedCategory === "All" && (
        <section className="py-12 border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Featured Articles</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {featured.map((article, index) => {
                const categoryData = getCategoryData(article.category);
                return (
                  <Link key={article.id} href={`/knowledge-base/${article.id}`}>
                    <Card
                      className={`card-3d glow-blue h-full border-border/30 animate-slide-up group`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between mb-2">
                          <div className={`p-2 rounded-lg ${categoryData.bgColor}`}>
                            <article.icon className={`h-4 w-4 ${categoryData.color}`} />
                          </div>
                          <Zap className="h-4 w-4 text-yellow-400" />
                        </div>
                        <CardTitle className="text-base group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                          <span className="text-primary">•</span>
                          {article.category}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
              <Filter className="h-4 w-4" />
              <span>Filter:</span>
            </div>
            {categories.map((category) => {
              const isSelected = selectedCategory === category.name;
              return (
                <Button
                  key={category.name}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className={`gap-2 whitespace-nowrap transition-all duration-300 ${
                    isSelected
                      ? `${category.bgColor} ${category.color} border-transparent`
                      : "hover:bg-accent"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                  {category.name !== "All" && (
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {articles.filter((a) => a.category === category.name).length}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold">
                {selectedCategory === "All" ? "All Articles" : selectedCategory}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <Search className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">No articles found</h3>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article, index) => {
                const categoryData = getCategoryData(article.category);
                const isHovered = hoveredCard === article.id;

                return (
                  <Link key={article.id} href={`/knowledge-base/${article.id}`}>
                    <Card
                      className={`card-3d ${
                        article.category === "Fundamentals" ? "glow-blue" :
                        article.category === "DRM Systems" ? "glow-purple" :
                        article.category === "Technical" ? "glow-green" :
                        article.category === "Security" ? "glow-red" :
                        "glow-yellow"
                      } h-full border-border/30 animate-slide-up group relative overflow-hidden`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                      onMouseEnter={() => setHoveredCard(article.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${categoryData.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none`} />

                      <CardHeader className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <Badge
                            variant="outline"
                            className={`${categoryData.bgColor} ${categoryData.color} border-transparent`}
                          >
                            <categoryData.icon className="mr-1 h-3 w-3" />
                            {article.category}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={difficultyColors[article.difficulty]}
                          >
                            {article.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${categoryData.bgColor} transition-transform duration-300 group-hover:scale-110`}
                          >
                            <article.icon className={`h-5 w-5 ${categoryData.color}`} />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                              {article.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {article.readTime}
                            </div>
                          </div>
                        </div>
                        <CardDescription className="mt-3">
                          {article.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative pt-0">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {article.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs bg-muted/50"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {article.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-muted/50">
                              +{article.tags.length - 3}
                            </Badge>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all duration-300">
                          Read article
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { label: "Articles", value: articles.length, icon: BookOpen, glow: "glow-blue" },
              { label: "Categories", value: categories.length - 1, icon: Layers, glow: "glow-purple" },
              { label: "Topics", value: new Set(articles.flatMap((a) => a.tags)).size, icon: Code2, glow: "glow-green" },
              { label: "Reading Time", value: `${articles.reduce((acc, a) => acc + parseInt(a.readTime), 0)}+ min`, icon: Clock, glow: "glow-yellow" },
            ].map((stat, index) => (
              <Card
                key={stat.label}
                className={`card-3d ${stat.glow} border-border/30 text-center animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
