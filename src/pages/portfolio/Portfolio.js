import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";
import { TwitchEmbed } from "react-twitch-embed";
const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  return (
    <section className="portfolio" >
      <PageHeader title="Yakında gelicek ..." description="Sponsorlar" />
      <div className="row">
      <TwitchEmbed allowFullscreen  channel="https://www.twitch.tv/unicariel" video="" play="" ></TwitchEmbed>
        {/* <ProjectList /> */}
      </div>
    </section>
  );
};

export default Portfolio;
