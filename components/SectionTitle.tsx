import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 pb-2 border-b border-gray-200">{title}</h2>
    </div>
  );
};

export default SectionTitle; 