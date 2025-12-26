'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { PerspectiveToggle } from './PerspectiveToggle';
import { useProgressStore } from '@/stores/progressStore';
import {
  Shield,
  BookOpen,
  FlaskConical,
  Trophy,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  icon: typeof Shield;
}

const navItems: NavItem[] = [
  { label: 'Knowledge Base', href: '/knowledge-base', icon: BookOpen },
  { label: 'Labs', href: '/labs', icon: FlaskConical },
  { label: 'Challenges', href: '/challenges', icon: Trophy },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalPoints, challengesCompleted } = useProgressStore();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-foreground">DRM Security</span>
            <span className="ml-1 text-muted-foreground">Lab</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? 'secondary' : 'ghost'}
                  size="sm"
                  className="gap-2"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Progress indicator */}
          <div className="hidden items-center gap-3 text-sm sm:flex">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Trophy className="h-4 w-4 text-warning" />
              <span className="font-medium text-foreground">{totalPoints}</span>
              <span>pts</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="text-muted-foreground">
              <span className="font-medium text-foreground">
                {challengesCompleted.length}
              </span>{' '}
              solved
            </div>
          </div>

          {/* Perspective Toggle */}
          <PerspectiveToggle showLabel={false} size="sm" className="hidden lg:flex" />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    className="w-full justify-start gap-2"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
            <div className="my-2 border-t border-border" />
            <div className="px-2">
              <p className="mb-2 text-xs font-medium text-muted-foreground">
                Perspective
              </p>
              <PerspectiveToggle showLabel size="sm" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
