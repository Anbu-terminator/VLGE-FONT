import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CountryCard } from "@/components/CountryCard";
import { Play, X } from "lucide-react";

// Helper to get ISO2 code from slug
const countrySlugToISO2: Record<string, string> = {
  italy: "it",
  germany: "de",
  france: "fr",
  spain: "es",
  netherlands: "nl",
  austria: "at",
  belgium: "be",
  denmark: "dk",
  finland: "fi",
  sweden: "se",
  norway: "no",
  switzerland: "ch",
  poland: "pl",
  "czech-republic": "cz",
  hungary: "hu",
  portugal: "pt",
  greece: "gr",
  ireland: "ie",
  croatia: "hr",
  slovenia: "si",
  slovakia: "sk",
  estonia: "ee",
  latvia: "lv",
  lithuania: "lt",
  luxembourg: "lu",
  malta: "mt",
  cyprus: "cy",
  bulgaria: "bg",
  romania: "ro",
  iceland: "is",
  liechtenstein: "li",
  monaco: "mc",
  "san-marino": "sm",
  "vatican-city": "va"
};

export default function Consultancy() {
  const [showVideo, setShowVideo] = useState(true);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const flagRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.to(heroImageRef.current, {
      y: 15,
      rotation: -1,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    flagRefs.current.forEach((ref) => {
      gsap.to(ref, {
        y: -5,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        paused: true
      });
    });
  }, []);

  const europeanCountries = [
    { name: "Italy", slug: "italy" },
    { name: "Germany", slug: "germany" },
    { name: "France", slug: "france" },
    { name: "Spain", slug: "spain" },
    { name: "Netherlands", slug: "netherlands" },
    { name: "Austria", slug: "austria" },
    { name: "Belgium", slug: "belgium" },
    { name: "Denmark", slug: "denmark" },
    { name: "Finland", slug: "finland" },
    { name: "Sweden", slug: "sweden" },
    { name: "Norway", slug: "norway" },
    { name: "Switzerland", slug: "switzerland" },
    { name: "Poland", slug: "poland" },
    { name: "Czech Republic", slug: "czech-republic" },
    { name: "Hungary", slug: "hungary" },
    { name: "Portugal", slug: "portugal" },
    { name: "Greece", slug: "greece" },
    { name: "Ireland", slug: "ireland" },
    { name: "Croatia", slug: "croatia" },
    { name: "Slovenia", slug: "slovenia" },
    { name: "Slovakia", slug: "slovakia" },
    { name: "Estonia", slug: "estonia" },
    { name: "Latvia", slug: "latvia" },
    { name: "Lithuania", slug: "lithuania" },
    { name: "Luxembourg", slug: "luxembourg" },
    { name: "Malta", slug: "malta" },
    { name: "Cyprus", slug: "cyprus" },
    { name: "Bulgaria", slug: "bulgaria" },
    { name: "Romania", slug: "romania" },
    { name: "Iceland", slug: "iceland" },
    { name: "Liechtenstein", slug: "liechtenstein" },
    { name: "Monaco", slug: "monaco" },
    { name: "San Marino", slug: "san-marino" },
    { name: "Vatican City", slug: "vatican-city" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Connect",
      description: "We connect with each student..."
    },
    {
      step: 2,
      title: "Profile Verification",
      description: "We carefully verify the student's..."
    },
    {
      step: 3,
      title: "Course Suggestion",
      description: "Based on Eligibility & Interest"
    },
    {
      step: 4,
      title: "University Selection",
      description: "Once the course is finalized..."
    },
    {
      step: 5,
      title: "Application Process",
      description: "We start the full application process..."
    },
    {
      step: 6,
      title: "Visa & Travel Guidance",
      description: "After receiving admission offers..."
    }
  ];

  return (
    <div>
      {/* ... Hero and Process Steps Sections Stay Same ... */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold vlge-primary mb-4">STUDY ABROAD WITH VLGE</h1>
              <p className="text-xl vlge-secondary">Your Pathway to World-Class Education in Italy</p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="slideInLeft">
              <div>
                <img 
                  ref={heroImageRef}
                  src="https://i.postimg.cc/BQV26htr/8848686.jpg"
                  alt="International students studying together"
                  className="rounded-xl shadow-lg w-full h-auto hover:shadow-xl transition-shadow"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We help students pursue higher education in top public universities across Italy with 
                  100% guidance and documentation support.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our focus is on fully funded or low-cost admissions through government/university scholarships.
                </p>
                <Button
                  onClick={() => setShowVideo(true)}
                  className="bg-vlge-primary hover:bg-red-600 text-white px-8 py-3 text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Our Process
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center vlge-secondary mb-12">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-vlge-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold vlge-secondary mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold vlge-secondary mb-4">Choose Your Destination</h2>
              <p className="text-xl text-gray-600">Study in 34 European countries with our guidance</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {europeanCountries.map((country, index) => {
                const isoCode = countrySlugToISO2[country.slug];
                const flagUrl = `https://flagcdn.com/w80/${isoCode}.png`;

                return (
                  <AnimatedSection key={country.slug} delay={index * 0.05}>
                    <div
                      ref={(el) => (flagRefs.current[index] = el)}
                      className="relative group"
                      onMouseEnter={() =>
                        gsap.to(flagRefs.current[index], { scale: 1.1, y: -5, duration: 0.3 })
                      }
                      onMouseLeave={() =>
                        gsap.to(flagRefs.current[index], { scale: 1, y: 0, duration: 0.3 })
                      }
                    >
                      <CountryCard
                        {...country}
                        flag={
                          <img
                            src={flagUrl}
                            alt={country.name}
                            className="w-12 h-8 object-cover rounded-sm shadow-md group-hover:shadow-lg transition-shadow"
                          />
                        }
                      />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fullscreen Video Splash */}
      {showVideo && (
        <div className="fixed inset-0 w-screen h-screen z-50 bg-black">
          <Button
            onClick={() => setShowVideo(false)}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          >
            <X className="w-8 h-8" />
          </Button>
          <video
            autoPlay
            muted
            className="w-full h-full object-cover"
            onEnded={() => setShowVideo(false)}
          >
            <source
              src="https://github.com/CTTECH108/VLGE-VIDEO/blob/main/VLGE%20C.mp4?raw=true"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

