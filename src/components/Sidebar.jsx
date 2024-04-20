import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import { HiMenuAlt3 } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { BiBookReader, BiMoney } from "react-icons/bi";
import { RiFeedbackLine, RiContactsLine } from "react-icons/ri";
import { BiDollarCircle } from "react-icons/bi";
import CardContainer from "./CardContainer";
import GuaranteedCourses from "./Guaranteed"; // Import the GuaranteedCourses component

const Sidebar = () => {
  const menus = [
    { name: "dashboard", link: "/homepage", icon: MdDashboard },
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
      <section className={`flex gap-0 ${open ? "mt-14" : "mt-14"}`}>
        <div
          className={`bg-[#0e0e0e] min-h-screen fixed ${open ? "w-64" : "w-14"} duration-500 text-gray-100 px-3`}
        >
          <div className="py-1 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-2 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <React.Fragment key={i}>
                {open && i === 0 && <h2 className="text-xs text-left text-gray-400 font-semibold mb-2">CORE</h2>}
                {open && i === 1 && <h2 className="text-xs text-left text-gray-400 font-semibold mb-2">LEARNINGS</h2>}
                {open && i === 2 && <h2 className="text-xs text-left text-gray-400 font-semibold mb-2">OTHERS</h2>}
                <Link
                  to={menu?.link}
                  onClick={() => handleMenuClick(i)}
                  className={` ${menu?.margin && "mt-5"
                    } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div id="main" className={`w-full ${open ? "ml-64" : ""} mt-2`}>
          {/* Conditionally render the component based on the selected menu */}
          {selectedMenu === 1 ? <GuaranteedCourses /> : <CardContainer />}
        </div>
      </section>
    </>
  );
};

export default Sidebar;
