import React, { useState } from 'react';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchInput);

    };

    return (
        <section className="bg-light">
            <div className="row p-4">
                <h5 className="fw-bold">Search Client Details</h5>

                <form className="g-3" onSubmit={handleSubmit}>
                    <div className="row">
                        <label htmlFor="clientSearchInput" className="form-label">
                            <span className="text-danger"> * </span> Search By Client No
                        </label>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-3">
                            <input
                                type="text"
                                className="form-control"
                                id="clientSearchInput"
                                value={searchInput}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SearchBar;
