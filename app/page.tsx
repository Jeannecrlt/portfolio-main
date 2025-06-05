"use client";

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { personalInfo, education, experience, projects, skills } from '../data';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      
      <section>
        <SectionTitle title="About Me" />
        <p className="text-gray-600">{personalInfo.bio}</p>
      </section>
      
      <section>
        <SectionTitle title="Education" />
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{education[0].institution}</h3>
          <p className="text-md font-medium text-gray-700">{education[0].degree}</p>
          <p className="text-sm text-gray-500">{education[0].period}</p>
        </div>
        <div className="flex justify-end">
          <Link href="/education" className="text-blue-600 hover:underline">
            View all education →
          </Link>
        </div>
      </section>
      
      <section>
        <SectionTitle title="Experience" />
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{experience[0].title}</h3>
          <p className="text-md font-medium text-gray-700">
            {experience[0].company}, {experience[0].location}
          </p>
          <p className="text-sm text-gray-500">{experience[0].period}</p>
        </div>
        <div className="flex justify-end">
          <Link href="/experience" className="text-blue-600 hover:underline">
            View all experience →
          </Link>
        </div>
      </section>
      
      <section>
        <SectionTitle title="Projects" />
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{projects[0].title}</h3>
          <p className="text-md font-medium text-gray-700">{projects[0].subtitle}</p>
          <p className="text-sm text-gray-500">{projects[0].period}</p>
        </div>
        <div className="flex justify-end">
          <Link href="/projects" className="text-blue-600 hover:underline">
            View all projects →
          </Link>
        </div>
      </section>
      
      <section>
        <SectionTitle title="Skills" />
        <div className="flex flex-wrap gap-2">
          {skills.flatMap(category => 
            category.skills.slice(0, 3).map((skill, index) => (
              <span 
                key={`${category.id}-${index}`} 
                className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md"
              >
                {skill}
              </span>
            ))
          )}
        </div>
        <div className="flex justify-end mt-4">
          <Link href="/skills" className="text-blue-600 hover:underline">
            View all skills →
          </Link>
        </div>
      </section>
    </div>
  );
}
