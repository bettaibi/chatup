import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1DA57A',
        },
        secondary: {
            main: '#f0fdf4'
        },
        success: {
            main: '#1DA57A'
        }
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
                  backgroundColor: '#f8fafc',
                 
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
                    props: { variant: 'rounded'},
                    style: {
                        borderRadius: '18px'
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
                    props: { variant: 'rounded', color:  'inherit'},
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