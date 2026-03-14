import React from 'react';

const Grid = ({ children, columns = 3, gap = 8, className = '' }) => {
  const colsConfig = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gapConfig = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
    12: 'gap-12'
  };

  const gridClass = colsConfig[columns] || colsConfig[3];
  const gapClass = gapConfig[gap] || gapConfig[8];

  return (
    <div className={`grid ${gridClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
