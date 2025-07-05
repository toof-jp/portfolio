import React from 'react';
import { colorClasses } from '../utils/colors';

const SkillBadge = ({ name, color }) => {
  const classes = colorClasses[color]?.badge || 'bg-gray-100 text-gray-800';
  
  return (
    <span className={`${classes} px-3 py-1 rounded-full text-sm`}>
      {name}
    </span>
  );
};

export default SkillBadge;