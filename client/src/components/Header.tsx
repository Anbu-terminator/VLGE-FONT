import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/student-verification", label: "Student Verification" },
    { href: "/courses", label: "Courses" },
    { href: "/consultancy", label: "Consultancy" },
    { href: "/services", label: "Services" },
    { href: "/directors", label: "Directors message" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
      } overflow-x-auto`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo + Company Name */}
          <motion.div
            className="flex items-center min-w-0"
            data-testid="logo-container"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex-shrink-0" data-testid="logo-link">
              <img
                src="https://i.postimg.cc/fygFn9nd/VLGE.png"
                alt="VLGE Logo"
                className="w-14 h-14 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                data-testid="header-logo"
              />
            </Link>
            <motion.h2
              className="ml-3 text-lg md:text-2xl font-bold leading-tight text-red-500 truncate max-w-[160px] md:max-w-none"
              data-testid="company-name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              VLGE INSTITUTE PVT LTD
            </motion.h2>
          </motion.div>

          {/* Navigation (Desktop) */}
          <motion.div
            className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-2 max-w-full overflow-hidden"
            data-testid="desktop-nav"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={link.href}
                  className="relative text-vlge-secondary hover:text-vlge-primary font-semibold transition-colors group whitespace-nowrap text-sm md:text-base"
                  data-testid={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                  <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-red-500"></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild onClick={() => setIsMenuOpen(true)}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-vlge-secondary hover:text-vlge-primary"
                  data-testid="mobile-menu-button"
                >
                  <Menu className="h-6 w-6 transition-transform duration-200 hover:scale-110" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-white/95 backdrop-blur-lg transition-all duration-300"
                data-testid="mobile-menu"
                onInteractOutside={() => setIsMenuOpen(false)}
              >
                <motion.nav
                  className="flex flex-col space-y-4 mt-8"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ x: 10 }}
                    >
                      <Link
                        href={link.href}
                        className="text-vlge-secondary hover:text-vlge-primary transition-all duration-200 font-semibold text-lg px-4 py-2"
                        onClick={() => setIsMenuOpen(false)}
                        data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
