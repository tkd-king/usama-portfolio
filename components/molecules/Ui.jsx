import React from 'react';
import WorkProduct from '../atoms/WorkProduct';

const Ui = () => {
  return (
    <div className='flex w-[100%] flex-wrap gap-6 h-screen'>
        <WorkProduct src="/assets/images/work4.png" className="w-full h-full "/> 
        <WorkProduct src="/assets/images/work3.png" className="w-full h-full "/> 
        <WorkProduct src="/assets/images/work2.png" className="w-full h-full "/> 
    </div>
  )
}

export default Ui;
