import React from 'react';
import SearchBar from '@theme/SearchBar';
import NavbarSearch from '@theme/Navbar/Search';
import SearchPop from '@theme/SearchPop';
export default function SearchNavbarItem({mobile, className}) {
  if (mobile) {
    return null;
  }
  return (
    <NavbarSearch className={className}>
      <SearchPop />
    </NavbarSearch>
  );
}
