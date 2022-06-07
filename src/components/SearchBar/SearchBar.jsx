import React, { useEffect, useState } from 'react';
import getImageVideoLibrary from '../../services/getImageVideoLibrary';
import getImageVideoPopular from '../../services/getImageVideoPopular';
import './SearchBar.css';

const dispatchSearchAction = ({ serviceCallback, onChangeSearch }) => {

    onChangeSearch({
        loading: true,
        assets: []
    });

    serviceCallback.then((data) => {
        onChangeSearch({
            loading: false,
            assets: data
        });
    });

}

export default function SearchBar({ onChangeSearch }) {

    const [ inputValue, setInputValue ] = useState('');

    useEffect(() => {

        const serviceCallback = getImageVideoPopular();

        dispatchSearchAction({ serviceCallback, onChangeSearch });

    }, []);

    const handleInputChange = (e) => {

        e.preventDefault();

        const search = inputValue;
        const page = '1';

        const serviceCallback = getImageVideoLibrary({ search, page });

        dispatchSearchAction({ serviceCallback, onChangeSearch });

    }

    return (
        <section className='search-bar-container'>
            <form className='search-bar-form' onSubmit={ handleInputChange }>
                <input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder='Search for ...(e.g. "Orion")' maxLength={50} />
                <button onClick={ handleInputChange }>
                    <img src='assets/search_icon.png' alt='Search Buton Icon' width={ 45 } />
                </button>
            </form>
        </section>
    );
}