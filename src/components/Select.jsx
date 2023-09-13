import React, { useState } from 'react';

function Select() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Redirect based on selected option
    if (selectedValue === 'option1') {
      window.location.href = 'http://trader.jettradefx.in'; // Replace with your URL
    } else if (selectedValue === 'option2') {
      window.location.href = 'http://business.jettradefx.in'; // Replace with your URL
    }else if (selectedValue === 'option3') {
        window.location.href = 'http://admin.jettradefx.in'; // Replace with your URL
      }
  };

  return (
    <div className="relative inline-flex">
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="bg-transparent border border-gray-300 rounded-md py-2 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 w-[150px] cursor-pointer"
      >
        <option value="" disabled hidden>Login / Signup</option>
        <option value="option1" className="bg-primary hover:bg-gray-200 cursor-pointer">TraderReferral Portal</option>
        <option value="option2" className="bg-primary hover:bg-gray-200 cursor-pointer">BusinessPortal</option>
        <option value="option3" className="bg-primary hover:bg-gray-200 cursor-pointer">Manager Portal</option>
      </select>
    </div>
  );
}

export default Select;
