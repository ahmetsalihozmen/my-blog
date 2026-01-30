import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#e8a54b',
            light: '#f5c77a',
            dark: '#c4872e',
        },
        secondary: {
            main: '#a1a1aa',
        },
        background: {
            default: '#0d0d0f',
            paper: '#1a1a1f',
            elevated: '#1f1f26',
            card: '#1f1f26',
        },
        text: {
            primary: '#f5f5f7',
            secondary: '#a1a1aa',
            muted: '#71717a',
        },
        accent: '#e8a54b',
        accentLight: '#f5c77a',
        accentDark: '#c4872e',
        border: 'rgba(255, 255, 255, 0.08)',
        borderHover: 'rgba(255, 255, 255, 0.15)',
    },
    typography: {
        fontFamily: "'Sora', -apple-system, BlinkMacSystemFont, sans-serif",
        h1: {
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            letterSpacing: '-0.02em',
        },
        h3: {
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            letterSpacing: '-0.02em',
        },
        h4: {
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 500,
        },
        h5: {
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 500,
        },
        h6: {
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 500,
        },
        body1: {
            lineHeight: 1.8,
        },
        body2: {
            lineHeight: 1.7,
            color: '#a1a1aa',
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#0d0d0f',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 500,
                    borderRadius: 9999,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: '#1a1a1f',
                },
            },
        },
    },
});

export default theme;
