import React from 'react';
import Speaking from '../images/speaking.svg';
import { Link } from 'react-router-dom';

const SpeakingSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Improve Your Speaking Skills
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">Unlock your speaking potential with our AI-driven practice sessions. Receive precise feedback and tailored guidance to enhance your performance. Elevate your IELTS speaking scores with confidence and precision.</p>
          <ol className="flex items-center w-full space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
            <li className="flex items-center">
              <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">1</span>
              Login <span className="hidden sm:inline-flex sm:ml-2"></span>
              <svg className="w-3 h-3 ml-2 sm:ml-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
              </svg>
            </li>
            <li className="flex items-center">
              <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">2</span>
              Give the <span className="hidden sm:inline-flex sm:ml-2">Test</span>
              <svg className="w-3 h-3 ml-2 sm:ml-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
              </svg>
            </li>
            <li className="flex items-center">
              <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">3</span>
              Instant Result
            </li>
          </ol>
          <div className="mt-6 sm:flex sm:space-x-4 space-y-4 sm:space-y-0">
          <Link
              to="/loginsignup"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              2 min Quick Test
            </Link>
            <Link
              to="/loginsignup"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              Full length Test
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={Speaking} alt="hero image" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;