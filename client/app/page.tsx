import { HeroSection } from "@/components/hero-section"
import { FeaturedAgents } from "@/components/featured-agents"
import { FeatureShowcase } from "@/components/feature-showcase"
import { CategorySection } from "@/components/category-section"
import { WorkflowAutomation } from "@/components/workflow-automation"
import { CustomSolutions } from "@/components/custom-solutions"
import { CTASection } from "@/components/cta-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { TrustedBy } from "@/components/trusted-by"
import { StatisticsSection } from "@/components/statistics-section"

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeaturedAgents />
      <FeatureShowcase />
      <StatisticsSection />
      <CategorySection />
      <WorkflowAutomation />
      <TestimonialSection />
      <CustomSolutions />
      <TrustedBy />
      <CTASection />
    </main>
  )
}
