import React from 'react';
type Props = { children: React.ReactNode };
const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='container mx-auto bg-white'>
      <div className='mt-5 flex flex-row items-center justify-between px-5'>
        <div className='text-gray-800'>
          <div className='text-xl font-bold'>Đại lý nhựa Song Long - Dũng Hà</div>
          <span className='text-xs'>428 Ngọc Lâm, Long Biên, Hà Nội</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DefaultLayout;
