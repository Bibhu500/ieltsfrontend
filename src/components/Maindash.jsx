
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { BiBookReader, BiMoney, BiDollarCircle } from "react-icons/bi";
import { RiFeedbackLine, RiContactsLine } from "react-icons/ri";
import CardContainer from "./CardContainer";
import Guaranteed from "./Guaranteed"; // Import the GuaranteedCourses component
import logo1 from '../images/logo1.svg';

const Maindash = () => {
  const menus = [
    { name: "dashboard", link: "/maindash", icon: MdDashboard },
    { name: "Guaranteed Courses", icon: BiBookReader },
    { name: "Scholarship", link: "/", icon: BiMoney },
    { name: "Pricing", link: "/", icon: BiDollarCircle },
    { name: "Feedback", link: "/", icon: RiFeedbackLine },
    { name: "Contact Us", link: "/", icon: RiContactsLine },
  ];

  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full flex justify-between items-center bg-[#0e0e0e] px-3 py-1">
        <div className="flex items-center">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer mr-4"
            onClick={() => setOpen(!open)}
          />
          <Link to='/'>
            <a className="flex">
              <img
                src={logo1}
                className="h-8 mr-3"
                alt="Logo"
              />
              <span className="self-center text-lg font-semibold text-white">
              {import.meta.env.VITE_APP_NAME}
              </span>
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded="false"
            data-dropdown-toggle="dropdown-user"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </button>
          <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
            <div className="px-4 py-3" role="none">
              <p className="text-sm text-gray-900 dark:text-white" role="none">
                Neil Sims
              </p>
              <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                neil.sims@flowbite.com
              </p>
            </div>
            <ul className="py-1" role="none">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          {/* User dropdown menu here */}
        </div>
      </header>

      <section className={`flex mt-14 ${open ? "ml-0" : "ml-0"}`}>
        <div
          className={`bg-[#0e0e0e] min-h-screen fixed ${open ? "w-64" : "w-14"} duration-500 text-gray-100 px-3 pt-16`}
        >
          <div className="mt-2 flex flex-col gap-4">
            {menus?.map((menu, i) => (
              <React.Fragment key={i}>
                {open && i === 0 && <h2 className="text-xs text-left text-gray-400 font-semibold mb-2">CORE</h2>}
                {open && i === 1 && <h2 className="text-xs text-left text-gray-400 font-semibold mb-2">LEARNINGS</h2>}
                {open && i === 2 && <h2 className="text-xs text-left text-gray-400 font-semibold mb-2">OTHERS</h2>}
                <Link
                  to={menu?.link}
                  onClick={() => handleMenuClick(i)}
                  className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                >
                  <div>{React.createElement(menu.icon, { size: "20" })}</div>
                  <h2
                    style={{ transitionDelay: `${i + 3}00ms` }}
                    className={`duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
                  >
                    {menu.name}
                  </h2>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div id="main" className={`w-full ${open ? "ml-52" : "ml-0"} mt-2 pt-0`}>
          {/* Conditionally render the component based on the selected menu */}
          {selectedMenu === 1 ? <Guaranteed/> : <CardContainer />}
        </div>
      </section>
    </>
  );
};

export default Maindash;
