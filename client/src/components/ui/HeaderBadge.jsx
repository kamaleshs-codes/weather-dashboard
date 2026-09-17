import React from "react";

export const HeaderBadge = ({ icon: Icon, header }) => {
  return (
    <div className='mb-6 inline-flex items-center gap-2 rounded-[0.2rem_1.5rem_2.5rem_0.2rem] border border-border-muted bg-secondary px-8 py-4 text-lg font-bold text-main shadow-subtle'>
      <Icon size={25} className='text-yellow-500' />
      <span className='text-accent'>{header}</span>
    </div>
  );
};
