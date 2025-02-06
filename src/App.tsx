import { ThemeProvider } from "@emotion/react"
import { dark } from "./Themes/dark"
import { Typography } from "@mui/material"
import { light } from "./Themes/light"
import { useSelector } from "react-redux"
import { RootState } from "./store/store"
import ThemeChanger from "./components/ThemeChanger"

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Typography variant="h1" color="primary" bgcolor="Highlight">Hello World</Typography>
      <ThemeChanger />
    </ThemeProvider>
  )
}

export default App
