import React, {useState} from 'react';

export const Search: React.FC<PropsType> = ({ filterPacks }) => {
    const [searchInput, setSearchInput] = useState('');

    const HandleInputValue = (event:any) => {
        setSearchInput(event.target.value);
        filterPacks(event.currentTarget.value);
    };

    return (
        <input
            value={searchInput}
            onChange={HandleInputValue}
            placeholder='Find'
        />
    );
};
type PropsType = {
    filterPacks:(filterValue: string)=>void
}