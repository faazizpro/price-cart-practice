import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({feature}) => {
    return (

            <div className='flex
             items-center '>
                <CheckCircleIcon className="h-6 w-6 text-green-500 bg-white rounded-full"/>
                <p className='ml-2 mb-2'>{feature}</p>
            </div>

    );
};

export default Feature;