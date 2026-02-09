import { useState } from 'react';
import { Menu, Home, Briefcase, MessageSquareQuote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '/resume/', label: 'Home', icon: Home },
    { href: '/resume/experience', label: 'Experience', icon: Briefcase },
    { href: '/resume/#testimonials-section', label: 'Testimonials', icon: MessageSquareQuote },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              <link.icon className="size-5" />
              <span className="text-base font-medium">{link.label}</span>
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
