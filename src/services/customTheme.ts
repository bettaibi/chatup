import { createTheme } from "@mui/material";
import { palette } from "@mui/system";

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
    components: {
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