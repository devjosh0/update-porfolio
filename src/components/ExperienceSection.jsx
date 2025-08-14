export default function ExperienceSection() {
  const experiences = [
    {
      company: "AmaliTech",
      role: "Software Test Engineer",
      period: "(Jan 2025 – Present)",
      projectname: "Roles & Achievements",
      details: [
        "Led mentoring of junior testers and coordinated cross-team testing efforts, boosting team productivity by 25% and enhancing overall quality.",
        "Developed and executed comprehensive test plans and detailed test cases from SRS, resolving 95% of critical issues before release.",
        "Conducted API testing with Postman, Rest Assured, Karate DSL, and WireMock, maintaining 99.9% API reliability across multiple integrations.",
        "Created and optimized automation frameworks using Selenium, Selenide, and Cypress, reducing regression testing time by 40% and increasing release efficiency by 25%.",
        "Enhanced mobile app stability by 30% through Appium testing and debugging.",
        "Improved overall system performance by 30% and load capacity by 35% through Gatling and JMeter performance testing.",
        "Used Xray for test management, ensuring full coverage and producing detailed traceability reports.",
        "Participated in Scrum ceremonies and retrospectives, driving continuous process improvements.",
      ],
    },
        {
    role: "Project",
      projectname: "AmaliTech Website Remake",
      details: [
        "Reduced post-deployment bugs by 80% via Cypress regression testing.",
        "Achieved 98% reduction in visual defects with Percy visual testing.",
        "Improved accessibility compliance with WCAG standards.",
        "Automated test runs on push/pull requests using GitHub Actions.",
      ],
    },
    {
    role: "Project",
      projectname: "AmaliBlog",
      details: [
        "Reduced manual testing efforts by 50% with Selenium automation.",
        "Achieved 100% test coverage and doubled reporting accuracy using Xray for traceability and reporting.",
        "Ensured 99.99% uptime by executing JMeter load testing for 5,000+ concurrent users.",
      ],
    },
        {
    role: "Project",
      projectname: "Capti Vr",
      details: [
        "Reduced manual testing efforts by 50% with Selenium & Appium automation.",
        "Achieved 99.9% API reliability via Rest Assured API testing.",
        "Ensured 99.99% uptime by executing JMeter load testing for 5,000+ concurrent users.",
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
