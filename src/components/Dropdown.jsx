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

  return (
    <div className="dropdown">
      <div className="dropdown-title">
        <h1 className="dropdown-title-text">{title}</h1>
        <i className="fa-sharp fa-solid fa-angle-up dropdown-title-button" />
      </div>

      <ul className="dropdown-list">
        {elements.map((element) => (
          <li className="dropdown-list-item"><p className="dropdown-list-item-text">{element}</p></li>
        ))}
      </ul>
    </div>
  );
}
