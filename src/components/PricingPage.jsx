import React, { useState } from 'react';

const PricingPage = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('INR');

  const plans = [
    {
      name: 'Weekly',
      price: 1199,
      duration: '7 days',
      features: ['Access to all course materials', 'Daily practice tests', 'Email support'],
    },
    {
      name: '14 Days',
      price: 2199,
      duration: '14 days',
      features: ['Access to all course materials', 'Daily practice tests', 'Email support', '1 one-on-one coaching session'],
    },
    {
      name: 'Monthly',
      price: 4199,
      duration: '30 days',
      features: ['Access to all course materials', 'Daily practice tests', 'Priority email support', '2 one-on-one coaching sessions'],
    },
  ];

  const currencies = {
    INR: { symbol: '₹', rate: 1 },
    USD: { symbol: '$', rate: 0.012 },
    GBP: { symbol: '£', rate: 0.0097 },
    CAD: { symbol: 'C$', rate: 0.016 },
    AUD: { symbol: 'A$', rate: 0.018 },
    NZD: { symbol: 'NZ$', rate: 0.020 },
    SGD: { symbol: 'S$', rate: 0.016 },
    HKD: { symbol: 'HK$', rate: 0.095 },
    EUR: { symbol: '€', rate: 0.011 },
    ZAR: { symbol: 'R', rate: 0.21 },
  };

  const convertPrice = (price) => {
    const convertedPrice = price * currencies[selectedCurrency].rate;
    return convertedPrice.toFixed(2);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Select the plan that best suits your IELTS preparation needs.
          </p>
          <div className="mt-6">
            <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
              Select Currency:
            </label>
            <select
              id="currency"
              name="currency"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              {Object.keys(currencies).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div key={plan.name} className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {currencies[selectedCurrency].symbol}
                    {convertPrice(plan.price)}
                  </span>
                  <span className="ml-1 text-xl font-semibold">{plan.duration}</span>
                </p>
                <p className="mt-6 text-gray-500">{plan.description}</p>

                <ul className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon className="flex-shrink-0 w-6 h-6 text-indigo-500" aria-hidden="true" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className="bg-indigo-500 text-white hover:bg-indigo-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// CheckIcon component code remains the same
const CheckIcon = (props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00002 16.2L4.80002 12L3.40002 13.4L9.00002 19L21 6.99998L19.6 5.59998L9.00002 16.2Z" fill="currentColor" />
    </svg>
  );
};

export default PricingPage;


