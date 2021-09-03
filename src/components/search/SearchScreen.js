import React, { useMemo } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';



export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q='' } = queryString.parse(location.search);

    const [formValues, handleInputChange ] = useForm({
        searchText:q
    });
    
    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getHeroByName( q ), [q]) ;
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4> Search Form</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name='searchText'
                            autoComplete='off'
                            value={ searchText }
                            onChange = { handleInputChange }
                        />

                        <button
                            className="btn m-1 btn btn-outline-primary"
                            type="submit"
                            onClick = { handleSearch }
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h4> Result </h4>
                    <hr />

                    {
                        (q==='')
                            &&
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    {
                        (q !=='' && heroesFiltered.length === 0)
                            &&
                            <div className="alert alert-danger">
                                There is no a hero with {q}
                            </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
