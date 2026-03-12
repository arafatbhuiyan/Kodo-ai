import React from 'react';

const HowItWorks = () => {
    return (
        <div className=' max-w-[1220px] mx-auto mt-15'>
            <div className='text-center'>
                <h3 className=' text-3xl font-bold'>How it works</h3>
                <p className=' mt-4'>Create professional designs in seconds, without any design experience needed.</p>
            </div>
            <div className='flex justify-between items-center gap-10 mt-7'>
               <div className=' text-center'>
                    <h2 className=' text-3xl font-bold text-gray-600'>1</h2>
                    <h3 className=' text-3xl text-black mt-5'>Describe your design</h3>
                    <p className=' text-gray-500 mt-3'>Tell Kodo what you want to create. Type a simple description like "coffee shop menu" or "birthday invitation" and watch your design come to life.</p>
                </div>
                <div className=' text-center'>
                    <h2 className=' text-3xl font-bold text-gray-600'>2</h2>
                    <h3 className=' text-3xl text-black mt-4'>Get your design</h3>
                    <p className=' text-gray-500 mt-3'>In seconds, Kodo creates a complete, polished design with all the elements you need. Everything is ready to use right away.</p>
                </div>
                <div className=' text-center'>
                    <h2 className=' text-3xl font-bold text-gray-600'>3</h2>
                    <h3 className=' text-3xl text-black mt-4'>Refine and export</h3>
                    <p className=' text-gray-500 mt-3'>Make any changes you want, add your own touches, or export it as-is. Your design is fully editable and ready to share.</p>
                </div>
        </div> 
            </div>
            
    );
};

export default HowItWorks;