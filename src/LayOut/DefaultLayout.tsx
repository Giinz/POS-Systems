import React from 'react';
type Props = { children: React.ReactNode };
const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='container mx-auto bg-white'>
      <div className='mt-5 flex flex-row items-center justify-between px-5'>
        <div className='text-gray-800'>
          <div className='text-xl font-bold'>Food & Drinks</div>
          <span className='text-xs'>Ha Noi, Viet Nam</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DefaultLayout;
