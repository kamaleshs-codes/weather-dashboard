import React, { useState } from "react";
import { LuCloudSun, LuArrowRight, LuX } from "react-icons/lu";

export const DailySummary = ({ summary }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative mt-4 w-full flex flex-col justify-around px-5 py-3 bg-secondary text-main border-2 border-border-muted rounded-lg shadow-subtle'>
      <div className='flex items-center gap-3'>
        <div className='flex gap-1 flex-1'>
          <LuCloudSun className='text-xl text-yellow-400' />
          <span className='font-semibold'>Daily Summary</span>
        </div>
        {!isOpen && (
          <LuArrowRight
            className='w-7 h-7 hover:text-accent cursor-pointer'
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      <p className='mt-2 text-sm text-text-light'>
        Daily weather summary will appear here.
      </p>

      {isOpen && (
        <div className='absolute left-full bottom-5 ml-4 w-96 bg-main text-text-muted border-2 border-border-muted rounded-lg shadow-drop z-50'>
          <div className='flex items-center justify-between p-4 border-b border-border-muted'>
            <h2 className='font-semibold text-lg'>Today's Summary</h2>
            <LuX
              className='w-5 h-5 cursor-pointer hover:text-accent-secondary'
              onClick={() => setIsOpen(false)}
            />
          </div>
          <p className='px-4 py-2 mt-2'>{summary}</p>
        </div>
      )}
    </div>
  );
};
