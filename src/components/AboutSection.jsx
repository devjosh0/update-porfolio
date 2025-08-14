// components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Passionate and results-driven Software Test Engineer with 3+ years of experience in manual and automated testing of web, mobile, and API applications. Skilled in crafting and executing comprehensive test strategies that achieve up to 100% test coverage, reduce post-deployment bugs by 80%, and maintain 99.9% API reliability. Proficient in modern automation frameworks (Selenium, Selenide, Cypress, Appium) and API testing tools (Postman, Rest Assured, Karate DSL, WireMock). Adept at performance, accessibility, and cross-platform testing, and experienced in integrating CI/CD pipelines via Jenkins, GitLab CI, and GitHub Actions. Recognized for mentoring teams, improving productivity by 25%, and delivering faster, more stable releases across complex systems.
        </p>
      </div>
    </section>
  );
}
