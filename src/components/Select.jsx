import React, { useState } from 'react';

function Select() {
  const [selectedOption, setSelectedOption] = useState('login');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;

    // Define the URLs for each option
    const urlMap = {
      option1: 'http://apps.jettradefx.in',
      option2: 'http://business.jettradefx.in',
      option3: 'http://admin.jettradefx.in',
    };

    // Get the URL based on the selected option
    const selectedURL = urlMap[selectedValue];

    if (selectedURL) {
      window.open(selectedURL, '_blank'); // Open the URL in a new tab
    }
  };

  return (
    <div className="relative inline-flex">
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="bg-transparent border border-gray-300 rounded-md py-2 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 w-[150px] cursor-pointer"
      >
        <option value="login" hidden>Login / Signup</option>
        <option value="option1" className="bg-primary hover:bg-gray-200 cursor-pointer">Apps Portal</option>
        <option value="option2" className="bg-primary hover:bg-gray-200 cursor-pointer">Business Portal</option>
      </select>
    </div>
  );
}

export default Select;
