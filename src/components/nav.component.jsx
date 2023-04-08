import { useContext } from 'react';
import { ContextApi } from '../ContextApi';

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
        <nav>
            <div className='logoSearchWrapper'>
                <div className='logo'>
                    <span>Not</span>
                    <span>Another</span>
                    <span>Color</span>
                    <span>Generator</span>
                </div>
                <form action='' className='inputColorForm'>
                    <input
                        type='text'
                        name=''
                        id=''
                        onChange={inputColor}
                        placeholder='223,100,33'
                    />
                </form>
            </div>
            <div className='btnWrapper'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    className='btn'
                    onClick={themeChanger}>
                    <path d='M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z' />
                </svg>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    className='btn'
                    onClick={changeGlobalColor}>
                    <path d='M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z' />
                </svg>
            </div>
        </nav>
    );
};

export default Nav;
