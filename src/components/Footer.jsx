import React from 'react';
import { FaComments, FaPencilAlt, FaHeadphones, FaBookReader, FaClipboardList } from 'react-icons/fa';

const Footer = () => {
    const tests = [
        { name: "Try IELTS Speaking", icon: FaComments, class: "bg-blue-500", link: "speaking.html" },
        { name: "Try IELTS Writing", icon: FaPencilAlt, class: "bg-green-500", link: "writing.html" },
        { name: "Try IELTS Listening", icon: FaHeadphones, class: "bg-yellow-500", link: "listening.html" },
        { name: "Try IELTS Reading", icon: FaBookReader, class: "bg-red-500", link: "reading.html" },
        { name: "Give Complete Test", icon: FaClipboardList, class: "bg-purple-500", link: "completeTest.html" }
    ];

    return (
        <div className="container border-t-4 border-slate-500 px-4 mx-auto">
            <div className="my-4 text-center">
                <h2 className="text-xl font-semibold mb-4">You are going great, enhance your skills and learning by practicing the actual tests now!</h2>
                <div className="flex flex-wrap justify-center">
                    {tests.map((test, index) => (
                        <div key={index} className={`p-1 ${index < 3 ? 'w-1/3' : 'w-1/2'} md:w-1/2 w-full`}>
                            <a href={test.link} className="inline-block w-full">
                                <button type="button" className={`w-full py-2 ${test.class} text-white rounded-lg shadow text-sm focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out`}>
                                    <test.icon className="mx-auto text-2xl mb-1" />
                                    <div>{test.name}</div>
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
