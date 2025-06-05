import React from 'react';
import { Experience } from '../data/experience';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
        <span className="text-sm text-gray-500 mt-1 md:mt-0">{experience.period}</span>
      </div>
      <p className="text-md font-medium text-gray-700 mb-2">
        {experience.company}, {experience.location}
      </p>
      <ul className="list-disc pl-5 space-y-1">
        {experience.details.map((detail, index) => (
          <li key={index} className="text-gray-600">{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem; 