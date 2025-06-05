import React from 'react';
import { SkillCategory as SkillCategoryType } from '../data/skills';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{category.category}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory; 