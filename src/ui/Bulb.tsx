import { Lightbulb, WbIncandescent } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { themeType } from "../types/types";
import { setDarkTheme, setIdleTheme, setLightTheme } from '../store/themeSlice';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

type themeChangerProps = {
    theme: themeType;
};

function Bulb({ theme }: themeChangerProps) {
    const status = useSelector((state: RootState) => state.theme.status);
    const currentTheme = useSelector((state: RootState) => state.theme.theme);
    const dispatch = useDispatch();
    console.log(currentTheme);
    console.log(status);
    const changeTheme = () => {
        if (theme === currentTheme) {
            dispatch(setIdleTheme())
            dispatch(setLightTheme())
        }
        else if (theme === 'light') {
            dispatch(setLightTheme());
        } else {
            dispatch(setDarkTheme())
        }
    };

    return (
        <IconButton onClick={changeTheme}>
            {theme === currentTheme && status === 'active' ? (
                <WbIncandescent color="secondary" />
            ) : (
                <Lightbulb color="primary" sx={{ transform: "rotate(180deg)" }} />
            )}
        </IconButton>
    );
}

export default Bulb;