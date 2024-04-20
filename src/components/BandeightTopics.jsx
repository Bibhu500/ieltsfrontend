import React, { useState } from 'react';
import { Navbar, Sidebar, Avatar, Dropdown, Button } from 'flowbite-react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { BiBookReader, BiMoney, BiDollarCircle } from 'react-icons/bi';
import { RiFeedbackLine, RiContactsLine } from 'react-icons/ri';
import Band8topiccontainer from "./Band8topiccontainer";
import logo1 from '../images/logo1.svg';
import Footer from "./Footer";


const Homepage = () => {
  const menus = [
    { name: 'Dashboard', link: '/homepage', icon: MdDashboard },
    { name: 'Guaranteed Courses', icon: BiBookReader },
    { name: 'Scholarship', link: '/', icon: BiMoney },
    { name: 'Pricing', link: '/', icon: BiDollarCircle },
    { name: 'Feedback', link: '/', icon: RiFeedbackLine },
    { name: 'Contact Us', link: '/', icon: RiContactsLine },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar fluid={true} rounded={true} className="fixed top-0 left-0 right-0 z-10">
        <Navbar.Brand href="/">
          <img src={logo1} className="mr-3 h-6 sm:h-9" alt="ieltsappeal Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold">{import.meta.env.VITE_APP_NAME}</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avatar alt="User settings" img={logo1} rounded={true} />}
          >
            <Dropdown.Header>
              <span className="block text-sm">User Name</span>
              <span className="block truncate text-sm font-medium">user@example.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="flex flex-row flex-1 overflow-hidden mt-14">
        <Sidebar aria-label="Sidebar with multi-level dropdown example" collapsed={!isSidebarOpen}>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {menus?.map((menu, i) => (
                <Sidebar.Item
                  key={i}
                  href={menu?.link}
                  icon={menu.icon}
                  onClick={() => handleMenuClick(i)}
                >
                  {menu.name}
                </Sidebar.Item>
              ))}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
       
        <main className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
        <Band8topiccontainer/>
                  <Footer/>
        </main>
      </div>

      <Button onClick={toggleSidebar} className="fixed bottom-4 left-2">
        <HiMenuAlt3 size={18} />
      </Button>
    </div>
  );
};

export default Homepage; 


