export default function ExperienceSection() {
  const experiences = [
    {
      company: "AmaliTech",
      role: "Software Test Engineer",
      period: "(Jan 2025 – Present)",
      projectname: "AmaliTech Website",
      details: [
        "Delivered stable and reliable application releases, by a decrease in post-deployment bugs by 80%, by performing regression testing using Cypress.",
        "Ensured consistent and pixel-perfect UI, by a reduction in visual defects across environments by 98%, by performing visual testing using Percy.",
        "Enhanced improved accessibility compliance by adherence to WCAG standards and reduced accessibility-related feedback by conducting comprehensive accessibility testing.",
        "Utilize GitHub actions to trigger my Cypress automation script on every push or pull request event.",
      ],
    },
    {
    role: "Software Test Engineer",
     period: "(Jan 2024 – Dec 2024)",
      projectname: "AmaliBlog",
      details: [
        "Accomplished comprehensive test management and traceability, achieving 100% test coverage and improved reporting accuracy by 40%, by utilizing Xray to create and manage test cases, generate test coverage, and produce traceability reports.",
        "Enhanced improved accessibility compliance by adherence to WCAG standards and reduced accessibility-related feedback by conducting comprehensive accessibility testing.",
      ],
    },
        {
    role: "Software Test Engineer",
     period: "(Nov) 2022 – Jan 2024)",
      projectname: "Capti Vr",
      details: [
        "Developed and maintained automated test scripts using Selenium WebDriver and Appium, optimizing cross-platform testing for both web and mobile applications to test the CaptiVr Application that provides High-Quality 360-degree Video Solutions. This initiative reduced manual testing efforts by 50%, significantly improving the efficiency of the QA process and accelerating product delivery timelines.",
        "Conducted comprehensive API testing using Rest Assured, achieving a 99.9% API reliability rate, and ensuring seamless integration and robust performance of backend services.",
        "Implemented performance testing using JMeter to ensure the application can handle high user loads, particularly during peak usage times.",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen px-8 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">{exp.company}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {exp.role}  <span className="italic">{exp.period}</span>
              </p>
              {exp.projectname}
              <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-400 space-y-1">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
