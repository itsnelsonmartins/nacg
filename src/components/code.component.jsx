import { useContext } from 'react';
import { ContextApi } from '../ContextApi';

const Code = ({ value }) => {
    // HSL value is passed via props to Code component
    // Getting theme state from ContextApi component
    const { theme } = useContext(ContextApi);
    const [themeValue, setThemeValue] = theme;

    return (
        // Based on themeValue, dark or light, it will show the respective css using a ternary condition
        <pre className='wrapper textColor1'>
            <span className='tag is-dark is-pulled-right'>{themeValue}</span>
            {`
html {
    --brand-hue: ${value.h};
    --brand-saturation: ${value.s}%;
    --brand-lightness: ${value.l}%;`}
            {themeValue === 'dark' ? (
                <code>
                    {`

    --brand-dark: hsl(var(--brand-hue) calc(var(--brand-saturation) / 2) calc(var(--brand-lightness) / 1.5));
    --text1-dark: hsl(var(--brand-hue) 15% 85%);
    --text2-dark: hsl(var(--brand-hue) 5% 65%);
    --surface1-dark: hsl(var(--brand-hue) 10% 10%);
    --surface2-dark: hsl(var(--brand-hue) 10% 15%);
    --surface3-dark: hsl(var(--brand-hue) 5% 20%);
    --surface4-dark: hsl(var(--brand-hue) 5% 25%);
    --surface-shadow-dark: var(--brand-hue) 50% 3%;
    --shadow-strength-dark: 0.8;
}

:root {
    color-scheme: dark;
    --brand: var(--brand-dark);
    --text1: var(--text1-dark);
    --text2: var(--text2-dark);
    --surface1: var(--surface1-dark);
    --surface2: var(--surface2-dark);
    --surface3: var(--surface3-dark);
    --surface4: var(--surface4-dark);
    --surface-shadow: var(--surface-shadow-dark);
    --shadow-strength: var(--shadow-strength-dark);
}
`}
                </code>
            ) : (
                <code>
                    {`

    --brand-light: hsl(var(--brand-hue) var(--brand-saturation) var(--brand-lightness));
    --text1-light: hsl(var(--brand-hue) var(--brand-saturation) 10%);
    --text2-light: hsl(var(--brand-hue) 30% 30%);
    --surface1-light: hsl(var(--brand-hue) 25% 90%);
    --surface2-light: hsl(var(--brand-hue) 20% 99%);
    --surface3-light: hsl(var(--brand-hue) 20% 92%);
    --surface4-light: hsl(var(--brand-hue) 20% 85%);
    --surface-shadow-light: var(--brand-hue) 10% 20%;
    --shadow-strength-light: 0.02;
}

:root {
    color-scheme: light;
    --brand: var(--brand-light);
    --text1: var(--text1-light);
    --text2: var(--text2-light);
    --surface1: var(--surface1-light);
    --surface2: var(--surface2-light);
    --surface3: var(--surface3-light);
    --surface4: var(--surface4-light);
    --surface-shadow: var(--surface-shadow-light);
    --shadow-strength: var(--shadow-strength-light);
}
`}
                </code>
            )}
        </pre>
    );
};

export default Code;
