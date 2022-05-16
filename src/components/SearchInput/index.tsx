import React from 'react';
import {
    SearchOutlined
} from '@mui/icons-material';
import InputField from '../InputField';
import { InputAdornment } from '@mui/material';
import debounce from "lodash.debounce";

const SearchInput = ({text, setText}: {text: string, setText: (text: string) => void}) => {

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        updateText(value);
    }

    const updateText = debounce((value)=> {
        setText(value);
    }, 300)

    return (
        <InputField className="rounded" type="search" placeholder="Search Contacts" startAdornment={
            <InputAdornment position="start">
                <SearchOutlined />
            </InputAdornment>
        }
         value={text} onChange={handleChange}
        />
    )
}

export default SearchInput;