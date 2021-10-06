import { createTheme } from '@mui/material/styles'

const arcBlue = "#0b72b9"
const arcOrange = "#FFBA60"

// Create a new instance of the default MUI theme.
// Then provide it an object where we override special them config variables, or add some new ones
const theme = createTheme({
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white",
        }
    }
})

export default theme
