import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Search(props) {
    let {value, setvalue, handleSearchSubmit} = props
    const location = useLocation();

    const searchpath = location.pathname === '/';

    return searchpath ? (
        <>
            <div className="container">
                <div className="input-group">
                    <input type="search" onChange={e => setvalue(e.target.value)} value={value} className="form-control rounded" style={{
                        color: props.mode === 'dark' ? 'white' : 'black',
                        backgroundColor: props.mode === 'dark' ? '#212529' : 'white'
                    }} placeholder="Search City or Country" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-primary" onClick={handleSearchSubmit}>Search</button>
                </div>
            </div>

        </>
    ) : null;
}
