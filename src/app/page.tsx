import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStackBar from "./components/TechStackBar";
import CoreServicesDetailed from "./components/CoreServicesDetailed";
import CaseStudiesSection from "./components/CaseStudiesSection";
import AboutCredentials from "./components/AboutCredentials";
import ContactBookingSection from "./components/ContactBookingSection";
import WhoIWorkWith from "./components/WhoIWorkWith";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import OutcomesSection from "./components/OutcomesSection";
import ReadyToAutomate from "./components/ReadyToAutomate";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/PricingSection";
import SiteFooter from "./components/SiteFooter";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ehsan-ghl-portfolio.vercel.app";
const title = "Ehsan Ud Din | GHL Automation Engineer";
const description =
  "AI Automation Engineer specializing in GoHighLevel (GHL) CRM automation, AI chatbots, RAG systems, and advanced workflow integrations for agencies.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "GoHighLevel automation",
    "GHL automation engineer",
    "GHL CRM setup",
    "AI automation agency",
    "AI chatbot development",
    "CRM workflow automation",
    "lead generation automation",
    "GoHighLevel expert",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Ehsan Ud Din",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ehsan Ud Din",
  jobTitle: "Full-Stack AI & Automation Engineer",
  description,
  url: siteUrl,
  email: "mailto:ehsanmarwat.dev@gmail.com",
  knowsAbout: [
    "GoHighLevel",
    "CRM Automation",
    "AI Chatbots",
    "Retrieval-Augmented Generation",
    "Workflow Automation",
    "Webhook Integrations",
  ],
};

export default function Home() {
  return (
    <main className="bg-grid min-h-screen antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <Hero />
      <TechStackBar />
      <CoreServicesDetailed />
      <CaseStudiesSection />
      <AboutCredentials />
      <ContactBookingSection />
      <WhoIWorkWith />
      <WhyWorkWithMe />
      <OutcomesSection />
      <ReadyToAutomate />
      <ProcessSection />
      <PricingSection />
      <SiteFooter />
    </main>
  );
}
