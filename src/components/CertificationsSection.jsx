// components/CertificationsSection.jsx
export default function CertificationsSection() {
  const certifications = [
    {
      title: "Certified Amazon Web Service (AWS) re/Start Graduate ",
      organization: "AWS",
      date: "2024",
      link: "https://www.credly.com/badges/d32c3247-7e0b-4b7f-b462-7492a39bcd4f/linked_in_profile", // Optional: Replace with actual URL
    },
    {
      title: "Bachelor Of Technology In ICT (Software Engineering)",
      organization: "Takoradi Technical University",
      date: "2023",
      link: "https://drive.google.com/file/d/1WGqksRzncAMhlcdLpwM7KWra__ONiRKL/view?usp=drive_link",
    },
    {
      title: "certificate of completion of java",
      organization: "Amigoscode",
      date: "2024",
      link: "https://drive.google.com/file/d/1ivLdzm-GI8Fke1HZrbdDQXWryTBYMvq5/view?usp=drive_link",
    },
    {
      title: "certificate of completion of cypress",
      organization: "TAU",
      date: "2022",
      link: "https://drive.google.com/file/d/1MX-o7fl6lu9QPOlAuegP1zAt0PvXNk3v/view?usp=drive_link",
    },
    {
      title: "Certificate of Completion for Git and Github Essentials",
      organization: "Amigoscode",
      date: "2024",
      link: "https://drive.google.com/file/d/1MQ876kW1Ou-541obDDfnbAox2IeIeLVw/view?usp=drive_link",
    },
    {
      title: "Certificate Completion of Setting a Foundation For Successful Test Automation",
      organization: "TAU",
      date: "2024",
      link: "https://drive.google.com/file/d/1jaKHFoviJDSwb0vjS4nSnqr9PmKiIf-G/view?usp=drive_link",
    },
    {
      title: "certificate of completion of javascript",
    },
        {
      title: "certificate of completion of Selenium with Java",
    },
        {
      title: "certificate of completion of Appium",
    },
    // Add more as needed
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen px-8 py-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Certifications</h2>

        <ul className="space-y-6 text-left">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.organization} – {cert.date}
                  </p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 sm:mt-0 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
