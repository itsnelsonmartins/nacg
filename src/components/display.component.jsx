import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import quotes from '../assets/quotes';

const Display = () => {
    const getRandomObject = (array) => {
        const randomObject = array[Math.floor(Math.random() * array.length)];
        return randomObject;
    };

    const [randomQuotes, setRandomQuotes] = useState(() => {
        const quoteOne = getRandomObject(quotes).quote;
        const quoteTwo = getRandomObject(quotes).quote;
        return { quoteOne, quoteTwo };
    });

    return (
        <div className='wrapper'>
            <div className='tile is-ancestor'>
                <div className='tile is-parent'>
                    <article className='tile is-child box surface1'>
                        <div>1</div>
                    </article>
                </div>
                <div className='tile is-parent'>
                    <article className='tile is-child box surface2'>
                        <div>2</div>
                    </article>
                </div>
            </div>
            <div className='tile is-ancestor'>
                <div className='tile is-parent'>
                    <article className='tile is-child box surface3'>
                        <div>3</div>
                    </article>
                </div>
                <div className='tile is-parent'>
                    <article className='tile is-child box surface4'>
                        <div>4</div>
                    </article>
                </div>
            </div>
            <div className='content'>
                <div className='level'>
                    <div className='level-item has-text-centered'>
                        <div className='brand'>
                            <p className='heading'>Brand Color</p>
                            <FontAwesomeIcon icon={faCircle} className='icon' />
                        </div>
                    </div>
                    <div className='level-item has-text-centered'>
                        <div className='textColor1'>
                            <p className='heading '>Text Color 1</p>
                            <FontAwesomeIcon icon={faCircle} className='icon' />
                        </div>
                    </div>
                    <div className='level-item has-text-centered'>
                        <div className='textColor2'>
                            <p className='heading '>Text Color 2</p>
                            <FontAwesomeIcon icon={faCircle} className='icon' />
                        </div>
                    </div>
                </div>
                <p className='textColor1'>{randomQuotes.quoteOne}</p>
                <hr />
                <p className='textColor2'>{randomQuotes.quoteTwo}</p>
            </div>
        </div>
    );
};

export default Display;
