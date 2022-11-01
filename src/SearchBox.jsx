import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';


function SearchBox( { setProperties, savedProperties, } ) {
  const [ value, setValue ] = useState( '' );

  useEffect( () => {
    const filteredData = savedProperties.filter( ( proper ) => proper.short_description.includes( value ) )
    if ( value ) {
      setProperties( filteredData )
    }
  }, [ value ] )

  return (
    <div className="mt-5 relative">
      <input
        placeholder="Enter a search term"
        className="px-5 py-3 border-gray-400 border rounded w-full"
        value={ value }
        onChange={ ( { target } ) => setValue( target.value ) }
      />

      <FaSearch className="absolute top-3.5 right-3.5 text-gray-400" size={ 20 } />
    </div>
  );
};

export default SearchBox;
