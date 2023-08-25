import React, { useState } from 'react';

const SearchBox = ({ selectAccount, accounts }) => {
    const [filteredAccount, setFilteredAccount] = useState([]);

    const onChange = (event) => {
        const acc = accounts.filter((account) => {
            return account.accountNumber.includes(event.target.value)
        });
        setFilteredAccount(event.target.value.length > 0 ? acc : [])
    } // onChange on the input will filter the object account (props) set it to the acc variable.

    const onSearch = () =>{
        selectAccount(...filteredAccount)
    } // brings the object out of the list filteredAccount and runs the selectAccount function as its parameter when onClick is used. 
    
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
