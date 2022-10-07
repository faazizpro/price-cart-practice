import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-6'>
            <div className=''>
                <h3 >
                    <span className='font-bold text-white text-6xl'>{option.price}</span>
                    <span className='font-bold text-gray-200'>/month</span>
                </h3>

                <p className='text-3xl my-4'>{option.name}</p>
            </div>
        {
            features.map((feature, idx) => <Feature
            feature={feature}
            key={idx}
            ></Feature>)
        }
        
        <button className='bg-green-500 w-full rounded-md py-2 font-bold text-white mt-4 '>Buy Now</button>
        </div>
    );
};

export default PriceOption;