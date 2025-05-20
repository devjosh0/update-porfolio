// components/ProjectsSection.jsx
export default function ProjectsSection() {
  const projects = [
    {
      title: "Capti Vr",
      description:
        "An innovative automated video recording solution for attraction operators that produces high quality 360-degree videos of all those adventures (Rollercoaster ride) – situations that are so extreme that you cannot hold your selfie stick.",
      technologies: ["Flutter", "Selenium", "C++"],
    },
    {
      title: "AmaliBlog",
      description:
        "Web based application space to write (tech) blog posts, share expertise within AmaliTech and build a professional spotlight for yourself.",
      technologies: ["Angular", "Java Spring Boot", "Selenium", "Jmeter"],
    },
    {
      title: "AmaliTech Website",
      description:
        "An official website of AmaliTech",
      technologies: ["Next.js", "Cypress", "Percy", "Allure", "Java"],
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen px-8 py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-left">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
