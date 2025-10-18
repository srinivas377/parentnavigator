import { GraduationCap, TrendingUp, Users } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToChat = () => {
    const chatSection = document.getElementById("ai-chat");
    chatSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-10" />

      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <GraduationCap className="w-4 h-4" />
            <span>Powered by AI Career Intelligence</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Make Informed Decisions About Your{" "}
            <span className="bg-clip-text text-transparent gradient-hero">
              Child's Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Get AI-powered insights on career outcomes, salary expectations, and post-graduation opportunities across all branches and industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 shadow-glow hover:shadow-lg transition-all"
              onClick={scrollToChat}
            >
              Ask Career Questions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              onClick={() => {
                const branches = document.getElementById("branches");
                branches?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Branches
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Real-Time Data</h3>
              <p className="text-sm text-muted-foreground text-center">
                Current salary ranges and market trends
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">All Branches</h3>
              <p className="text-sm text-muted-foreground text-center">
                Engineering, Business, Medical, Arts & more
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Expert Insights</h3>
              <p className="text-sm text-muted-foreground text-center">
                AI-powered career counseling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
