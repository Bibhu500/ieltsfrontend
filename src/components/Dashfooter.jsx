import { faComments, faPencilAlt, faHeadphones, faBookReader, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestButtons = () => {
  const tests = [
    { name: "Try IELTS Speaking", icon: faComments, class: "bg-blue-500", link: "speaking.html" },
    { name: "Try IELTS Writing", icon: faPencilAlt, class: "bg-green-500", link: "writing.html" },
    { name: "Try IELTS Listening", icon: faHeadphones, class: "bg-yellow-500", link: "listening.html" },
    { name: "Try IELTS Reading", icon: faBookReader, class: "bg-red-500", link: "reading.html" },
    { name: "Give Complete Test", icon: faClipboardList, class: "bg-purple-500", link: "completeTest.html" }
  ];

  return (
    <div className="container my-4 text-center mx-auto">
      <h2 className="text-xl font-bold mb-4">You are going great, enhance your skills and learning by practicing the actual tests now!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {tests.map((test, index) => (
          <div key={index} className="w-full sm:w-auto">
            <a href={test.link} className={`block p-4 rounded-lg text-white flex flex-col items-center justify-center ${test.class}`}>
              <FontAwesomeIcon icon={test.icon} className="text-3xl mb-2" />
              <span>{test.name}</span>
            </a>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TestButtons;
