import React, { useState, useEffect } from 'react';
import { Navbar, Sidebar, Avatar, Dropdown, Button, Modal } from 'flowbite-react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BiTestTube } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { BiBookReader, BiMoney, BiDollarCircle } from 'react-icons/bi';
import { RiFeedbackLine, RiContactsLine } from 'react-icons/ri';
import { FaBookOpen } from 'react-icons/fa'; // Updated import for vocabulary list icon

import CardContainer from '../components/CardContainer';
import Guaranteed from '../components/Guaranteed';

import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import SpeechToText from '../components/SpeechToText';
import Listening from '../components/Listening';
import Reading from '../components/Reading';
import Writing1 from '../components/Writing1';
import Writing2 from '../components/Writing2';
import ScholarshipComponent from '../components/ScholarshipComponent';
import PricingPage from '../components/PricingPage';
import FeedbackForm from '../components/FeedbackForm';
import ContactUsForm from '../components/ContactUsForm';

import WritingPage from '../components/Writing';
import IELTSReadingTest from '../components/Reading2';
import VocabularyBuilder from '../components/VocabularyBuilder'; // Added import for VocabularyList component

import logo1 from '../images/logo1.svg';
import axios from "axios";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { RiCloseLine } from 'react-icons/ri';

const Homepage = () => {
  const menus = [
    { name: 'Dashboard', icon: MdDashboard },
    { name: 'Learning Courses', icon: BiBookReader },
    { name: 'Vocabulary List', icon: FaBookOpen }, // Updated icon for vocabulary list
    { name: 'Test', icon: BiTestTube },
    { name: 'Listening',  parentMenu: 'Test' },
    { name: 'Speaking', parentMenu: 'Test' },
    { name: 'Writing', parentMenu: 'Test' },
    { name: 'Reading', parentMenu: 'Test' },
    { name: 'Full Mock Test', parentMenu: 'Test' },
    { name: 'Scholarship', icon: BiMoney },
    { name: 'Pricing', icon: BiDollarCircle },
    { name: 'Feedback', icon: RiFeedbackLine },
    { name: 'Contact Us', icon: RiContactsLine },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [profile, setProfile] = useState({});
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSignout = async () => {
    try {
      // 1. Clear the tokens from local storage
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
  
      // 2. Sign out the user from Firebase
      await auth.signOut();
  
      // 3. Navigate the user to the login page
      navigate('/loginsignup');
    } catch (error) {
      console.error('Signout error:', error);
    }
  };
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const toggleNotificationModal = () => {
    setShowNotificationModal(!showNotificationModal);
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/notification', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });        
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/profile/get-profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });        
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
  
    fetchNotifications();
    fetchProfile();
  }, []);

  const handleNotificationAction = async (notification, action) => {
    try {
      const token = localStorage.getItem('token');
      console.log(notification, action);
      const data = {
        "notification_id": notification._id,
        "result_id": notification.result_id,
        "sender_id": notification.sender_id,
        "message_type": notification.message_type,
        "result_link": notification.result_link
      }
      console.log(data);
      let url = "http://localhost:5000/api/notification/"
      if(action === "accepted"){
        url = url + "acceptRequest";
      }else{
        url = url + "rejectRequest";
      }
      const response = await axios.post(
        url,
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const notificationId = notification._id;
      console.log(`Notification ${action} successfully.`);
      // Optionally, you can update the notifications state to reflect the change
      setNotifications(prevNotifications =>
        prevNotifications.filter(notification =>
          notification._id !== notificationId
        )
      );
    } catch (error) {
      console.error(`Error ${action}ing notification ${notificationId}:`, error);
    }
  };

  const handleNotificationDelete = async (notificationId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`http://localhost:5000/api/notification/delete`, {_id: notificationId} ,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Notification deleted successfully.');
      // Update the notifications state to remove the deleted notification
      setNotifications(prevNotifications =>
        prevNotifications.filter(notification => notification._id !== notificationId)
      );
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
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
              <span className="block text-sm">{profile.name}</span>
              <span className="block truncate text-sm font-medium">{profile.email}</span>
            </Dropdown.Header>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
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
          <Navbar.Link onClick={toggleNotificationModal}>
            <span className="relative inline-block">
              <NotificationsIcon />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {notifications.length}
                </span>
              )}
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="flex flex-row text-xs flex-1 overflow-hidden mt-14">
        <Sidebar aria-label="Sidebar with multi-level dropdown example" collapsed={!isSidebarOpen}>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {menus?.map((menu, i) => (
                <React.Fragment key={i}>
                  {menu.parentMenu ? null : (
                    <Sidebar.Item
                      href={menu?.link}
                      icon={menu.icon}
                      onClick={() => handleMenuClick(i)}
                    >
                      {menu.name}
                    </Sidebar.Item>
                  )}
                  {menu.parentMenu === 'Test' && (
                    <Sidebar.Item
                      href={menu?.link}
                      onClick={() => handleMenuClick(i)}
                      className="ml-4"
                    >
                      {menu.name}
                    </Sidebar.Item>
                  )}
                </React.Fragment>
              ))}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>

        <main className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
          {selectedMenu === 0 && <CardContainer/>}
          {selectedMenu === 1 && <Guaranteed/>}
          {selectedMenu === 2 && <VocabularyBuilder />}
          {selectedMenu === 4 && <Listening />}
          {selectedMenu === 5 && <SpeechToText />}
          {selectedMenu === 6 && <WritingPage />}
          {selectedMenu === 7 && <IELTSReadingTest />}
          {selectedMenu === 8 && <Writing2 />}
          {selectedMenu === 9 && <ScholarshipComponent />}
          {selectedMenu === 10 && <PricingPage />}
          {selectedMenu === 11 && <FeedbackForm />}
          {selectedMenu === 12 && <ContactUsForm />}
        </main>
      </div>

      <Button onClick={toggleSidebar} className="fixed bottom-4 left-2">
        <HiMenuAlt3 size={12} />
      </Button>

      <Modal show={showNotificationModal} onClose={toggleNotificationModal}>
      <Modal.Header>Notifications</Modal.Header>
      <Modal.Body>
        {notifications.length > 0 ? (
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg flex items-center justify-between">
                {notification.status === 'accepted' && (
                  <div className="flex items-center">
                    <p>
                      {notification.sender_name} accepted your request to edit{' '}
                      <a href={notification.result_link} target="_blank" rel="noopener noreferrer">
                        result
                      </a>
                    </p>
                    <button
                      className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={() => handleNotificationDelete(notification._id)}
                    >
                      <RiCloseLine size={20} />
                    </button>
                  </div>
                )}
                {notification.status === 'requested' && (
                  <>
                    <p>
                      {notification.sender_name} requested to edit the{' '}
                      <a href={notification.result_link} target="_blank" rel="noopener noreferrer">
                        test
                      </a>
                    </p>
                    <div className="flex">
                      <Button
                        color="success"
                        style={{ margin: '0 .2rem' }}
                        onClick={() => handleNotificationAction(notification, 'accepted')}
                      >
                        Approve
                      </Button>
                      <Button color="failure" onClick={() => handleNotificationAction(notification, 'rejected')}>
                        Reject
                      </Button>
                    </div>
                  </>
                )}
                {notification.status === 'rejected' && (
                  <div className="flex items-center">
                    <p>
                      {notification.sender_name} rejected your request to edit the{' '}
                      <a href={notification.result_link} target="_blank" rel="noopener noreferrer">
                        result
                      </a>
                    </p>
                    <button
                      className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={() => handleNotificationDelete(notification._id)}
                    >
                      <RiCloseLine size={20} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No notifications found.</p>
        )}
      </Modal.Body>
    </Modal>

    </div>
  );
};

export default Homepage;