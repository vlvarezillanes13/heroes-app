import React from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroeByPublisher'

export const HeroList = ({ publisher }) => {

    const heroes = getHeroByPublisher( publisher );

    return (
        <div className='card-columns'>
            {
                heroes.map( hero => (
                    <li
                        key={hero.id}
                    >
                        {hero.superhero}
                    </li>
                ))
            }
        </div>
    )
}
