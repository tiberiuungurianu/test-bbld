import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import HowItWorks from "@/components/HowItWorks"
import UniversityLogos from "@/components/UniversityLogos"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <UniversityLogos />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
};

export default Index;
