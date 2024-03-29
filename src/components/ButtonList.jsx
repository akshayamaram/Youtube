import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const buttonNames = [
    "All",
    "Javascript",
    "Music",
    "Data Structures",
    "Website",
    "News",
    "Gaming",
    "Live",
    "Mixes",
    "Git",
    "AI",
    "Server",
    "Electronics",
  ];

  return (
    <div className="buttonList">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
}

export default ButtonList
