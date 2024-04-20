import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  return (
    <section id="how-its-done" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            How It Works?
          </h2>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* How It Works Card 1 */}
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <span className="material-icons mb-2 text-5xl text-yellow-400 dark:text-purple-400">
              play_circle_filled
            </span>
            <h3 className="mb-4 text-2xl font-semibold">Start a Test</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Start any speaking, writing, listening, or reading test and follow the on-screen
              instructions. The testing interface is designed to be exactly like the real IELTS test.
            </p>
            <Link
              to="/loginsignup"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              Take a Free Test
            </Link>
          </div>
          {/* How It Works Card 2 */}
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <span className="material-icons mb-2 text-5xl text-orange-600 dark:text-purple-400">
              engineering
            </span>
            <h3 className="mb-4 text-2xl font-semibold">AI Checking</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Our AI algorithms check your answers for mistakes and grade your test. These algorithms
              are trained over actual IELTS exams and adhere to the IELTS band descriptors.
            </p>
          </div>
          {/* How It Works Card 3 */}
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <span className="material-icons mb-2 text-5xl text-green-600 dark:text-purple-400">
              emoji_events
            </span>
            <h3 className="mb-4 text-2xl font-semibold">Instant Result</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Accurate results and feedback are displayed to improve your score. Also, track all your
              completed tests on the dashboard and review them to improve your IELTS score. The
              dashboard graphs help you visualize your progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;