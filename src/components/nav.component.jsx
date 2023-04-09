import { useContext } from 'react';
import { ContextApi } from '../ContextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    // Get  hsl and theme state from ContextApi
    const { hsl, theme } = useContext(ContextApi);
    const [hslValue, setHslValue] = hsl;
    const [themeValue, setThemeValue] = theme;
    const htmlEl = document.querySelector('html');

    // getRandomHSL will generate a random HSL
    const getRandomHSL = () => {
        const rand = (min, max) =>
            parseInt(Math.random() * (max - min + 1), 10) + min;

        const h = rand(1, 360);
        const s = rand(0, 100);
        const l = rand(0, 100);
        return { h, s, l };
    };

    // Call getRandomHSL and assign the random H, S and L values to the properties and update State
    const changeGlobalColor = () => {
        const values = getRandomHSL();
        htmlEl.style.setProperty('--brand-hue', values.h);
        htmlEl.style.setProperty('--brand-saturation', `${values.s}%`);
        htmlEl.style.setProperty('--brand-lightness', `${values.l}%`);
        setHslValue({ h: values.h, s: values.s, l: values.l });
    };

    // ThemeChanger function to change between dar and light mode
    const themeChanger = () => {
        if (themeValue === 'light') {
            document.firstElementChild.setAttribute('color-scheme', 'dark');
            setThemeValue('dark');
        } else {
            document.firstElementChild.setAttribute('color-scheme', 'light');
            setThemeValue('light');
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
    };

    const inputColor = (event) => {
        //get user Value
        const inputValue = event.target.value;

        //regex pattern that only allows 3 in HSL format 0-360,0-100,0-100
        const regexPattern =
            /^(0*(?:[0-9]|[1-9][0-9]|[1-2][0-9]{2}|3[0-5][0-9]|360))\,(0*(?:[0-9]|[1-9][0-9]|100))\,(0*(?:[0-9]|[1-9][0-9]|100))$/;
        const isValidInput = regexPattern.test(inputValue);

        if (isValidInput) {
            const numbers = inputValue.split(',');
            //if true, split the input with commas and set State and change the layout color
            htmlEl.style.setProperty('--brand-hue', numbers[0]);
            htmlEl.style.setProperty('--brand-saturation', `${numbers[1]}%`);
            htmlEl.style.setProperty('--brand-lightness', `${numbers[2]}%`);
            setHslValue({ h: numbers[0], s: numbers[1], l: numbers[2] });
        }
    };

    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <div className='logo navbar-item'>
                    <span>Not</span>
                    <span>Another</span>
                    <span>Color</span>
                    <span>Generator</span>
                </div>
            </div>
            <div className='navbar-item'>
                <form
                    action=''
                    className='inputColorForm'
                    onSubmit={submitHandler}>
                    <input
                        type='text'
                        name='inputColor'
                        onChange={inputColor}
                        placeholder='180,50,50'
                    />
                </form>
            </div>
            <div className='navbar-end'>
                <div className='navbar-item'>
                    <FontAwesomeIcon
                        icon={faCircleHalfStroke}
                        className='button icon'
                        onClick={themeChanger}
                    />
                </div>
                <div className='navbar-item'>
                    <FontAwesomeIcon
                        icon={faArrowRotateRight}
                        className='button icon'
                        onClick={changeGlobalColor}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
