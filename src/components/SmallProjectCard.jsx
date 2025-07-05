import React from 'react';
import SkillBadge from './SkillBadge';

const SmallProjectCard = ({ project }) => {
  const { title, description, technologies, link } = project;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 mb-3 text-sm">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <SkillBadge key={index} name={tech.name} color={tech.color} />
        ))}
      </div>
      
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 text-sm"
      >
        {link.text} →
      </a>
    </div>
  );
};

export default SmallProjectCard;