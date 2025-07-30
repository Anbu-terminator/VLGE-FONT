import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-10 text-gray-300 mt-auto text-center" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-10">

        {/* Logo and Company Info */}
        <div className="flex flex-col items-center space-y-3">
          <img
            src="https://i.postimg.cc/m1Y2VRD4/VL.webp"
            alt="VLGE Logo"
            className="w-20 h-20"
            data-testid="footer-logo"
          />
          <h3 className="font-bold text-lg md:text-xl text-white">
            VLGE INSTITUTE PRIVATE LIMITED
          </h3>
          <p className="text-sm text-gray-400 max-w-xl">
            An ISO 9001:2015 Certified Institute, Registered Company Under Govt of India,
            DPIIT Recognised Startup (Govt of India), Recognised by Startup TN and Approved by AICTE
          </p>
          <p className="text-sm text-gray-400 max-w-xl">
            No 2/216 2D, Sai Baba Nagar, K G Kandigai, Tiruttani TK, Tiruvallur District,
            Tamil Nadu - 631209
          </p>
          <p className="font-medium text-white">VLGE INSTITUTE PVT LIMITED</p>
          <p>info@valuelearn.in</p>
          <p>+91 77081 15754</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="flex flex-wrap justify-center gap-4">
            <li><Link href="/" className="hover:text-white" data-testid="footer-link-home">Home</Link></li>
            <li><Link href="/student-verification" className="hover:text-white" data-testid="footer-link-verification">Student Verification</Link></li>
            <li><Link href="/consultancy" className="hover:text-white" data-testid="footer-link-consultancy">Consultancy</Link></li>
            <li><Link href="/services" className="hover:text-white" data-testid="footer-link-services">Services</Link></li>
            <li><Link href="/courses" className="hover:text-white" data-testid="footer-link-courses">Courses</Link></li>
            <li><Link href="/contact" className="hover:text-white" data-testid="footer-link-contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex flex-col items-center space-y-2 text-sm">
            <a
              href="mailto:info@valuelearn.in"
              className="hover:text-white"
              data-testid="footer-email"
            >
              info@valuelearn.in
            </a>
            <a
              href="tel:+917708115754"
              className="hover:text-white flex items-center gap-2"
              data-testid="footer-phone"
            >
              <Phone className="w-4 h-4" />
              +91 77081 15754
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://wa.me/9345424497"
              className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600"
              data-testid="footer-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/value.learn.academy/"
              className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600"
              data-testid="footer-instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/value-learn-academy/"
              className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/valuelearnacademy"
              className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600"
              data-testid="footer-facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-sm text-gray-400 pt-6 border-t border-gray-700 w-full">
          <p>© 2024 by VLGE INSTITUTE PRIVATE LIMITED | Privacy Policy | Terms & Conditions</p>
          <p className="text-xs mt-2">"Together Stand For Growth" | "Learning is a lifelong journey."</p>
          <div className="flex justify-center items-center gap-2 mt-2">
            <p className="text-xs">Powered and designed by CT TECH SOLUTIONS</p>
            <img
              src="https://i.postimg.cc/Lh7Z9g9K/CT-TECH-SOLUTIONS-LOGO.jpg"
              alt="CT Tech Solutions"
              className="h-4"
              data-testid="footer-ct-tech-logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
