import React from 'react';
import { colorClasses } from '../utils/colors';

const SkillCard = ({ name, description, color }) => {
  const colors = colorClasses[color] || colorClasses.gray;
  
  return (
    <div className={`${colors.bg} border ${colors.border} rounded-lg p-4 text-center`}>
      <div className={`text-2xl font-bold ${colors.text} mb-1`}>{name}</div>
      {description && <div className="text-sm text-gray-600">{description}</div>}
    </div>
  );
};

export default SkillCard;