import { ArrowDown } from "lucide-react";

export const HeroSection = ({ hero }) => {
  const { first_name, last_name, greeting, description } = hero || {};
  console.log(hero);
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in text-primary">{greeting}</span>
          <span className="opacity-0 animate-fade-in-delay-1 text-foreground"> I'm {first_name}</span>
          <span className="text-foreground opacity-0 animate-fade-in-delay-2 ml-2">{last_name}</span>
        </h1>

        <p className="text-lg mt-4 md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          {description}
        </p>

        <div className="mt-8 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 flex flex-col transform -translate-x-1/2 items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};
