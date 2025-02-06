import { createTheme } from "@mui/material";

export const light = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0A192F", // Deep Navy Blue
        },
        secondary: {
            main: "#64FFDA", // Neon Cyan
        },
        background: {
            default: "#020C1B", // Dark Night Blue
            paper: "#020C1B", // Dark Night Blue
        },
        text: {
            primary: "#E6F1FF", // Light Sky Blue
            secondary: "#8892B0", // Soft Steel Blue
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#E6F1FF",
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 700,
            color: "#E6F1FF",
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#E6F1FF",
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#E6F1FF",
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#E6F1FF",
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 700,
            color: "#E6F1FF",
        },
        body1: {
            fontSize: "1rem",
            color: "#E6F1FF",
        },
        body2: {
            fontSize: "0.875rem",
            color: "#E6F1FF",
        },
        button: {
            textTransform: "none",
            color: "#E6F1FF",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: "none",
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: "#0A192F",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#020C1B",
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});