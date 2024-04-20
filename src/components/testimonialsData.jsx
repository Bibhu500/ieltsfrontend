import { useState } from 'react';

const testimonialsData = [
  {
    quote: "IeltsAppeal is an incredible platform that has significantly boosted my IELTS preparation journey. The performance tracking feature helped me monitor my progress effectively, allowing me to focus on areas that needed improvement. The accuracy of the practice tests is commendable, providing an experience that closely simulates the actual exam.",
    author: "Neha Patel",
    position: "Student at NorthEastern",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neha-patel.png"
  },
  {
    quote: "I cannot recommend IeltsAppeal enough! As a working professional with limited time for preparation, I found the performance tracking feature immensely helpful in optimizing my study sessions. The accuracy of the practice tests is remarkable, providing an authentic exam-like experience. Thanks to IeltsAppeal, I was able to achieve my desired band score.",
    author: "James Miller",
    position: "Working Professional",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/james-miller.png"
  },
  {
    quote: "Using IeltsAppeal has been a game-changer for me. As a self-employed individual, I needed a platform that offered accurate practice tests and performance tracking features to fit my busy schedule. IeltsAppeal exceeded my expectations with its comprehensive study resources and precise assessment tools. It's undoubtedly the best investment I made for my IELTS preparation.",
    author: "Rajesh Singh",
    position: "Self-Employed",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/rajesh-singh.png"
  },
  {
    quote: "IeltsAppeal is simply phenomenal! The performance tracking feature helped me identify my strengths and weaknesses, enabling me to tailor my study plan accordingly. The accuracy of the practice tests is unmatched, providing a realistic exam environment. Thanks to IeltsAppeal, I was able to achieve a band score beyond my expectations.",
    author: "Emma Thompson",
    position: "Student",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/emma-thompson.png"
  }
];



function TestimonialsCarousel() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const testimonial = testimonialsData[currentTestimonialIndex];

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg>
          <blockquote>
            <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"{testimonial.quote}"</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">{testimonial.author}</div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{testimonial.position}</div>
            </div>
          </figcaption>
        </figure>
        <div className="mt-6">
          <button className="mx-2 py-2 px-4 bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-md" onClick={handlePrev}>Prev</button>
          <button className="mx-2 py-2 px-4 bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-md" onClick={handleNext}>Next</button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
