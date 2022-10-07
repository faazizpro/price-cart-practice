import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name: 'Free', price: 0, features: [
            'Top Navigation',
            'Mobile-friendliness',
            'Dark Mode',
            'Accessibility ',
            'Privacy Policy Page'
        ]},
        {id:2, name: 'Medium', price: 9.99, features: [
            'user experience',
            'visual experience',
            'Reviews and Testimonials ',
            'Site Search ',
            'Order Tracking'
        ]},
        {id:3, name: 'Premium', price: 19.99, features: [
            'Strong, clear call to actions',
            'Breadcrumb Navigation',
            'Reviews and Testimonials ',
            'Product Videos ',
            'FAQ For Products'
        ]}
    ]
    return (
        <div >
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal Of The Town</h2>

            <div className='grid md:grid-cols-3 gap-3 mt-4'>
            {
                pricingOptions.map(option => <PriceOption
                key={option.id}
                option={option}
                ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;