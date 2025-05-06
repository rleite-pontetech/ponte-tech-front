import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Sora, sans-serif',
    },
    palette: {
        primary: {
          main: '#8270FF',
        },
        secondary: {
          main: '#4B4B4B', 
        },
        background: {
          default: '#6B6B6B',
        },
    },
})

export default theme;