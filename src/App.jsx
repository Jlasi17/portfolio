import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Skills from "./sections/Skills";
import ContactDetails from "./sections/ContactDetails";
import StackedCards from "./sections/Projects";
import Intro from "./sections/Intro";
import Education from "./sections/Education";

const sections = [
  { id: "home", title: "Home", component: <Hero /> },
  { id: "about", title: "About", component: <Intro /> },
  { id: "education", title: "Education", component: <Education /> },
  { id: "projects", title: "Projects", component: <StackedCards /> },
  { id: "skills", title: "Skills", component: <Skills /> },
  { id: "contact", title: "Contact", component: <ContactDetails /> },
];

const App = () => {
  return (
    <div>
      <NavBar sections={sections} />
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          {section.component}
        </section>
      ))}
    </div>
  );
};

export default App;