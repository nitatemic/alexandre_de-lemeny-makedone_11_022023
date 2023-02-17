import React, { useState } from 'react';

export default function Dropdown(props) {
  /* État du dropdown */
  const [isOpen, setIsOpen] = useState(true);
  const { title } = props;
  let elements;
  /* Si props.content est un tableau */
  if (Array.isArray(props.content)) {
    elements = props.content;
  } else {
    elements = [props.content];
  }

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownClasses = `dropdown-list ${!isOpen ? 'dropdown-list-closed' : ''}`;

  return (
    <div className="dropdown">
      <div className="dropdown-title">
        <h1 className="dropdown-title-text">{title}</h1>
        <button className="dropdown-title-button" type="button" onClick={handleDropdown}>
          <i className={`fa-solid  ${isOpen ? 'fa-angle-up' : 'fa-angle-down'} dropdown-title-button-icon`} />
        </button>

      </div>

      <ul className={dropdownClasses}>
        {elements.map((element) => (
          <li className="dropdown-list-item"><p className="dropdown-list-item-text">{element}</p></li>
        ))}
      </ul>
    </div>
  );
}
