import students from '../images/students.jpg';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center mx-auto text-center lg:col-span-7 lg:text-left">
          <h1 className="max-w-2xl mb-4 md:text-left text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white mx-auto lg:mx-0">
            Ielts full Mocktest <br className="hidden sm:block" /> Full Preparation
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg md:text-left lg:text-xl dark:text-gray-400 mx-auto lg:mx-0">
            Get an accurate evaluation for your test using AI with 99.96% accuracy.<br />
            <Link to="/get-results">get the results instantly</Link>.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:justify-center lg:justify-start">
            <Link to="/loginsignup" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 w-full sm:w-auto text-center">
              Free test now
            </Link>
            <Link to="/loginsignup" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:ml-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 w-full sm:w-auto text-center">
              Full mock test
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={students} alt="hero image" className="mx-auto h-full w-full max-w-xl" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;



