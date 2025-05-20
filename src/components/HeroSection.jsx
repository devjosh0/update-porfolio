// HeroSection.jsx
import { Mail, Github, Linkedin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6 flex flex-col justify-center">
        {/* Intro Text */}
        <div className="space-y-3">
          <p className="text-lg">Hi, I am</p>
          <h1 className="text-4xl font-extrabold">Hussein Amadu</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Software Test Engineer
          </p>
        </div>

        {/* Mobile Image */}
        <div className="md:hidden mt-8 flex justify-center">
          <img
            src="https://i.ibb.co/0yzTnJ6g/image-1.jpg"
            alt="Hussein Amadu"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-10">
          <a
            href="mailto:husseinamadu634@gmail.com"
            className="bg-white dark:bg-gray-800 p-3 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/devjosh0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-3 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hussein-amadu-703426258/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-3 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Right Panel - Desktop Image */}
      <div className="hidden md:flex w-1/2 bg-black items-center justify-center">
        <img
          src="https://i.ibb.co/0yzTnJ6g/image-1.jpg"
          alt="Hussein Amadu"
          className="max-h-[80%] max-w-[80%] object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
