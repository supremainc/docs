import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n: { currentLocale } } = useDocusaurusContext();

  const links = [
    { name: 'OEM FINGERPRINT MODULES', url: `https://www.suprema.co.kr/embedded-modules/${currentLocale}/main.asp` },
    { name: 'SUPREMA AI', url: `https://www.suprema.ai/${currentLocale}`},
    { name: 'MOCA SYSTEM', url: 'https://www.airfob.com/' },
  ];

  return (
    <div className="dropdown">
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