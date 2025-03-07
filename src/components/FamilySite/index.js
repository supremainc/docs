import React, { useState, useRef, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const dropdownRef = useRef(null);

  const links = [
    { name: 'OEM FINGERPRINT MODULES', url: `https://www.suprema.co.kr/embedded-modules/${currentLocale}/main.asp` },
    { name: 'SUPREMA AI', url: `https://www.suprema.ai/${currentLocale}`},
    { name: 'MOCA SYSTEM', url: 'https://www.airfob.com/' },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-button"
        >
          FAMILY SITE {isOpen ? '—' : '+'}
        </button>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {links.map((link, index) => (
              <li key={index} className="dropdown-item">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;