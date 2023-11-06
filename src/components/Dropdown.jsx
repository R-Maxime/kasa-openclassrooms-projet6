import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/Dropdown.scss';

function Dropdown({ items, itemType }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = () => {
    setIsOpen(false);
  };

  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        <span>{itemType}</span>
        <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
      </div>
      {isOpen && (
        <div className='dropdown-list'>
          {items.map((item, index) => (
            <div
              key={index}
              className='dropdown-list-item'
              onClick={() => selectItem()}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  itemType: PropTypes.string.isRequired
};