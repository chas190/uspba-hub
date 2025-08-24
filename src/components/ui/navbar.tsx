import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black text-primary">USPBA</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#teams" className="text-foreground hover:text-primary transition-colors font-medium">
                Teams
              </a>
              <a href="#podcast" className="text-foreground hover:text-primary transition-colors font-medium">
                Podcast
              </a>
              <a href="#sponsors" className="text-foreground hover:text-primary transition-colors font-medium">
                Sponsors
              </a>
              <a href="#revenue" className="text-foreground hover:text-primary transition-colors font-medium">
                Revenue Share
              </a>
              <Button variant="default" size="sm" className="ml-4">
                Join Newsletter
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/80 backdrop-blur-sm rounded-lg mt-2">
              <a href="#teams" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Teams
              </a>
              <a href="#podcast" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Podcast
              </a>
              <a href="#sponsors" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Sponsors
              </a>
              <a href="#revenue" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Revenue Share
              </a>
              <div className="px-3 py-2">
                <Button variant="default" size="sm" className="w-full">
                  Join Newsletter
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;