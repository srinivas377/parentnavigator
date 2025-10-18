import { TrendingUp, Users, Building2, Award } from "lucide-react";

const statistics = [
  {
    icon: TrendingUp,
    value: "92%",
    label: "Average Placement Rate",
    description: "Across top institutions"
  },
  {
    icon: Users,
    value: "2.5M+",
    label: "Students Analyzed",
    description: "Career outcomes tracked"
  },
  {
    icon: Building2,
    value: "5000+",
    label: "Partner Companies",
    description: "Hiring across sectors"
  },
  {
    icon: Award,
    value: "₹8.5L",
    label: "Median CTC",
    description: "For engineering graduates"
  }
];

const Statistics = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-5" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Data-Driven Career Intelligence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time statistics from thousands of institutions and companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />

              <div className="relative p-8 rounded-2xl bg-card border-2 hover:border-primary/50 transition-all shadow-sm hover:shadow-md text-center">
                <div className="w-14 h-14 rounded-full gradient-hero mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent gradient-hero">
                  {stat.value}
                </div>

                <div className="text-lg font-semibold mb-1">
                  {stat.label}
                </div>

                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
