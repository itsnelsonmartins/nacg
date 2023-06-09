import { useEffect, useContext } from 'react';
import { ContextApi } from './ContextApi';

import Nav from './components/nav.component';
import Display from './components/display.component';
import Code from './components/code.component';

function App() {
    // Get hsl State from ContextApi
    const { hsl } = useContext(ContextApi);
    const [hslValue, setHslValue] = hsl;
    const htmlEl = document.querySelector('html');

    // useEffect will randomize a color on load
    useEffect(() => {
        changeGlobalColor();
    }, []);

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

    return (
        <div className='App'>
            <Nav />
            <div className='columns' style={{ margin: '1rem' }}>
                <div className='column is-5'>
                    <Display />
                </div>
                <div className='column is-7'>
                    {hslValue && <Code value={hslValue} />}
                </div>
            </div>
        </div>
    );
}

export default App;
