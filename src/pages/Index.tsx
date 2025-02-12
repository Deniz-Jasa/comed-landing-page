import { Activity, ArrowRight, BookOpen, ChartBar, Check, User, Cpu, Shield, Zap, ListFilter, MessageSquare, Library, Clock, Target, Repeat, Mail, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // or any other theme you prefer
import 'prismjs/components/prism-typescript';

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="container mx-auto px-4 pt-16 md:pt-32">
      <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
            A Better Emergency Room Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            AI-Powered Emergency
            <br />
            Room Software
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
            Reduce wait times. Prioritize care. Assist healthcare professionals.
            Streamline emergency department triage with AI-driven insights.
          </p>
          <div className="space-x-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <a
              href="https://comed-sandbox.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Try Our Sandbox App
            </a>
          </div>
        </div>
        <div className="block mt-4 lg:mt-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
          <img
            src="/hero.svg"
            alt="Comed Dashboard"
            className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 glass"
          />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
  </section>
);

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px', // Trigger slightly before the section comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "1",
      icon: <User className="w-6 h-6 text-primary" />,
      title: "Patient Input",
      description: "Patients submit via text or audio their information, symptoms, and medical history on arrival.",
    },
    {
      number: "2",
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Triage Assistant",
      description: "Automated triaging based on the Canadian Triage and Acuity Scale (CTAS).",
    },
    {
      number: "3",
      icon: <Check className="w-6 h-6 text-primary" />,
      title: "Nurse Review",
      description: "Nurses adjust priority levels if needed and move patients into the queue.",
    },
    {
      number: "4",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Physician Insights",
      description: "AI suggests preliminary diagnosis, treatment plan, and relevant medical research.",
    },
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="section py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Comed improves the emergency room process through automated triaging, AI-powered insights for staff, and a clean interface for a better patient experience.
          </p>
        </div>
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{
                animationDelay: `${index * 1000}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/5 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <span className="text-primary text-lg mb-2">Step {step.number}</span>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
                  style={{
                    animationDelay: `${index * 1000 + 500}ms`,
                    animationFillMode: 'forwards'
                  }}
                >

                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologySection = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const codeExample = `// AI Triage Classification
const triageAssessment = await ai.classify({
  symptoms: patientSymptoms,
  vitals: vitalSigns,
  model: "triage-classifier-v1",
  classes: [
    "CTAS 1 - Resuscitation",
    "CTAS 2 - Emergent",
    "CTAS 3 - Urgent",
    "CTAS 4 - Less Urgent",
    "CTAS 5 - Non Urgent"
  ]
});

// Physician AI Assistant
const medicalInsights = await ai.chat({
  model: "physician-assistant-v1",
  message: "Given these symptoms and vitals...",
  context: patientData,
  training: "medical-guidelines-2024"
});

// Medical Literature Ranking
const relevantSources = await ai.rank({
  query: patientCondition,
  corpus: "medical-literature-db",
  model: "medical-rank-v1",
  top_k: 5
});`;

  return (
    <section id="technology" className="py-8 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto px-1">
            Three specialized AI models to improve the biggest pain-points in emergency care
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start max-w-6xl mx-auto">
          {/* Image - Hidden on mobile */}
          <div className="relative group order-1 lg:order-2 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50"></div>
            <div className="relative w-[170%]" style={{ position: 'absolute', right: 0, top: 0 }}>
              <img
                src="/triage.svg"
                alt="Triage Process"
                className="rounded-tl-2xl rounded-bl-2xl shadow-xl w-full transform scale-110"
                style={{ position: 'relative', right: '-50%' }}
              />
            </div>
          </div>

          {/* Features side */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm">
              <div className="flex items-start">
                <div className="bg-primary/5 p-2 md:p-3 rounded-xl mr-4 shrink-0">
                  <ListFilter className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Triage Classification Model</h3>
                  <p className="text-base md:text-base text-gray-600">
                    Custom-trained AI model that classifies patient cases into CTAS levels,
                    using symptoms and vital signs to recommend appropriate triage priorities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm">
              <div className="flex items-start">
                <div className="bg-primary/5 p-2 md:p-3 rounded-xl mr-4 shrink-0">
                  <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Physician AI Assistant</h3>
                  <p className="text-base md:text-base text-gray-600">
                    Specialized chat model trained on medical knowledge, allowing physicians
                    to discuss cases, get second opinions, and explore treatment options.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm">
              <div className="flex items-start">
                <div className="bg-primary/5 p-2 md:p-3 rounded-xl mr-4 shrink-0">
                  <Library className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Medical Literature Ranking</h3>
                  <p className="text-base md:text-base text-gray-600">
                    AI-powered system that ranks and retrieves relevant medical literature
                    and sources based on the patient's condition and symptoms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TriageLevelsSection = () => {
  const levels = [
    { level: 1, title: "Immediate", description: "Life-threatening" },
    { level: 2, title: "Emergency", description: "Critical but stable" },
    { level: 3, title: "Urgent", description: "Needs care soon" },
    { level: 4, title: "Semi-Urgent", description: "Can wait" },
    { level: 5, title: "Non-Urgent", description: "Treatment as time permits" },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Triage Levels (CTAS)</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding the Canadian Triage and Acuity Scale
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {levels.map((level) => (
            <div
              key={level.level}
              className="glass rounded-xl p-6 transform hover:scale-105 transition-transform duration-200"
            >
              <div className="text-2xl font-bold text-primary mb-2">Level {level.level}</div>
              <h3 className="text-lg font-semibold mb-2">{level.title}</h3>
              <p className="text-gray-600">{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CountUpNumber = ({ end, suffix = "", pulse = false }: { end: number | string, suffix?: string, pulse?: boolean }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible || pulse) return;
      
      const endNum = typeof end === 'number' ? end : parseInt(end);
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = endNum / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= endNum) {
          setCount(endNum);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }, [end, isVisible, pulse]);

    if (pulse) {
      return (
        <div className="text-4xl font-bold text-primary animate-pulse">
          {end}{suffix}
        </div>
      );
    }

    return (
      <div className="text-4xl font-bold text-primary">
        {count}{suffix}
      </div>
    );
  };

  const LiveDot = () => (
    <div className="relative">
      <div className="bg-primary/10 m-[6px] rounded-xl">
        <div className="relative">
          <div className="h-3 w-3 rounded-full bg-primary animate-ping absolute"></div>
          <div className="h-3 w-3 rounded-full bg-primary relative"></div>
        </div>
      </div>
    </div>
  );

  const benefits = [
    {
      metric: 40,
      suffix: "%",
      title: "Shorter Wait Times",
      description: "Reduce initial assessment time with AI-powered triaging and queuing",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      metric: 99,
      suffix: "%",
      title: "Triage Accuracy",
      description: "AI recommendations align with expert nurse assessments in validation studies",
      icon: <Target className="w-6 h-6 text-primary" />,
    },
    {
      metric: 24,
      suffix: "/7",
      title: "Consistent Care",
      description: "Standardized triage process across all shifts and staff members",
      icon: <LiveDot />,
      live: true,
    },
    {
      metric: 10,
      suffix: "M+",
      title: "Medical Sources",
      description: "Access to relevant medical literature and research for informed decisions",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
    }
  ];

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Comed</h2>
          <p className="text-gray-600 text-xl max-w-4xl mx-auto px-6">
            Empowering emergency departments with AI to improve efficiency,
            accuracy, and patient care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm h-full border border-gray-100">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    {benefit.icon}
                  </div>
                  <CountUpNumber end={benefit.metric} suffix={benefit.suffix} />
                  <h3 className="text-xl font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Success Metrics */}

      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Interested in improving your emergency department's efficiency?
                  Let's discuss how Comed can help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/5 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a href="mailto:contact@comed.health" className="text-primary hover:underline">
                      contact@comed.health
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/5 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">Ottawa, Canada</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/5 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Availability</h3>
                    <p className="text-gray-600">Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Dr. Jane Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="jane.smith@hospital.com"
                  />
                </div>

                <div>
                  <label htmlFor="hospital" className="block text-sm font-medium text-gray-700 mb-2">
                    Hospital / Institution
                  </label>
                  <input
                    type="text"
                    id="hospital"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="General Hospital"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Tell us about your emergency department's needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 mt-0 mb-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-300 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-600 order-2 md:order-1 text-center md:text-left">
              Comed © 2025
            </p>
            <nav className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:gap-x-24 items-center order-1 md:order-2">
              <a
                href="/about"
                className="text-gray-600 hover:text-primary transition px-4 py-2 md:p-0"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-primary transition px-4 py-2 md:p-0"
              >
                Contact
              </a>
              <a
                href="/terms"
                className="text-gray-600 hover:text-primary transition px-4 py-2 md:p-0"
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "For small hospitals",
      price: "20",
      period: "per user / month",
      features: [
        "Up to 100 patients per month",
        "Basic AI triage assistance",
        "Standard support",
        "Core features included"
      ]
    },
    {
      name: "Professional",
      description: "Everything you need",
      price: "50",
      period: "per user / month",
      features: [
        "Unlimited patients",
        "Advanced AI insights",
        "Priority support",
        "All features included"
      ]
    },
    {
      name: "Enterprise",
      description: "For large hospitals",
      price: "Custom",
      period: "50+ users",
      features: [
        "Volume discounts",
        "Dedicated support team",
        "Custom integrations",
        "SLA guarantees"
      ]
    }
  ];

  return (
    <section id="pricing" className="section py-24 mb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-10">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg p-12 shadow-lg">
              <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
              <p className="text-gray-500 mb-8">{plan.description}</p>
              <div className="mb-8">
                {plan.price !== "Custom" ? (
                  <div className="flex items-start">
                    <span className="text-2xl font-bold text-primary">$</span>
                    <span className="text-5xl font-bold text-primary">
                      {plan.price}
                    </span>
                  </div>
                ) : (
                  <div className="text-5xl font-bold text-primary">
                    {plan.price}
                  </div>
                )}
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className=" ">
        <HeroSection />
        <HowItWorksSection />
        <TechnologySection />
        <BenefitsSection />
        <PricingSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
