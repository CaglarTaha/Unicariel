import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, brand, email, availability,brand2}) => {
  return (
    <section className="about">
      <PageHeader title="HAKKIMDA" />
      <AboutMe name={name} lbrand={brand} email={email} availability={availability} brand2={brand2} />
    </section>
  );
};

export default About;
