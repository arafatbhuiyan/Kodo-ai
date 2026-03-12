import React from 'react';
import AutoSlider from './AutoSlider';

const Community = () => {
    return (
        <div className=' max-w-[1220px] mx-auto'>
            <div>
                <h2 className=' text-3xl font-bold'>From the Community</h2>
                <div className=' flex justify-between items-center'>
                    <p className=' text-md text-gray-600'>Explore what the community is designing with Kodo.</p>
                    <button
                    onClick={()=>alert("Gallery is not found")}
                    className='pr-3 text-sm font-bold'>View Gallery →</button>
                </div>
            </div>
            <AutoSlider></AutoSlider>
        </div>
    );
};

export default Community;