import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib light-purple'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;
