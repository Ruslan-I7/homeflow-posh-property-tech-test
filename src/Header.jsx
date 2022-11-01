import React from 'react'

import SearchBox from './SearchBox';


function Header( props ) {
  const { setProperties, savedProperties } = props

  return ( <header className="flex flex-col md:flex-row justify-between">
    <h1 className="text-8xl">
      Posh Properties
    </h1>

    <SearchBox
      setProperties={ setProperties }
      savedProperties={ savedProperties }
    />
  </header> );
}

export default Header;
