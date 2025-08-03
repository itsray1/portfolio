import { useState } from "react";

export const SkillsSection = ({ data = [] }) => {

  const categories = Array.from(
    new Map(
      data
        .filter((skill) => skill.category) 
        .map((skill) => [skill.category.id, skill.category])
    ).values()
  );

  const [selectedCategory, setSelectedCategory] = useState(null);


  const filteredSkills = selectedCategory
    ? data.filter(
        (skill) => skill.category && skill.category.id === selectedCategory
      )
    : data;

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === null
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === cat.id
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-card p-6 rounded-lg shadow-xs hover:shadow-lg transition-shadow duration-300"
            >
              <div className="font-semibold text-lg text-muted-foreground">
                {skill.name.trim()}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {skill.level}
              </h3>

              <div className="w-full bg-secondary/50 h-4 mt-2 rounded-full relative">
                <div
                  className="bg-primary h-4 rounded-full origin-left animate-fill animate-[grow_1.5s_ease-out] relative"
                  style={{ width: `${skill.progress}%` }}
                >
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-white">
                    {skill.progress}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

