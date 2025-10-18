import Hero from "@/components/Hero";
import BranchCards from "@/components/BranchCards";
import AIChat from "@/components/AIChat";
import Statistics from "@/components/Statistics";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Statistics />
      <BranchCards />
      <AIChat />

      <footer className="py-12 bg-muted/30 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Career Insights AI. Empowering parents with data-driven career intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
