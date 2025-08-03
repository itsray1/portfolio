import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StarryBackground from "../Components/StarBackground";
import { NavBar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectSection } from "../Components/ProjectSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";

export const Home = () => {
  const { username } = useParams();
  const [about, setAbout] = useState(null);
  const [hero, setHero] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    async function loadData() {
      try {
        const [aboutRes, experiencesRes, skillsRes, projectsRes, contactRes] =
          await Promise.all([
            fetch(`http://127.0.0.1:8000/api/profile/${username}/about`),
            fetch(`http://127.0.0.1:8000/api/profile/${username}/experiences`),
            fetch(`http://127.0.0.1:8000/api/profile/${username}/skills`),
            fetch(`http://127.0.0.1:8000/api/profile/${username}/projects`),
            fetch(`http://127.0.0.1:8000/api/profile/${username}/contacts`),
          ]);

        if (!aboutRes.ok) throw new Error("User not found");

        const aboutData = await aboutRes.json();

        const experiencesData = await experiencesRes.json();
        const skillsData = skillsRes.ok
          ? await skillsRes.json()
          : { skills: [] };
        const projectsData = projectsRes.ok
          ? await projectsRes.json()
          : { projects: [] };
        const contactData = contactRes.ok
          ? await contactRes.json()
          : { contact: [] };

        setAbout(aboutData.about_me|| []);
        setHero({
          first_name: aboutData.about_me.first_name,
          last_name: aboutData.about_me.last_name,
          greeting: "Hello,",
          description: (aboutData.about_me.bio || "").split("\n")[0],
        });
        setExperiences(experiencesData.experiences|| []);
        setSkills(skillsData.skills || []);
        setProjects(projectsData.projects || []);
        setContact(contactData.contacts || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [username]);


  if (loading) {
    return (
      <div className="relative h-screen flex items-center justify-center bg-background text-foreground">
        <StarryBackground />
        <div className="z-10 text-center">
          <div className="loader mx-auto mb-4" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }
  if (error)
    return <p className="text-center text-red-500 py-16">خطأ: {error}</p>;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <StarryBackground />
      <NavBar />

      <main>
        <HeroSection hero={hero} />
        <AboutSection data={about} experiences={experiences} />
        <SkillsSection data={skills} />
        <ProjectSection data={projects} />
        <ContactSection data={contact} />
      </main>

      <Footer />
    </div>
  );
};
