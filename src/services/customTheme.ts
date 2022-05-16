import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#4ab794',
            light: '#f8fafc'
        },
        secondary: {
            main: '#64748B'
        },
        success: {
            main: '#1DA57A'
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 992,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    width: '100%',
                    fontSize: '.9rem',
                    lineHeight: 1.5,
                    color: '#495057',
                },
                root: {
                    color: '#495057',
                    backgroundColor: '#fff',
                    backgroundClip: 'padding-box',
                    border: '1px solid #ced4da',
                    borderRadius: '0.25rem',
                    padding: ' 0.25rem 0.5rem',
                    transition: " all .15s ease-in-out",
                    boxShadow: 'none', 

                    "&.Mui-focused": {
                        borderColor: '#1DA57A',
                        boxShadow: '0 0 0 0.2rem rgb(29 165 122 / 25%)',
                    },

                    "&.Mui-error": {
                        borderColor: '#d32f2f',
                        boxShadow: '0 0 0 0.2rem rgb(244 67 54 / 25%)',
                    },

                    "&.rounded": {
                        borderRadius: '20px',
                    }
                    
                },
            }
        },
MuiDialog: {
    styleOverrides: {
        paper: {
            borderRadius: '18px'
        },
        paperFullScreen: {
            borderRadius: '0px'
        }
    }
},
MuiButton: {
    variants: [
        {
            props: { variant: 'rounded' },
            style: {
                borderRadius: '100px'
            },
        },
        {
            props: { variant: 'rounded', color: 'primary' },
            style: {
                backgroundColor: '#1DA57A',
                color: '#FFFFFF',
                '&:hover': {
                    backgroundColor: '#1DA57A',
                }
            },
        },
        {
            props: { variant: 'rounded', color: 'secondary' },
            style: {
                border: '1px solid #bdbdbd',
                color: '#64748B',
                '&:hover': {
                    backgroundColor: 'rgba(#64748B, 0.5)',
                }
            },
        },
        {
            props: { variant: 'rounded', color: 'inherit' },
            style: {
                backgroundColor: '#FFFFFF',
                color: '#444',
                '&:hover': {
                    color: '#1DA57A',
                    backgroundColor: '#FFFFFF',
                }
            },
        }
    ],
        },
    },
});

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        rounded: true;
    }
}