
import { Briefcase } from "lucide-react";
function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
}


export const AboutSection = ({ data, experiences = [] }) => {
  if (!data) return null;

  const bioParts = data.bio?.split("\n\n") || [];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{bioParts[0]}</h3>
            {bioParts.slice(1).map((p, i) => (
              <p key={i} className="text-muted-foreground">
                {p}
              </p>
            ))}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {data.cv_url && (
                <a
                  href={data.cv_url}
                  className="cosmic-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              )}
            </div>
          </div>

       {/* Experience Cards */}
<div className="grid grid-cols-1 gap-6 text-left">
  <h3 className="text-2xl font-bold mb-6 text-left md:text-center border-b pb-2">
    Work <span className="text-primary ">Experience</span>
  </h3>

  {experiences.map((exp) => (
    <div
      key={exp.id}
      className="gradient-border rounded-xl p-6 bg-background/80 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Briefcase className="w-6 h-6 text-primary" />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-semibold text-foreground">
              {exp.job_title}
            </h4>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
  {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
</span>

          </div>

          <p className="text-sm font-medium text-muted-foreground mb-1">
            {exp.company_name}
          </p>

          <hr className="my-2 border-muted/20" />

          <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
            {exp.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};


