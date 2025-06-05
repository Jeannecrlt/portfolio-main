import React from 'react';
import { Project } from '../data/projects';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
        <span className="text-sm text-gray-500 mt-1 md:mt-0">{project.period}</span>
      </div>
      <p className="text-md font-medium text-gray-700 mb-2">{project.subtitle}</p>
      <ul className="list-disc pl-5 space-y-1 mb-2">
        {project.details.map((detail, index) => (
          <li key={index} className="text-gray-600">{detail}</li>
        ))}
      </ul>
      {project.tools && (
        <div className="mt-2">
          <p className="text-sm font-medium text-gray-700">Tools used:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tools.map((tool, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem; 