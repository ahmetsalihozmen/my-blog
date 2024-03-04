import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light', // Set the mode to light
        orange: '#f56e0f',
        dark: '#262626',
        grey: {
            light: '#fbfbfb',
            main: '#e0e0e0',
            dark: '#1b1b1e',
        },
        background: {
            primary: 'linear-gradient(#fbfbfb , #e0e0e0)', // Adjusted light background gradient
            navbarGradient: 'linear-gradient(#e0e0e0 , #fbfbfb)', // Adjusted light navbar gradient
        },
        link: '#f56e0f', // Keeping the same link color
        text: '#262626', // Adjusted text color for better readability
    },
  
});

export default theme;