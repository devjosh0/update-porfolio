// ContactSection.jsx
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Email */}
        <div className="flex items-center space-x-4">
          <Mail className="text-blue-500" />
          <a
            href="mailto:husseinamadu634@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:underline"
          >
            husseinamadu634@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-4">
          <Github className="text-gray-800 dark:text-white" />
          <a
            href="https://github.com/devjosh0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:underline"
          >
            github.com/devjosh0
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-4">
          <Linkedin className="text-blue-600" />
          <a
            href="https://www.linkedin.com/in/hussein-amadu-703426258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:underline"
          >
            linkedin.com/in/hussein-amadu-703426258/
          </a>
        </div>

{/* Location */}
<div className="flex items-center space-x-4">
  <MapPin className="text-red-500" />
  <a
    href="https://www.google.com/maps/place/Accra,+Ghana"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 dark:text-gray-300 hover:underline"
  >
    Accra, Ghana
  </a>
</div>

      </div>
    </section>
  );
}
