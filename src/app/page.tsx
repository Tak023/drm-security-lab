import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  BookOpen,
  FlaskConical,
  Trophy,
  ArrowRight,
  Lock,
  Key,
  Network,
  Sword,
  Eye,
} from "lucide-react";

const features = [
  {
    title: "Knowledge Base",
    description:
      "Comprehensive documentation on DRM systems including Widevine, FairPlay, and PlayReady. Learn the fundamentals of content protection.",
    icon: BookOpen,
    href: "/knowledge-base",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    glow: "glow-blue",
  },
  {
    title: "Interactive Labs",
    description:
      "Hands-on labs that let you experiment with license servers, key exchange protocols, and encryption mechanisms in a safe environment.",
    icon: FlaskConical,
    href: "/labs",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    glow: "glow-green",
  },
  {
    title: "CTF Challenges",
    description:
      "Test your skills with capture-the-flag style challenges. Earn points and track your progress as you master DRM security concepts.",
    icon: Trophy,
    href: "/challenges",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    glow: "glow-yellow",
  },
];

const perspectives = [
  {
    title: "Red Team",
    description: "Learn attack vectors and vulnerabilities from an offensive security perspective.",
    icon: Sword,
    color: "text-red-400",
    bgColor: "bg-red-500/20",
    glow: "glow-red",
    href: "/labs?perspective=attack",
  },
  {
    title: "Neutral Observer",
    description: "Understand DRM systems objectively without bias toward attack or defense.",
    icon: Eye,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    glow: "glow-purple",
    href: "/knowledge-base",
  },
  {
    title: "Blue Team",
    description: "Focus on defensive strategies and protection mechanisms.",
    icon: Shield,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    glow: "glow-blue",
    href: "/labs?perspective=defense",
  },
];

const topics = [
  { name: "Widevine", icon: Shield },
  { name: "FairPlay", icon: Shield },
  { name: "PlayReady", icon: Shield },
  { name: "Encryption", icon: Lock },
  { name: "Key Exchange", icon: Key },
  { name: "License Servers", icon: Network },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 py-20 sm:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-1/2 right-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 animate-slide-up">
              Educational Platform
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="gradient-text">DRM Security Lab</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
              An interactive educational platform for learning about Digital Rights
              Management security. Explore concepts from both offensive and defensive
              perspectives through hands-on labs and challenges.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/knowledge-base/overview">
                <Button size="lg" className="gap-2 group">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/labs">
                <Button variant="outline" size="lg">
                  Explore Labs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Learn DRM Security
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to understand digital rights management systems
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Link key={feature.title} href={feature.href}>
                <Card className={`card-3d ${feature.glow} h-full border-border/30 animate-slide-up group relative overflow-hidden`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none`} />
                  <CardHeader className="relative">
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Perspectives Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Choose Your Perspective
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Learn from different security viewpoints to gain comprehensive understanding
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {perspectives.map((perspective, index) => (
              <Link key={perspective.title} href={perspective.href}>
                <Card className={`card-3d ${perspective.glow} text-center border-border/30 animate-slide-up group relative overflow-hidden h-full`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${perspective.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none`} />
                  <CardHeader className="relative">
                    <div
                      className={`mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full ${perspective.bgColor} transition-all duration-300 group-hover:scale-110`}
                    >
                      <perspective.icon className={`h-8 w-8 ${perspective.color}`} />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{perspective.title}</CardTitle>
                    <CardDescription>{perspective.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Topics Covered
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore the core concepts of DRM security
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {topics.map((topic, index) => (
              <Badge
                key={topic.name}
                variant="outline"
                className="gap-2 px-4 py-2 text-base transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 animate-fade-in cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <topic.icon className="h-4 w-4" />
                {topic.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Ready to Start Learning?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              New here? Start with the DRM Overview to understand the basics.
            </p>
            <div className="mt-8">
              <Link href="/knowledge-base/overview">
                <Button size="lg" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  Start with DRM Overview
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
