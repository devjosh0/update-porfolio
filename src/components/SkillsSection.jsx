// SkillsSection.jsx
import {
  SiJavascript,
  SiSelenium,
  SiCypress,
  SiCucumber,
  SiPostman,
  SiApachejmeter,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Selenium", icon: <SiSelenium className="text-green-500" /> },
  { name: "Cypress", icon: <SiCypress className="text-emerald-500" /> },
  { name: "Cucumber", icon: <SiCucumber className="text-lime-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "JMeter", icon: <SiApachejmeter className="text-red-500" /> },

  // Fallback icons
  { name: "Appium", icon: <div className="text-lg font-bold">A</div> },
  { name: "Gatling", icon: <div className="text-lg font-bold">G</div> },
  { name: "Rest Assured", icon: <div className="text-sm font-bold text-center leading-tight">RA</div> },
  { name: "Karate", icon: <div className="text-lg font-bold">K</div> },
  { name: "WireMock", icon: <div className="text-sm font-bold text-center leading-tight">WM</div> },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center space-y-2 group transition-transform hover:scale-105"
          >
            <div className="text-4xl bg-gray-100 dark:bg-gray-800 p-4 rounded-full shadow">
              {icon}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
