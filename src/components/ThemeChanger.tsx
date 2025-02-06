import { themeType } from '../types/types';
import Bulb from '../ui/Bulb';

function ThemeChanger() {
    const themeValues: themeType[] = ["light", "dark"];

    return (
        <>
            {themeValues.map((themeValue) => (
                <Bulb key={themeValue} theme={themeValue} />
            ))}
        </>
    )
}

export default ThemeChanger