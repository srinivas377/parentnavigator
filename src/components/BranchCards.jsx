import { Code, Wrench, Briefcase, Heart, Palette, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const branches = [
  {
    icon: Code,
    title: "Computer Science & IT",
    description: "Software Development, AI/ML, Data Science, Cybersecurity",
    avgSalary: "₹6-25 LPA",
    topCompanies: ["Google", "Microsoft", "Amazon", "TCS", "Infosys"],
    growthRate: "+18%",
    color: "text-primary"
  },
  {
    icon: Wrench,
    title: "Mechanical Engineering",
    description: "Automotive, Robotics, Manufacturing, Energy Systems",
    avgSalary: "₹4-15 LPA",
    topCompanies: ["Tata Motors", "Mahindra", "L&T", "Siemens", "Bosch"],
    growthRate: "+12%",
    color: "text-secondary"
  },
  {
    icon: Cpu,
    title: "Electronics & Communication",
    description: "IoT, Embedded Systems, Telecommunications, VLSI",
    avgSalary: "₹5-18 LPA",
    topCompanies: ["Intel", "Qualcomm", "Samsung", "Texas Instruments", "Broadcom"],
    growthRate: "+15%",
    color: "text-accent"
  },
  {
    icon: Briefcase,
    title: "Business & Management",
    description: "MBA, Finance, Marketing, Consulting, Entrepreneurship",
    avgSalary: "₹7-30 LPA",
    topCompanies: ["McKinsey", "BCG", "Deloitte", "KPMG", "Goldman Sachs"],
    growthRate: "+14%",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Healthcare & Medical",
    description: "Medicine, Nursing, Pharmacy, Biotechnology",
    avgSalary: "₹6-50 LPA",
    topCompanies: ["Apollo", "Fortis", "AIIMS", "Cipla", "Dr. Reddy's"],
    growthRate: "+16%",
    color: "text-destructive"
  },
  {
    icon: Palette,
    title: "Arts & Design",
    description: "UI/UX Design, Animation, Fashion, Architecture",
    avgSalary: "₹4-20 LPA",
    topCompanies: ["Adobe", "Figma", "Zara", "Gensler", "IDEO"],
    growthRate: "+13%",
    color: "text-secondary"
  },
];

const BranchCards = () => {
  return (
    <section id="branches" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Career Paths by Branch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive insights into salary ranges, top employers, and growth opportunities across major fields of study
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {branches.map((branch, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center`}>
                    <branch.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant="secondary" className="font-semibold">
                    {branch.growthRate} Growth
                  </Badge>
                </div>
                <CardTitle className="text-xl">{branch.title}</CardTitle>
                <CardDescription className="text-base">
                  {branch.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/10">
                  <span className="text-sm font-medium text-muted-foreground">Avg. Salary</span>
                  <span className="text-lg font-bold text-accent">{branch.avgSalary}</span>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Top Recruiters</p>
                  <div className="flex flex-wrap gap-2">
                    {branch.topCompanies.slice(0, 3).map((company, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {company}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchCards;
