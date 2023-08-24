import React, { useState } from 'react';
// import Accounts from '../../../Data/Accounts';

const SearchBox = ({ selectAccount, accounts }) => {
    const [filteredAccount, setFilteredAccount] = useState([]);

    const onChange = (event) => {
        const acc = accounts.filter((account) => {
            return account.accountNumber.includes(event.target.value)
        });
        setFilteredAccount(event.target.value.length > 0 ? acc : [])
    }

    const onSearch = () =>{
        selectAccount(...filteredAccount)
    }
    
    return (
        <>
            <input placeholder="input search text" onChange={onChange}/>
            <button type="submit" onClick={onSearch}>Search</button>
            {filteredAccount.length ? 
                <h2>{filteredAccount[0].accountNumber}</h2> : <div></div>
            }
        </>
    )
}
export default SearchBox;