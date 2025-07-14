'use client';
import React, { useState, useEffect } from "react";
import { ShieldCheck, Bluetooth, Lock, Play, CheckCircle, ArrowRight, Zap, Globe, Smartphone, User, Award, Brain, X } from "lucide-react";

export default function SecurePairLanding() {
  const [isVisible, setIsVisible] = useState({});
  const [activeFeature, setActiveFeature] = useState(0);
  const [showDemoPopup, setShowDemoPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleIntersection = (id) => {
    setIsVisible(prev => ({ ...prev, [id]: true }));
  };

  const handleWatchDemo = () => {
    setShowDemoPopup(true);
  };

  const handleRequestIntegration = () => {
    const message = "Hi Jatin! I'm interested in integrating Smart SecurePair™ into our wireless audio products. Could you please provide more details about licensing and implementation? Looking forward to discussing this innovative anti-theft solution.";
    const whatsappUrl = `https://wa.me/919004504998?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-60 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">Smart SecurePair™</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-blue-300 transition-colors">Features</a>
          <a href="#specs" className="hover:text-blue-300 transition-colors">Specs</a>
          <a href="#roadmap" className="hover:text-blue-300 transition-colors">Roadmap</a>
          <a href="#developer" className="hover:text-blue-300 transition-colors">Developer</a>
          <a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 text-center px-6 py-20 max-w-6xl mx-auto">
        <div className="animate-fadeInUp">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-6">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              India's First
              <br />
              <span className="text-white">Smart Anti-Theft</span>
              <br />
              System for Earbuds
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Smart SecurePair™ brings phone-grade security to wireless earbuds.
            PIN-protected pairing, device whitelisting and remote lock — all in a drop-in SDK.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button primary className="group" onClick={handleWatchDemo}>
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
            <Button secondary onClick={handleRequestIntegration}>
              Request Integration
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Hero Animation */}
        <div className="mt-16 relative">
          <div className="w-80 h-80 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40 animate-pulse delay-500"></div>
            <div className="absolute inset-16 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute inset-24 bg-white rounded-full flex items-center justify-center">
              <ShieldCheck className="h-16 w-16 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionary Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced protection mechanisms designed specifically for the unique challenges of wireless audio devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lock className="h-12 w-12" />}
              title="PIN-Protected Pairing"
              description="New devices must authenticate with a secure PIN before they can connect to your earbuds."
              gradient="from-blue-500 to-cyan-500"
              active={activeFeature === 0}
            />
            <FeatureCard
              icon={<Bluetooth className="h-12 w-12" />}
              title="Device Whitelisting"
              description="Approved devices reconnect seamlessly while unauthorized devices are automatically blocked."
              gradient="from-purple-500 to-pink-500"
              active={activeFeature === 1}
            />
            <FeatureCard
              icon={<ShieldCheck className="h-12 w-12" />}
              title="Remote Lock & Alerts"
              description="Lock lost earbuds remotely or receive instant notifications of unauthorized connection attempts."
              gradient="from-green-500 to-teal-500"
              active={activeFeature === 2}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <StatCard number="99.9%" label="Security Success Rate" />
            <StatCard number="<100ms" label="Authentication Speed" />
            <StatCard number="50+" label="Supported Chipsets" />
            <StatCard number="24/7" label="Protection Active" />
          </div>
        </div>
      </section>

      {/* Hardware Requirements */}
      <section id="specs" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <InfoSection title="Minimum Hardware Specifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <RequirementItem
                  icon={<Zap className="h-6 w-6" />}
                  title="BLE Chipset"
                  description="Nordic nRF52 / ESP32 / Qualcomm QCC series"
                />
                <RequirementItem
                  icon={<Globe className="h-6 w-6" />}
                  title="Flash Storage"
                  description="Secure key storage & device list management"
                />
                <RequirementItem
                  icon={<Smartphone className="h-6 w-6" />}
                  title="Firmware Access"
                  description="Low-level access to BLE GATT protocols"
                />
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30">
                <h4 className="text-xl font-semibold mb-4 text-blue-300">Integration Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span>Drop-in SDK integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span>Minimal power consumption</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span>Cross-platform compatibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </InfoSection>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <InfoSection title="Roadmap & Future Enhancements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <RoadmapItem
                title="OTA Theft Lock Activation"
                description="Remote activation of theft protection via over-the-air updates"
                status="In Development"
              />
              <RoadmapItem
                title="AI-Based Misuse Detection"
                description="Machine learning algorithms to detect and prevent unauthorized usage patterns"
                status="Research Phase"
              />
              <RoadmapItem
                title="Cloud-Sync Trusted Devices"
                description="Seamless device synchronization across multiple platforms and services"
                status="Coming Soon"
              />
              <RoadmapItem
                title="Native Find-My Integration"
                description="Direct integration with Apple Find My, Google Find My Device, and Samsung SmartThings"
                status="Planned"
              />
            </div>
          </InfoSection>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developer" className="relative z-10 py-20 px-6 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Meet the Innovator
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Smart SecurePair™ is designed and developed by a passionate researcher and entrepreneur
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/30 backdrop-blur-lg">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <img
                      src="jatin.jpeg" 
                      alt="Jatin Dubey"
                      className="h-32 w-32 rounded-full object-cover"
                    />
                  </div>

                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300">Jatin Dubey</h3>
                  <p className="text-xl text-gray-300 mb-6">
                    Cybersecurity Researcher • ML Engineer • Entrepreneur • Innovator
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <ExpertiseCard
                      icon={<ShieldCheck className="h-8 w-8" />}
                      title="Cybersecurity"
                      description="Advanced threat detection and prevention systems"
                    />
                    <ExpertiseCard
                      icon={<Brain className="h-8 w-8" />}
                      title="Machine Learning"
                      description="AI-powered security and behavioral analysis"
                    />
                    <ExpertiseCard
                      icon={<Award className="h-8 w-8" />}
                      title="Innovation"
                      description="Creating cutting-edge solutions for modern challenges"
                    />
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    With deep expertise in cybersecurity and machine learning, Jatin combines academic research
                    with practical innovation to create solutions that address real-world security challenges.
                    Smart SecurePair™ represents the convergence of advanced cryptography, IoT security, and
                    user-centric design principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/30 backdrop-blur-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Audio Products?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of wireless audio security. Protect your customers' investments with enterprise-grade anti-theft technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button primary size="lg" onClick={handleRequestIntegration}>
                Schedule Demo Call
              </Button>
              <Button secondary size="lg" onClick={handleRequestIntegration}>
                Download SDK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold">Smart SecurePair™</span>
            </div>
            <p className="text-gray-400 mb-4">Securing the future of wireless audio</p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-500">
                Designed & Developed by{" "}
                <span className="text-blue-400 font-semibold">Jatin Dubey</span>
                {" "}• Cybersecurity Researcher • ML Engineer • Entrepreneur
              </p>
              <p className="text-xs text-gray-600 mt-2">
                © 2025 Smart SecurePair™. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Popup */}
      {showDemoPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 max-w-md mx-4 border border-blue-500/30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Demo Status</h3>
              <button
                onClick={() => setShowDemoPopup(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">Coming Soon!</h4>
              <p className="text-gray-300 mb-6">
                We're putting the finishing touches on our demo video.
                In the meantime, feel free to request integration details!
              </p>
              <Button primary onClick={() => {
                setShowDemoPopup(false);
                handleRequestIntegration();
              }}>
                Request Integration Instead
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Custom Components
function Button({ children, primary, secondary, size = "md", className = "", ...props }) {
  const baseClasses = "font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center";
  const sizeClasses = {
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl"
  };

  let variantClasses = "";
  if (primary) {
    variantClasses = "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105";
  } else if (secondary) {
    variantClasses = "border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white";
  }

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}

function FeatureCard({ icon, title, description, gradient, active }) {
  return (
    <div className={`relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-500 hover:transform hover:scale-105 ${active ? 'border-blue-400 shadow-lg shadow-blue-500/25' : 'border-gray-700 hover:border-gray-600'
      }`}>
      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-6 mx-auto`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gray-300 text-center leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
      <div className="text-4xl font-bold text-blue-400 mb-2">{number}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}

function InfoSection({ title, children }) {
  return (
    <div className="mb-12">
      <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        {title}
      </h3>
      {children}
    </div>
  );
}

function RequirementItem({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-black/20 rounded-xl border border-gray-700">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-blue-300 mb-1">{title}</h4>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function ExpertiseCard({ icon, title, description }) {
  return (
    <div className="bg-black/30 rounded-xl p-4 text-center">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-blue-300 mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

function RoadmapItem({ title, description, status }) {
  const statusColors = {
    "In Development": "bg-yellow-500",
    "Research Phase": "bg-blue-500",
    "Coming Soon": "bg-green-500",
    "Planned": "bg-purple-500"
  };

  return (
    <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl font-semibold text-blue-300">{title}</h4>
        <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}