import { Link } from "react-router-dom";

const LearningPlanSection = () => {
  return (
    <section id="learn" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-20 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Most Successfull<br /> and Tested Learning Plans
          </h2>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Card 1 */}
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <span className="material-icons mb-2 text-5xl text-green-600 dark:text-purple-400">
              category
            </span>
            <div className="mb-2">
              <span className="text-sm font-bold text-gray-500">10 Modules</span>
              <span className="mx-1 text-sm font-bold text-gray-500">|</span>
              <span className="text-sm font-bold text-gray-500">20 Lessons</span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold">Complete Guide to 8+ Band in IELTS</h2>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              If you're looking to score an 8 or higher on the IELTS, this is the best self-paced learning plan for you! In this complete guide, we'll go over all four sections of the IELTS (reading, writing, listening, and speaking) and give you tips and strategies for everything in detail. We'll also provide AI Practice tests and sample responses so you can see what an 8+ band looks like. the best part is, you can give as many tests as you want.
            </p>
            <div className="my-4">
              <h3 className="text-sm font-semibold mb-2">IDEAL FOR:</h3>
              <ul className="text-sm text-gray-500 list-none pl-0">
                <li>Students hoping to score an 8 or higher on the exam.</li>
                <li>Students with Beginner or Intermediate English.</li>
                <li>Students seeking to improve their General English.</li>
              </ul>
            </div>
            <div className="my-4">
              <h3 className="text-sm font-semibold mb-2">WHAT CAN I LEARN:</h3>
              <ul className="text-sm text-gray-500 list-none pl-0">
                <li>Strategy to get an extremely high score in IELTS.</li>
                <li>How to get 8 band in each module.</li>
                <li>What IELTS Examiners want from Speaking and Writing.</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/loginsignup"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              Start Learning
            </Link>
            <Link
              to="/loginsignup"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              Start Tracking your Progress
            </Link>
            </div>
            <div className="mt-4 text-sm font-semibold animated-text">
              TIME: 2 weeks
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <span className="material-icons mb-2 text-5xl text-green-600 dark:text-purple-400">
              category
            </span>
            <div className="mb-2">
              <span className="text-sm font-bold text-gray-500">10 Modules</span>
              <span className="mx-1 text-sm font-bold text-gray-500">|</span>
              <span className="text-sm font-bold text-gray-500">20 Lessons</span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold">Achieve Band 7 in Two Weeks</h2>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              If you're targetting a Band 7 in IELTS in only two weeks, this course is for you! This course is packed with tips, tricks, and strategies to help you achieve your goal. You will learn how to effectively prepare for all four sections of the IELTS exam and will get plenty of practice with real IELTS questions and our AI Testing System. By the end of the course, you will have the confidence and skills you need to achieve a band 7.
            </p>
            <div className="my-4">
              <h3 className="text-sm font-semibold mb-2">IDEAL FOR:</h3>
              <ul className="text-sm text-gray-500 list-none pl-0">
                <li>Students hoping to score a Band 7 in two weeks.</li>
                <li>Students with some prior knowledge of English.</li>
                <li>Students looking for an intensive preparation course.</li>
              </ul>
            </div>
            <div className="my-4">
              <h3 className="text-sm font-semibold mb-2">WHAT CAN I LEARN:</h3>
              <ul className="text-sm text-gray-500 list-none pl-0">
                <li>Effective strategies for quick IELTS preparation.</li>
                <li>Tips to boost your performance in each module.</li>
                <li>Practical insights into IELTS scoring criteria.</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/loginsignup"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              Start Learning
            </Link>
            <Link
              to="/loginsignup"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-purple-900"
            >
              Start Tracking your Progress
            </Link>
            </div>
            <div className="mt-4 text-sm font-semibold animated-text">
              TIME: 2 weeks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPlanSection;