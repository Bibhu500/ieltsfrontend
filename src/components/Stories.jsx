import React from 'react';
import { Avatar } from 'flowbite-react';
import logo1 from '../images/story.png';

const Stories = () => {
  const storyStyle = {
    border: '2px solid red', // Set border style for each story
    width: '65px', // Adjust width
    height: '65px', // Adjust height
    borderRadius: '50%', // Make the stories round
    overflow: 'hidden', // Ensure content is contained within the border
  };

  const containerStyle = {
     // Border for the div containing the stories
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow
    padding: '8px', // Add padding
  };

  return (
    <div className="flex overflow-x-auto mr-2 md:mr-0 lg:mx-2 gap-4" style={containerStyle}>
      <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
        <Avatar img={logo1} size="lg" status="online" style={storyStyle} />
        <span>Scholarship</span> {/* Name */}
      </div>
      <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
        <Avatar img={logo1} size="lg" rounded status="busy" statusPosition="top-right" style={storyStyle} />
        <span>Update</span> {/* Name */}
      </div>
      <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
        <Avatar img={logo1} size="lg" status="offline" statusPosition="bottom-left" style={storyStyle} />
        <span>SOTY</span> {/* Name */}
      </div>
      <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
        <Avatar img={logo1} size="lg" rounded status="away" statusPosition="bottom-right" style={storyStyle} />
        <span>Offer</span> {/* Name */}
      </div>
      <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
        <Avatar img={logo1} size="lg" status="offline" statusPosition="bottom-left" style={storyStyle} />
        <span>Refferral</span> {/* Name */}
      </div>
      <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
        <Avatar img={logo1} size="lg" rounded status="away" statusPosition="bottom-right" style={storyStyle} />
        <span>New!</span> {/* Name */}
      </div>
      {/* Add more Avatar components here if needed */}
    </div>
  );
};

export default Stories;
