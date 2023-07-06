import React, { useState } from 'react';

export default function Dropdown(props) {
  /* État du dropdown */
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className="dropdown">
      <button
        className={isOpen ? 'dropdown-title-button' : 'dropdown-title-button-closed'}
        type="button"
        onClick={handleDropdown}
      >
        <div className={isOpen ? 'dropdown-title' : 'dropdown-title-closed'}>
          <h1 className="dropdown-title-text">{title}</h1>
          <i className={`fa-solid  ${isOpen ? 'fa-angle-up' : 'fa-angle-down'} dropdown-title-button-icon`} />
        </div>
      </button>

      <ul className={isOpen ? 'dropdown-list' : 'dropdown-list-closed'}>
        {elements.map((element) => (
          <li className="dropdown-list-item"><p className="dropdown-list-item-text">{element}</p></li>
        ))}
      </ul>
    </div>
  );
}
