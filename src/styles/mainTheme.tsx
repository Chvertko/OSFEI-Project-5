import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
    palette:{
        primary:{
            main: '#42a5f5'
        },
        secondary:{
            main: '#90caf9'
        },
        background:{
            paper:'#ffffff',
            default:'#42a5f5'
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontWeightLight: 300,
        fontWeightMedium: 500,
        fontWeightBold: 700,
      },
})