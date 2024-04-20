import React from 'react';
import { Progress } from 'flowbite-react';
import '../css/progress.css';

const Progressbar = () => {
  const progressValue1 = 11; // Progress value from the database
  const progressValue2 = 94; // Progress value from the database
  const progressValue3 = 55; // Progress value from the database

  const containerStyle = {
   // Border for the containing div
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow
    padding: '8px', // Padding
  };

  return (
    <div className="flex mr-2 md:mr-0 flex-col w-full" style={containerStyle}>
      <Progress
        progress={progressValue1}
        progressLabelPosition="inside"
        textLabel={<span className="label-text">Guide to 8+ Band ({progressValue1}%)</span>}
        textLabelPosition="outside"
        color="green"
        size="md"
        labelProgress={false}
        labelText
      />
      <Progress
        progress={progressValue2}
        progressLabelPosition="inside"
        textLabel={<span className="label-text">Guide to 7+ Band ({progressValue2}%)</span>}
        textLabelPosition="outside"
        color="blue"
        size="md"
        labelProgress={false}
        labelText
      />
      <Progress
        progress={progressValue3}
        progressLabelPosition="inside"
        textLabel={<span className="label-text">Writing 7+ ({progressValue3}%)</span>}
        textLabelPosition="outside"
        color="yellow"
        size="md"
        labelProgress={false}
        labelText
      />
    </div>
  );
};

export default Progressbar;
