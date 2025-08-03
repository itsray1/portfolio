import { ArrowRight, Github } from "lucide-react";

export const ProjectSection = ({ data = [] }) => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in
          web development and design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.length > 0 ? (
            data.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg shadow-xs card-hover"
              >
                <div className="overflow-hidden h-48 rounded-t-lg">
                  <img
                    src={
                       project.images?.length > 0
                      ? `http://127.0.0.1:8000/storage/${project.images[0].image_url}`
                      : "http://127.0.0.1:8000/storage//project_images/01K1RKDJAYSNKG7TZSSHMA07HD.png"
                    }
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs text-secondary-foreground px-2 py-1 border rounded-full font-medium bg-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-2">
                    {project.description}
                  </p>

                  {project.tech_stack && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {JSON.parse(project.tech_stack).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          aria-label="GitHub Repository"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground">
              No projects to display.
            </p>
          )}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/itsray1"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check my GitHub for more projects{" "}
            <ArrowRight size={16} className="inline" />
          </a>
        </div>
      </div>
    </section>
  );
};
