import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#how-it-works", label: "Features" },
    { href: "#technology", label: "Solution" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav
        className={`mx-auto max-w-7xl transition-colors duration-300 border ${
          isScrolled || isOpen
            ? "bg-white/80 backdrop-blur-md border-gray-200"
            : "bg-white/50 backdrop-blur-sm border-transparent"
        } ${isOpen ? 'rounded-t-2xl' : 'rounded-2xl'}`}
      >
        <div className="flex justify-between items-center h-16 px-6">
          <a href="#home" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/ca9c05a2-65cb-473d-b4d8-988c6e185a03.png"
              alt="Comed Logo"
              className="h-8"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none mt-2"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 rounded-b-2xl">
            <div className="px-2 pt-5 pb-5 space-y-1 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 font-larhge text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
