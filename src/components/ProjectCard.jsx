import React from 'react';
import SkillBadge from './SkillBadge';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, prPoint, links, gradient } = project;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className={`md:w-1/3 h-48 md:h-auto bg-gradient-to-br ${gradient || 'from-gray-400 to-gray-600'}`}></div>
        <div className="p-8 md:w-2/3">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">使用技術:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <SkillBadge key={index} name={tech.name} color={tech.color} />
              ))}
            </div>
          </div>
          
          {prPoint && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">PRポイント:</h4>
              <p className="text-gray-600 text-sm">{prPoint}</p>
            </div>
          )}
          
          <div className="flex space-x-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                {link.icon && <span className="w-5 h-5 mr-2">{link.icon}</span>}
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;