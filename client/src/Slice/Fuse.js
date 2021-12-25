const Fuse = {
    settings: {
        initial: {
            customScrollbars: true,
            theme: {
                main: 'default',
                navbar: 'mainThemeDark',
                toolbar: 'mainThemeLight',
                footer: 'mainThemeDark'
            },
            layout: {
                style: 'layout1',
                config: {
                    mode: 'fullwidth',
                    scroll: 'content',
                    navbar: {
                        display: true,
                        folded: false,
                        position: 'left'
                    },
                    toolbar: {
                        display: true,
                        style: 'fixed',
                        position: 'below'
                    },
                    footer: {
                        display: true,
                        style: 'fixed',
                        position: 'below'
                    },
                    leftSidePanel: {
                        display: true
                    },
                    rightSidePanel: {
                        display: true
                    }
                }
            }
        },
        defaults: {
            customScrollbars: true,
            theme: {
                main: 'default',
                navbar: 'mainThemeDark',
                toolbar: 'mainThemeLight',
                footer: 'mainThemeDark'
            },
            layout: {
                style: 'layout1',
                config: {
                    mode: 'fullwidth',
                    scroll: 'content',
                    navbar: {
                        display: true,
                        folded: false,
                        position: 'left'
                    },
                    toolbar: {
                        display: true,
                        style: 'fixed',
                        position: 'below'
                    },
                    footer: {
                        display: true,
                        style: 'fixed',
                        position: 'below'
                    },
                    leftSidePanel: {
                        display: true
                    },
                    rightSidePanel: {
                        display: true
                    }
                }
            }
        },
        current: {
            customScrollbars: true,
            theme: {
                main: 'default',
                navbar: 'mainThemeDark',
                toolbar: 'mainThemeLight',
                footer: 'mainThemeDark'
            },
            layout: {
                style: 'layout1',
                config: {
                    mode: 'fullwidth',
                    scroll: 'content',
                    navbar: {
                        display: true,
                        folded: false,
                        position: 'left'
                    },
                    toolbar: {
                        display: true,
                        style: 'fixed',
                        position: 'below'
                    },
                    footer: {
                        display: true,
                        style: 'fixed',
                        position: 'below'
                    },
                    leftSidePanel: {
                        display: true
                    },
                    rightSidePanel: {
                        display: true
                    }
                }
            }
        },
        themes: {
            'default': {
                breakpoints: {
                    keys: [
                        'xs',
                        'sm',
                        'md',
                        'lg',
                        'xl'
                    ],
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920
                    }
                },
                direction: 'ltr',
                mixins: {
                    toolbar: {
                        minHeight: 56,
                        '@media (min-width:0px) and (orientation: landscape)': {
                            minHeight: 48
                        },
                        '@media (min-width:600px)': {
                            minHeight: 64
                        }
                    }
                },
                overrides: {},
                palette: {
                    common: {
                        black: '#000',
                        white: '#fff'
                    },
                    type: 'light',
                    primary: {
                        '50': '#ECECEE',
                        '100': '#C5C6CB',
                        '200': '#9EA1A9',
                        '300': '#7D818C',
                        '400': '#5C616F',
                        '500': '#3C4252',
                        '600': '#353A48',
                        '700': '#2D323E',
                        '800': '#262933',
                        '900': '#1E2129',
                        A100: '#C5C6CB',
                        A200: '#9EA1A9',
                        A400: '#5C616F',
                        A700: '#2D323E',
                        main: '#3C4252',
                        light: '#7D818C',
                        dark: '#2D323E',
                        contrastText: '#fff'
                    },
                    secondary: {
                        light: '#29b6f6',
                        main: '#039be5',
                        dark: '#0288d1',
                        contrastText: '#fff'
                    },
                    error: {
                        '50': '#ffebee',
                        '100': '#ffcdd2',
                        '200': '#ef9a9a',
                        '300': '#e57373',
                        '400': '#ef5350',
                        '500': '#f44336',
                        '600': '#e53935',
                        '700': '#d32f2f',
                        '800': '#c62828',
                        '900': '#b71c1c',
                        A100: '#ff8a80',
                        A200: '#ff5252',
                        A400: '#ff1744',
                        A700: '#d50000',
                        main: '#f44336',
                        light: '#e57373',
                        dark: '#d32f2f',
                        contrastText: '#fff'
                    },
                    grey: {
                        '50': '#fafafa',
                        '100': '#f5f5f5',
                        '200': '#eeeeee',
                        '300': '#e0e0e0',
                        '400': '#bdbdbd',
                        '500': '#9e9e9e',
                        '600': '#757575',
                        '700': '#616161',
                        '800': '#424242',
                        '900': '#212121',
                        A100: '#d5d5d5',
                        A200: '#aaaaaa',
                        A400: '#303030',
                        A700: '#616161'
                    },
                    contrastThreshold: 3,
                    tonalOffset: 0.2,
                    text: {
                        primary: 'rgba(0, 0, 0, 0.87)',
                        secondary: 'rgba(0, 0, 0, 0.54)',
                        disabled: 'rgba(0, 0, 0, 0.38)',
                        hint: 'rgba(0, 0, 0, 0.38)'
                    },
                    divider: 'rgba(0, 0, 0, 0.12)',
                    background: {
                        paper: '#fff',
                        'default': '#fafafa'
                    },
                    action: {
                        active: 'rgba(0, 0, 0, 0.54)',
                        hover: 'rgba(0, 0, 0, 0.08)',
                        hoverOpacity: 0.08,
                        selected: 'rgba(0, 0, 0, 0.14)',
                        disabled: 'rgba(0, 0, 0, 0.26)',
                        disabledBackground: 'rgba(0, 0, 0, 0.12)'
                    }
                },
                props: {},
                shadows: [
                    'none',
                    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
                ],
                typography: {
                    htmlFontSize: 10,
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontSize: 14,
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 600,
                    fontWeightBold: 700,
                    h1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '9.6rem',
                        lineHeight: 1
                    },
                    h2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '6rem',
                        lineHeight: 1
                    },
                    h3: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '4.8rem',
                        lineHeight: 1.04
                    },
                    h4: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '3.4rem',
                        lineHeight: 1.17
                    },
                    h5: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '2.4rem',
                        lineHeight: 1.33
                    },
                    h6: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: 1.6
                    },
                    subtitle1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        lineHeight: 1.75
                    },
                    subtitle2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.57
                    },
                    body1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.5
                    },
                    body2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.43
                    },
                    button: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.75,
                        textTransform: 'uppercase'
                    },
                    caption: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 1.66
                    },
                    overline: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 2.66,
                        textTransform: 'uppercase'
                    },
                    useNextVariants: true,
                    suppressDeprecationWarnings: true
                },
                shape: {
                    borderRadius: 4
                },
                transitions: {
                    easing: {
                        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                    },
                    duration: {
                        shortest: 150,
                        shorter: 200,
                        'short': 250,
                        standard: 300,
                        complex: 375,
                        enteringScreen: 225,
                        leavingScreen: 195
                    }
                },
                zIndex: {
                    mobileStepper: 1000,
                    appBar: 1100,
                    drawer: 1200,
                    modal: 1300,
                    snackbar: 1400,
                    tooltip: 1500
                },
                status: {
                    danger: 'orange'
                }
            },
            sunset: {
                breakpoints: {
                    keys: [
                        'xs',
                        'sm',
                        'md',
                        'lg',
                        'xl'
                    ],
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920
                    }
                },
                direction: 'ltr',
                mixins: {
                    toolbar: {
                        minHeight: 56,
                        '@media (min-width:0px) and (orientation: landscape)': {
                            minHeight: 48
                        },
                        '@media (min-width:600px)': {
                            minHeight: 64
                        }
                    }
                },
                overrides: {},
                palette: {
                    common: {
                        black: '#000',
                        white: '#fff'
                    },
                    type: 'light',
                    primary: {
                        light: '#ff908b',
                        main: '#d0605e',
                        dark: '#9b3134',
                        contrastText: '#fff'
                    },
                    secondary: {
                        light: '#c76a1d',
                        main: '#ff994c',
                        dark: '#ffca7b',
                        contrastText: '#fff'
                    },
                    error: {
                        '50': '#ffebee',
                        '100': '#ffcdd2',
                        '200': '#ef9a9a',
                        '300': '#e57373',
                        '400': '#ef5350',
                        '500': '#f44336',
                        '600': '#e53935',
                        '700': '#d32f2f',
                        '800': '#c62828',
                        '900': '#b71c1c',
                        A100: '#ff8a80',
                        A200: '#ff5252',
                        A400: '#ff1744',
                        A700: '#d50000',
                        main: '#f44336',
                        light: '#e57373',
                        dark: '#d32f2f',
                        contrastText: '#fff'
                    },
                    grey: {
                        '50': '#fafafa',
                        '100': '#f5f5f5',
                        '200': '#eeeeee',
                        '300': '#e0e0e0',
                        '400': '#bdbdbd',
                        '500': '#9e9e9e',
                        '600': '#757575',
                        '700': '#616161',
                        '800': '#424242',
                        '900': '#212121',
                        A100: '#d5d5d5',
                        A200: '#aaaaaa',
                        A400: '#303030',
                        A700: '#616161'
                    },
                    contrastThreshold: 3,
                    tonalOffset: 0.2,
                    text: {
                        primary: 'rgba(0, 0, 0, 0.87)',
                        secondary: 'rgba(0, 0, 0, 0.54)',
                        disabled: 'rgba(0, 0, 0, 0.38)',
                        hint: 'rgba(0, 0, 0, 0.38)'
                    },
                    divider: 'rgba(0, 0, 0, 0.12)',
                    background: {
                        paper: '#fff',
                        'default': '#fafafa'
                    },
                    action: {
                        active: 'rgba(0, 0, 0, 0.54)',
                        hover: 'rgba(0, 0, 0, 0.08)',
                        hoverOpacity: 0.08,
                        selected: 'rgba(0, 0, 0, 0.14)',
                        disabled: 'rgba(0, 0, 0, 0.26)',
                        disabledBackground: 'rgba(0, 0, 0, 0.12)'
                    }
                },
                props: {},
                shadows: [
                    'none',
                    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
                ],
                typography: {
                    htmlFontSize: 10,
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontSize: 14,
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 600,
                    fontWeightBold: 700,
                    h1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '9.6rem',
                        lineHeight: 1
                    },
                    h2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '6rem',
                        lineHeight: 1
                    },
                    h3: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '4.8rem',
                        lineHeight: 1.04
                    },
                    h4: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '3.4rem',
                        lineHeight: 1.17
                    },
                    h5: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '2.4rem',
                        lineHeight: 1.33
                    },
                    h6: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: 1.6
                    },
                    subtitle1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        lineHeight: 1.75
                    },
                    subtitle2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.57
                    },
                    body1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.5
                    },
                    body2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.43
                    },
                    button: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.75,
                        textTransform: 'uppercase'
                    },
                    caption: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 1.66
                    },
                    overline: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 2.66,
                        textTransform: 'uppercase'
                    },
                    useNextVariants: true,
                    suppressDeprecationWarnings: true
                },
                shape: {
                    borderRadius: 4
                },
                transitions: {
                    easing: {
                        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                    },
                    duration: {
                        shortest: 150,
                        shorter: 200,
                        'short': 250,
                        standard: 300,
                        complex: 375,
                        enteringScreen: 225,
                        leavingScreen: 195
                    }
                },
                zIndex: {
                    mobileStepper: 1000,
                    appBar: 1100,
                    drawer: 1200,
                    modal: 1300,
                    snackbar: 1400,
                    tooltip: 1500
                },
                status: {
                    danger: 'orange'
                }
            },
            greeny: {
                breakpoints: {
                    keys: [
                        'xs',
                        'sm',
                        'md',
                        'lg',
                        'xl'
                    ],
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920
                    }
                },
                direction: 'ltr',
                mixins: {
                    toolbar: {
                        minHeight: 56,
                        '@media (min-width:0px) and (orientation: landscape)': {
                            minHeight: 48
                        },
                        '@media (min-width:600px)': {
                            minHeight: 64
                        }
                    }
                },
                overrides: {},
                palette: {
                    common: {
                        black: '#000',
                        white: '#fff'
                    },
                    type: 'light',
                    primary: {
                        light: '#6cabd4',
                        main: '#387ca3',
                        dark: '#005074',
                        contrastText: '#fff'
                    },
                    secondary: {
                        light: '#89f6cf',
                        main: '#55c39e',
                        dark: '#159270',
                        contrastText: '#fff'
                    },
                    error: {
                        '50': '#ffebee',
                        '100': '#ffcdd2',
                        '200': '#ef9a9a',
                        '300': '#e57373',
                        '400': '#ef5350',
                        '500': '#f44336',
                        '600': '#e53935',
                        '700': '#d32f2f',
                        '800': '#c62828',
                        '900': '#b71c1c',
                        A100: '#ff8a80',
                        A200: '#ff5252',
                        A400: '#ff1744',
                        A700: '#d50000',
                        main: '#f44336',
                        light: '#e57373',
                        dark: '#d32f2f',
                        contrastText: '#fff'
                    },
                    grey: {
                        '50': '#fafafa',
                        '100': '#f5f5f5',
                        '200': '#eeeeee',
                        '300': '#e0e0e0',
                        '400': '#bdbdbd',
                        '500': '#9e9e9e',
                        '600': '#757575',
                        '700': '#616161',
                        '800': '#424242',
                        '900': '#212121',
                        A100: '#d5d5d5',
                        A200: '#aaaaaa',
                        A400: '#303030',
                        A700: '#616161'
                    },
                    contrastThreshold: 3,
                    tonalOffset: 0.2,
                    text: {
                        primary: 'rgba(0, 0, 0, 0.87)',
                        secondary: 'rgba(0, 0, 0, 0.54)',
                        disabled: 'rgba(0, 0, 0, 0.38)',
                        hint: 'rgba(0, 0, 0, 0.38)'
                    },
                    divider: 'rgba(0, 0, 0, 0.12)',
                    background: {
                        paper: '#fff',
                        'default': '#fafafa'
                    },
                    action: {
                        active: 'rgba(0, 0, 0, 0.54)',
                        hover: 'rgba(0, 0, 0, 0.08)',
                        hoverOpacity: 0.08,
                        selected: 'rgba(0, 0, 0, 0.14)',
                        disabled: 'rgba(0, 0, 0, 0.26)',
                        disabledBackground: 'rgba(0, 0, 0, 0.12)'
                    }
                },
                props: {},
                shadows: [
                    'none',
                    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
                ],
                typography: {
                    htmlFontSize: 10,
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontSize: 14,
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 600,
                    fontWeightBold: 700,
                    h1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '9.6rem',
                        lineHeight: 1
                    },
                    h2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '6rem',
                        lineHeight: 1
                    },
                    h3: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '4.8rem',
                        lineHeight: 1.04
                    },
                    h4: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '3.4rem',
                        lineHeight: 1.17
                    },
                    h5: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '2.4rem',
                        lineHeight: 1.33
                    },
                    h6: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: 1.6
                    },
                    subtitle1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        lineHeight: 1.75
                    },
                    subtitle2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.57
                    },
                    body1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.5
                    },
                    body2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.43
                    },
                    button: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.75,
                        textTransform: 'uppercase'
                    },
                    caption: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 1.66
                    },
                    overline: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 2.66,
                        textTransform: 'uppercase'
                    },
                    useNextVariants: true,
                    suppressDeprecationWarnings: true
                },
                shape: {
                    borderRadius: 4
                },
                transitions: {
                    easing: {
                        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                    },
                    duration: {
                        shortest: 150,
                        shorter: 200,
                        'short': 250,
                        standard: 300,
                        complex: 375,
                        enteringScreen: 225,
                        leavingScreen: 195
                    }
                },
                zIndex: {
                    mobileStepper: 1000,
                    appBar: 1100,
                    drawer: 1200,
                    modal: 1300,
                    snackbar: 1400,
                    tooltip: 1500
                },
                status: {
                    danger: 'orange'
                }
            },
            beach: {
                breakpoints: {
                    keys: [
                        'xs',
                        'sm',
                        'md',
                        'lg',
                        'xl'
                    ],
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920
                    }
                },
                direction: 'ltr',
                mixins: {
                    toolbar: {
                        minHeight: 56,
                        '@media (min-width:0px) and (orientation: landscape)': {
                            minHeight: 48
                        },
                        '@media (min-width:600px)': {
                            minHeight: 64
                        }
                    }
                },
                overrides: {},
                palette: {
                    common: {
                        black: '#000',
                        white: '#fff'
                    },
                    type: 'light',
                    primary: {
                        light: '#c4d8dd',
                        main: '#93a7ab',
                        dark: '#65787c',
                        contrastText: '#fff'
                    },
                    secondary: {
                        light: '#ffb281',
                        main: '#f18153',
                        dark: '#ba5228',
                        contrastText: '#fff'
                    },
                    error: {
                        light: '#e57373',
                        main: '#f44336',
                        dark: '#d32f2f',
                        contrastText: '#fff'
                    },
                    grey: {
                        '50': '#fafafa',
                        '100': '#f5f5f5',
                        '200': '#eeeeee',
                        '300': '#e0e0e0',
                        '400': '#bdbdbd',
                        '500': '#9e9e9e',
                        '600': '#757575',
                        '700': '#616161',
                        '800': '#424242',
                        '900': '#212121',
                        A100: '#d5d5d5',
                        A200: '#aaaaaa',
                        A400: '#303030',
                        A700: '#616161'
                    },
                    contrastThreshold: 3,
                    tonalOffset: 0.2,
                    text: {
                        primary: 'rgba(0, 0, 0, 0.87)',
                        secondary: 'rgba(0, 0, 0, 0.54)',
                        disabled: 'rgba(0, 0, 0, 0.38)',
                        hint: 'rgba(0, 0, 0, 0.38)'
                    },
                    divider: 'rgba(0, 0, 0, 0.12)',
                    background: {
                        paper: '#fff',
                        'default': '#fafafa'
                    },
                    action: {
                        active: 'rgba(0, 0, 0, 0.54)',
                        hover: 'rgba(0, 0, 0, 0.08)',
                        hoverOpacity: 0.08,
                        selected: 'rgba(0, 0, 0, 0.14)',
                        disabled: 'rgba(0, 0, 0, 0.26)',
                        disabledBackground: 'rgba(0, 0, 0, 0.12)'
                    }
                },
                props: {},
                shadows: [
                    'none',
                    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
                ],
                typography: {
                    htmlFontSize: 10,
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontSize: 14,
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 600,
                    fontWeightBold: 700,
                    h1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '9.6rem',
                        lineHeight: 1
                    },
                    h2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '6rem',
                        lineHeight: 1
                    },
                    h3: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '4.8rem',
                        lineHeight: 1.04
                    },
                    h4: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '3.4rem',
                        lineHeight: 1.17
                    },
                    h5: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '2.4rem',
                        lineHeight: 1.33
                    },
                    h6: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: 1.6
                    },
                    subtitle1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        lineHeight: 1.75
                    },
                    subtitle2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.57
                    },
                    body1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.5
                    },
                    body2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.43
                    },
                    button: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.75,
                        textTransform: 'uppercase'
                    },
                    caption: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 1.66
                    },
                    overline: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 2.66,
                        textTransform: 'uppercase'
                    },
                    useNextVariants: true,
                    suppressDeprecationWarnings: true
                },
                shape: {
                    borderRadius: 4
                },
                transitions: {
                    easing: {
                        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                    },
                    duration: {
                        shortest: 150,
                        shorter: 200,
                        'short': 250,
                        standard: 300,
                        complex: 375,
                        enteringScreen: 225,
                        leavingScreen: 195
                    }
                },
                zIndex: {
                    mobileStepper: 1000,
                    appBar: 1100,
                    drawer: 1200,
                    modal: 1300,
                    snackbar: 1400,
                    tooltip: 1500
                }
            },
            tech: {
                breakpoints: {
                    keys: [
                        'xs',
                        'sm',
                        'md',
                        'lg',
                        'xl'
                    ],
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920
                    }
                },
                direction: 'ltr',
                mixins: {
                    toolbar: {
                        minHeight: 56,
                        '@media (min-width:0px) and (orientation: landscape)': {
                            minHeight: 48
                        },
                        '@media (min-width:600px)': {
                            minHeight: 64
                        }
                    }
                },
                overrides: {},
                palette: {
                    common: {
                        black: '#000',
                        white: '#fff'
                    },
                    type: 'light',
                    primary: {
                        light: '#87efff',
                        main: '#4dbce9',
                        dark: '#008cb7',
                        contrastText: '#fff'
                    },
                    secondary: {
                        light: '#ffff83',
                        main: '#d1e751',
                        dark: '#9db516',
                        contrastText: 'rgba(0, 0, 0, 0.87)'
                    },
                    error: {
                        light: '#e57373',
                        main: '#f44336',
                        dark: '#d32f2f',
                        contrastText: '#fff'
                    },
                    grey: {
                        '50': '#fafafa',
                        '100': '#f5f5f5',
                        '200': '#eeeeee',
                        '300': '#e0e0e0',
                        '400': '#bdbdbd',
                        '500': '#9e9e9e',
                        '600': '#757575',
                        '700': '#616161',
                        '800': '#424242',
                        '900': '#212121',
                        A100: '#d5d5d5',
                        A200: '#aaaaaa',
                        A400: '#303030',
                        A700: '#616161'
                    },
                    contrastThreshold: 3,
                    tonalOffset: 0.2,
                    text: {
                        primary: 'rgba(0, 0, 0, 0.87)',
                        secondary: 'rgba(0, 0, 0, 0.54)',
                        disabled: 'rgba(0, 0, 0, 0.38)',
                        hint: 'rgba(0, 0, 0, 0.38)'
                    },
                    divider: 'rgba(0, 0, 0, 0.12)',
                    background: {
                        paper: '#fff',
                        'default': '#fafafa'
                    },
                    action: {
                        active: 'rgba(0, 0, 0, 0.54)',
                        hover: 'rgba(0, 0, 0, 0.08)',
                        hoverOpacity: 0.08,
                        selected: 'rgba(0, 0, 0, 0.14)',
                        disabled: 'rgba(0, 0, 0, 0.26)',
                        disabledBackground: 'rgba(0, 0, 0, 0.12)'
                    }
                },
                props: {},
                shadows: [
                    'none',
                    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
                ],
                typography: {
                    htmlFontSize: 10,
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontSize: 14,
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 600,
                    fontWeightBold: 700,
                    h1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '9.6rem',
                        lineHeight: 1
                    },
                    h2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '6rem',
                        lineHeight: 1
                    },
                    h3: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '4.8rem',
                        lineHeight: 1.04
                    },
                    h4: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '3.4rem',
                        lineHeight: 1.17
                    },
                    h5: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '2.4rem',
                        lineHeight: 1.33
                    },
                    h6: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: 1.6
                    },
                    subtitle1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        lineHeight: 1.75
                    },
                    subtitle2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.57
                    },
                    body1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.5
                    },
                    body2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.43
                    },
                    button: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.75,
                        textTransform: 'uppercase'
                    },
                    caption: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 1.66
                    },
                    overline: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 2.66,
                        textTransform: 'uppercase'
                    },
                    useNextVariants: true,
                    suppressDeprecationWarnings: true
                },
                shape: {
                    borderRadius: 4
                },
                transitions: {
                    easing: {
                        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                    },
                    duration: {
                        shortest: 150,
                        shorter: 200,
                        'short': 250,
                        standard: 300,
                        complex: 375,
                        enteringScreen: 225,
                        leavingScreen: 195
                    }
                },
                zIndex: {
                    mobileStepper: 1000,
                    appBar: 1100,
                    drawer: 1200,
                    modal: 1300,
                    snackbar: 1400,
                    tooltip: 1500
                }
            },
            sweetHues: {
                breakpoints: {
                    keys: [
                        'xs',
                        'sm',
                        'md',
                        'lg',
                        'xl'
                    ],
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920
                    }
                },
                direction: 'ltr',
                mixins: {
                    toolbar: {
                        minHeight: 56,
                        '@media (min-width:0px) and (orientation: landscape)': {
                            minHeight: 48
                        },
                        '@media (min-width:600px)': {
                            minHeight: 64
                        }
                    }
                },
                overrides: {},
                palette: {
                    common: {
                        black: '#000',
                        white: '#fff'
                    },
                    type: 'light',
                    primary: {
                        light: '#d5c1eb',
                        main: '#a391b9',
                        dark: '#746389',
                        contrastText: '#fff'
                    },
                    secondary: {
                        light: '#90afd4',
                        main: '#6080a3',
                        dark: '#325474',
                        contrastText: '#fff'
                    },
                    error: {
                        light: '#e57373',
                        main: '#f44336',
                        dark: '#d32f2f',
                        contrastText: '#fff'
                    },
                    grey: {
                        '50': '#fafafa',
                        '100': '#f5f5f5',
                        '200': '#eeeeee',
                        '300': '#e0e0e0',
                        '400': '#bdbdbd',
                        '500': '#9e9e9e',
                        '600': '#757575',
                        '700': '#616161',
                        '800': '#424242',
                        '900': '#212121',
                        A100: '#d5d5d5',
                        A200: '#aaaaaa',
                        A400: '#303030',
                        A700: '#616161'
                    },
                    contrastThreshold: 3,
                    tonalOffset: 0.2,
                    text: {
                        primary: 'rgba(0, 0, 0, 0.87)',
                        secondary: 'rgba(0, 0, 0, 0.54)',
                        disabled: 'rgba(0, 0, 0, 0.38)',
                        hint: 'rgba(0, 0, 0, 0.38)'
                    },
                    divider: 'rgba(0, 0, 0, 0.12)',
                    background: {
                        paper: '#fff',
                        'default': '#fafafa'
                    },
                    action: {
                        active: 'rgba(0, 0, 0, 0.54)',
                        hover: 'rgba(0, 0, 0, 0.08)',
                        hoverOpacity: 0.08,
                        selected: 'rgba(0, 0, 0, 0.14)',
                        disabled: 'rgba(0, 0, 0, 0.26)',
                        disabledBackground: 'rgba(0, 0, 0, 0.12)'
                    }
                },
                props: {},
                shadows: [
                    'none',
                    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
                ],
                typography: {
                    htmlFontSize: 10,
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontSize: 14,
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 600,
                    fontWeightBold: 700,
                    h1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '9.6rem',
                        lineHeight: 1
                    },
                    h2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '6rem',
                        lineHeight: 1
                    },
                    h3: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '4.8rem',
                        lineHeight: 1.04
                    },
                    h4: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '3.4rem',
                        lineHeight: 1.17
                    },
                    h5: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '2.4rem',
                        lineHeight: 1.33
                    },
                    h6: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: 1.6
                    },
                    subtitle1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        lineHeight: 1.75
                    },
                    subtitle2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.57
                    },
                    body1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.5
                    },
                    body2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.43
                    },
                    button: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.75,
                        textTransform: 'uppercase'
                    },
                    caption: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 1.66
                    },
                    overline: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 2.66,
                        textTransform: 'uppercase'
                    },
                    useNextVariants: true,
                    suppressDeprecationWarnings: true
                },
                shape: {
                    borderRadius: 4
                },
                transitions: {
                    easing: {
                        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                    },
                    duration: {
                        shortest: 150,
                        shorter: 200,
                        'short': 250,
                        standard: 300,
                        complex: 375,
                        enteringScreen: 225,
                        leavingScreen: 195
                    }
                },
                zIndex: {
                    mobileStepper: 1000,
                    appBar: 1100,
                    drawer: 1200,
                    modal: 1300,
                    snackbar: 1400,
                    tooltip: 1500
                }
            },
            defaultDark: {
                breakpoints: {
                    keys: [
                        'xs',
                        'sm',
                        'md',
                        'lg',
                        'xl'
                    ],
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920
                    }
                },
                direction: 'ltr',
                mixins: {
                    toolbar: {
                        minHeight: 56,
                        '@media (min-width:0px) and (orientation: landscape)': {
                            minHeight: 48
                        },
                        '@media (min-width:600px)': {
                            minHeight: 64
                        }
                    }
                },
                overrides: {},
                palette: {
                    common: {
                        black: '#000',
                        white: '#fff'
                    },
                    type: 'dark',
                    primary: {
                        '50': '#ECECEE',
                        '100': '#C5C6CB',
                        '200': '#9EA1A9',
                        '300': '#7D818C',
                        '400': '#5C616F',
                        '500': '#3C4252',
                        '600': '#353A48',
                        '700': '#2D323E',
                        '800': '#262933',
                        '900': '#1E2129',
                        A100: '#C5C6CB',
                        A200: '#9EA1A9',
                        A400: '#5C616F',
                        A700: '#2D323E',
                        main: '#3C4252',
                        light: '#7D818C',
                        dark: '#2D323E',
                        contrastText: '#fff'
                    },
                    secondary: {
                        light: '#29b6f6',
                        main: '#039be5',
                        dark: '#0288d1',
                        contrastText: '#fff'
                    },
                    error: {
                        '50': '#ffebee',
                        '100': '#ffcdd2',
                        '200': '#ef9a9a',
                        '300': '#e57373',
                        '400': '#ef5350',
                        '500': '#f44336',
                        '600': '#e53935',
                        '700': '#d32f2f',
                        '800': '#c62828',
                        '900': '#b71c1c',
                        A100: '#ff8a80',
                        A200: '#ff5252',
                        A400: '#ff1744',
                        A700: '#d50000',
                        main: '#f44336',
                        light: '#e57373',
                        dark: '#d32f2f',
                        contrastText: '#fff'
                    },
                    grey: {
                        '50': '#fafafa',
                        '100': '#f5f5f5',
                        '200': '#eeeeee',
                        '300': '#e0e0e0',
                        '400': '#bdbdbd',
                        '500': '#9e9e9e',
                        '600': '#757575',
                        '700': '#616161',
                        '800': '#424242',
                        '900': '#212121',
                        A100: '#d5d5d5',
                        A200: '#aaaaaa',
                        A400: '#303030',
                        A700: '#616161'
                    },
                    contrastThreshold: 3,
                    tonalOffset: 0.2,
                    text: {
                        primary: '#fff',
                        secondary: 'rgba(255, 255, 255, 0.7)',
                        disabled: 'rgba(255, 255, 255, 0.5)',
                        hint: 'rgba(255, 255, 255, 0.5)',
                        icon: 'rgba(255, 255, 255, 0.5)'
                    },
                    divider: 'rgba(255, 255, 255, 0.12)',
                    background: {
                        paper: '#424242',
                        'default': '#303030'
                    },
                    action: {
                        active: '#fff',
                        hover: 'rgba(255, 255, 255, 0.1)',
                        hoverOpacity: 0.1,
                        selected: 'rgba(255, 255, 255, 0.2)',
                        disabled: 'rgba(255, 255, 255, 0.3)',
                        disabledBackground: 'rgba(255, 255, 255, 0.12)'
                    }
                },
                props: {},
                shadows: [
                    'none',
                    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
                ],
                typography: {
                    htmlFontSize: 10,
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontSize: 14,
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 600,
                    fontWeightBold: 700,
                    h1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '9.6rem',
                        lineHeight: 1
                    },
                    h2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '6rem',
                        lineHeight: 1
                    },
                    h3: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '4.8rem',
                        lineHeight: 1.04
                    },
                    h4: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '3.4rem',
                        lineHeight: 1.17
                    },
                    h5: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '2.4rem',
                        lineHeight: 1.33
                    },
                    h6: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: 1.6
                    },
                    subtitle1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        lineHeight: 1.75
                    },
                    subtitle2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.57
                    },
                    body1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.5
                    },
                    body2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.43
                    },
                    button: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.75,
                        textTransform: 'uppercase'
                    },
                    caption: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 1.66
                    },
                    overline: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 2.66,
                        textTransform: 'uppercase'
                    },
                    useNextVariants: true,
                    suppressDeprecationWarnings: true
                },
                shape: {
                    borderRadius: 4
                },
                transitions: {
                    easing: {
                        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                    },
                    duration: {
                        shortest: 150,
                        shorter: 200,
                        'short': 250,
                        standard: 300,
                        complex: 375,
                        enteringScreen: 225,
                        leavingScreen: 195
                    }
                },
                zIndex: {
                    mobileStepper: 1000,
                    appBar: 1100,
                    drawer: 1200,
                    modal: 1300,
                    snackbar: 1400,
                    tooltip: 1500
                },
                status: {
                    danger: 'orange'
                }
            },
            deepOcean: {
                breakpoints: {
                    keys: [
                        'xs',
                        'sm',
                        'md',
                        'lg',
                        'xl'
                    ],
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920
                    }
                },
                direction: 'ltr',
                mixins: {
                    toolbar: {
                        minHeight: 56,
                        '@media (min-width:0px) and (orientation: landscape)': {
                            minHeight: 48
                        },
                        '@media (min-width:600px)': {
                            minHeight: 64
                        }
                    }
                },
                overrides: {},
                palette: {
                    common: {
                        black: '#000',
                        white: '#fff'
                    },
                    type: 'dark',
                    primary: {
                        light: '#8f53e7',
                        main: '#5a24b4',
                        dark: '#1e0083',
                        contrastText: '#fff'
                    },
                    secondary: {
                        light: '#ff61ff',
                        main: '#fe00e9',
                        dark: '#c600b6',
                        contrastText: '#fff'
                    },
                    error: {
                        light: '#e57373',
                        main: '#f44336',
                        dark: '#d32f2f',
                        contrastText: '#fff'
                    },
                    grey: {
                        '50': '#fafafa',
                        '100': '#f5f5f5',
                        '200': '#eeeeee',
                        '300': '#e0e0e0',
                        '400': '#bdbdbd',
                        '500': '#9e9e9e',
                        '600': '#757575',
                        '700': '#616161',
                        '800': '#424242',
                        '900': '#212121',
                        A100: '#d5d5d5',
                        A200: '#aaaaaa',
                        A400: '#303030',
                        A700: '#616161'
                    },
                    contrastThreshold: 3,
                    tonalOffset: 0.2,
                    text: {
                        primary: '#fff',
                        secondary: 'rgba(255, 255, 255, 0.7)',
                        disabled: 'rgba(255, 255, 255, 0.5)',
                        hint: 'rgba(255, 255, 255, 0.5)',
                        icon: 'rgba(255, 255, 255, 0.5)'
                    },
                    divider: 'rgba(255, 255, 255, 0.12)',
                    background: {
                        paper: '#424242',
                        'default': '#303030'
                    },
                    action: {
                        active: '#fff',
                        hover: 'rgba(255, 255, 255, 0.1)',
                        hoverOpacity: 0.1,
                        selected: 'rgba(255, 255, 255, 0.2)',
                        disabled: 'rgba(255, 255, 255, 0.3)',
                        disabledBackground: 'rgba(255, 255, 255, 0.12)'
                    }
                },
                props: {},
                shadows: [
                    'none',
                    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
                ],
                typography: {
                    htmlFontSize: 10,
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontSize: 14,
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 600,
                    fontWeightBold: 700,
                    h1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '9.6rem',
                        lineHeight: 1
                    },
                    h2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '6rem',
                        lineHeight: 1
                    },
                    h3: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '4.8rem',
                        lineHeight: 1.04
                    },
                    h4: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '3.4rem',
                        lineHeight: 1.17
                    },
                    h5: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '2.4rem',
                        lineHeight: 1.33
                    },
                    h6: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: 1.6
                    },
                    subtitle1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        lineHeight: 1.75
                    },
                    subtitle2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.57
                    },
                    body1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.5
                    },
                    body2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.43
                    },
                    button: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.75,
                        textTransform: 'uppercase'
                    },
                    caption: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 1.66
                    },
                    overline: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 2.66,
                        textTransform: 'uppercase'
                    },
                    useNextVariants: true,
                    suppressDeprecationWarnings: true
                },
                shape: {
                    borderRadius: 4
                },
                transitions: {
                    easing: {
                        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                    },
                    duration: {
                        shortest: 150,
                        shorter: 200,
                        'short': 250,
                        standard: 300,
                        complex: 375,
                        enteringScreen: 225,
                        leavingScreen: 195
                    }
                },
                zIndex: {
                    mobileStepper: 1000,
                    appBar: 1100,
                    drawer: 1200,
                    modal: 1300,
                    snackbar: 1400,
                    tooltip: 1500
                }
            },
            slate: {
                breakpoints: {
                    keys: [
                        'xs',
                        'sm',
                        'md',
                        'lg',
                        'xl'
                    ],
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920
                    }
                },
                direction: 'ltr',
                mixins: {
                    toolbar: {
                        minHeight: 56,
                        '@media (min-width:0px) and (orientation: landscape)': {
                            minHeight: 48
                        },
                        '@media (min-width:600px)': {
                            minHeight: 64
                        }
                    }
                },
                overrides: {},
                palette: {
                    common: {
                        black: '#000',
                        white: '#fff'
                    },
                    type: 'dark',
                    primary: {
                        light: '#86fff7',
                        main: '#4ecdc4',
                        dark: '#009b94',
                        contrastText: 'rgba(0, 0, 0, 0.87)'
                    },
                    secondary: {
                        light: '#ff9d99',
                        main: '#ff6b6b',
                        dark: '#c73840',
                        contrastText: '#fff'
                    },
                    error: {
                        light: '#e57373',
                        main: '#f44336',
                        dark: '#d32f2f',
                        contrastText: '#fff'
                    },
                    grey: {
                        '50': '#fafafa',
                        '100': '#f5f5f5',
                        '200': '#eeeeee',
                        '300': '#e0e0e0',
                        '400': '#bdbdbd',
                        '500': '#9e9e9e',
                        '600': '#757575',
                        '700': '#616161',
                        '800': '#424242',
                        '900': '#212121',
                        A100: '#d5d5d5',
                        A200: '#aaaaaa',
                        A400: '#303030',
                        A700: '#616161'
                    },
                    contrastThreshold: 3,
                    tonalOffset: 0.2,
                    text: {
                        primary: '#fff',
                        secondary: 'rgba(255, 255, 255, 0.7)',
                        disabled: 'rgba(255, 255, 255, 0.5)',
                        hint: 'rgba(255, 255, 255, 0.5)',
                        icon: 'rgba(255, 255, 255, 0.5)'
                    },
                    divider: 'rgba(255, 255, 255, 0.12)',
                    background: {
                        paper: '#424242',
                        'default': '#303030'
                    },
                    action: {
                        active: '#fff',
                        hover: 'rgba(255, 255, 255, 0.1)',
                        hoverOpacity: 0.1,
                        selected: 'rgba(255, 255, 255, 0.2)',
                        disabled: 'rgba(255, 255, 255, 0.3)',
                        disabledBackground: 'rgba(255, 255, 255, 0.12)'
                    }
                },
                props: {},
                shadows: [
                    'none',
                    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
                ],
                typography: {
                    htmlFontSize: 10,
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontSize: 14,
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 600,
                    fontWeightBold: 700,
                    h1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '9.6rem',
                        lineHeight: 1
                    },
                    h2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '6rem',
                        lineHeight: 1
                    },
                    h3: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '4.8rem',
                        lineHeight: 1.04
                    },
                    h4: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '3.4rem',
                        lineHeight: 1.17
                    },
                    h5: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '2.4rem',
                        lineHeight: 1.33
                    },
                    h6: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: 1.6
                    },
                    subtitle1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        lineHeight: 1.75
                    },
                    subtitle2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.57
                    },
                    body1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.5
                    },
                    body2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.43
                    },
                    button: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.75,
                        textTransform: 'uppercase'
                    },
                    caption: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 1.66
                    },
                    overline: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 2.66,
                        textTransform: 'uppercase'
                    },
                    useNextVariants: true,
                    suppressDeprecationWarnings: true
                },
                shape: {
                    borderRadius: 4
                },
                transitions: {
                    easing: {
                        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                    },
                    duration: {
                        shortest: 150,
                        shorter: 200,
                        'short': 250,
                        standard: 300,
                        complex: 375,
                        enteringScreen: 225,
                        leavingScreen: 195
                    }
                },
                zIndex: {
                    mobileStepper: 1000,
                    appBar: 1100,
                    drawer: 1200,
                    modal: 1300,
                    snackbar: 1400,
                    tooltip: 1500
                }
            },
            mainThemeDark: {
                breakpoints: {
                    keys: [
                        'xs',
                        'sm',
                        'md',
                        'lg',
                        'xl'
                    ],
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920
                    }
                },
                direction: 'ltr',
                mixins: {
                    toolbar: {
                        minHeight: 56,
                        '@media (min-width:0px) and (orientation: landscape)': {
                            minHeight: 48
                        },
                        '@media (min-width:600px)': {
                            minHeight: 64
                        }
                    }
                },
                overrides: {},
                palette: {
                    common: {
                        black: '#000',
                        white: '#fff'
                    },
                    type: 'dark',
                    primary: {
                        '50': '#ECECEE',
                        '100': '#C5C6CB',
                        '200': '#9EA1A9',
                        '300': '#7D818C',
                        '400': '#5C616F',
                        '500': '#3C4252',
                        '600': '#353A48',
                        '700': '#2D323E',
                        '800': '#262933',
                        '900': '#1E2129',
                        A100: '#C5C6CB',
                        A200: '#9EA1A9',
                        A400: '#5C616F',
                        A700: '#2D323E',
                        main: '#3C4252',
                        light: '#7D818C',
                        dark: '#2D323E',
                        contrastText: '#fff'
                    },
                    secondary: {
                        light: '#29b6f6',
                        main: '#039be5',
                        dark: '#0288d1',
                        contrastText: '#fff'
                    },
                    error: {
                        '50': '#ffebee',
                        '100': '#ffcdd2',
                        '200': '#ef9a9a',
                        '300': '#e57373',
                        '400': '#ef5350',
                        '500': '#f44336',
                        '600': '#e53935',
                        '700': '#d32f2f',
                        '800': '#c62828',
                        '900': '#b71c1c',
                        A100: '#ff8a80',
                        A200: '#ff5252',
                        A400: '#ff1744',
                        A700: '#d50000',
                        main: '#f44336',
                        light: '#e57373',
                        dark: '#d32f2f',
                        contrastText: '#fff'
                    },
                    grey: {
                        '50': '#fafafa',
                        '100': '#f5f5f5',
                        '200': '#eeeeee',
                        '300': '#e0e0e0',
                        '400': '#bdbdbd',
                        '500': '#9e9e9e',
                        '600': '#757575',
                        '700': '#616161',
                        '800': '#424242',
                        '900': '#212121',
                        A100: '#d5d5d5',
                        A200: '#aaaaaa',
                        A400: '#303030',
                        A700: '#616161'
                    },
                    contrastThreshold: 3,
                    tonalOffset: 0.2,
                    text: {
                        primary: '#fff',
                        secondary: 'rgba(255, 255, 255, 0.7)',
                        disabled: 'rgba(255, 255, 255, 0.5)',
                        hint: 'rgba(255, 255, 255, 0.5)',
                        icon: 'rgba(255, 255, 255, 0.5)'
                    },
                    divider: 'rgba(255, 255, 255, 0.12)',
                    background: {
                        paper: '#424242',
                        'default': '#303030'
                    },
                    action: {
                        active: '#fff',
                        hover: 'rgba(255, 255, 255, 0.1)',
                        hoverOpacity: 0.1,
                        selected: 'rgba(255, 255, 255, 0.2)',
                        disabled: 'rgba(255, 255, 255, 0.3)',
                        disabledBackground: 'rgba(255, 255, 255, 0.12)'
                    }
                },
                props: {},
                shadows: [
                    'none',
                    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
                ],
                typography: {
                    htmlFontSize: 10,
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontSize: 14,
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 600,
                    fontWeightBold: 700,
                    h1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '9.6rem',
                        lineHeight: 1
                    },
                    h2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '6rem',
                        lineHeight: 1
                    },
                    h3: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '4.8rem',
                        lineHeight: 1.04
                    },
                    h4: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '3.4rem',
                        lineHeight: 1.17
                    },
                    h5: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '2.4rem',
                        lineHeight: 1.33
                    },
                    h6: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: 1.6
                    },
                    subtitle1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        lineHeight: 1.75
                    },
                    subtitle2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.57
                    },
                    body1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.5
                    },
                    body2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.43
                    },
                    button: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.75,
                        textTransform: 'uppercase'
                    },
                    caption: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 1.66
                    },
                    overline: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 2.66,
                        textTransform: 'uppercase'
                    },
                    useNextVariants: true,
                    suppressDeprecationWarnings: true
                },
                shape: {
                    borderRadius: 4
                },
                transitions: {
                    easing: {
                        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                    },
                    duration: {
                        shortest: 150,
                        shorter: 200,
                        'short': 250,
                        standard: 300,
                        complex: 375,
                        enteringScreen: 225,
                        leavingScreen: 195
                    }
                },
                zIndex: {
                    mobileStepper: 1000,
                    appBar: 1100,
                    drawer: 1200,
                    modal: 1300,
                    snackbar: 1400,
                    tooltip: 1500
                },
                status: {
                    danger: 'orange'
                }
            },
            mainThemeLight: {
                breakpoints: {
                    keys: [
                        'xs',
                        'sm',
                        'md',
                        'lg',
                        'xl'
                    ],
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1920
                    }
                },
                direction: 'ltr',
                mixins: {
                    toolbar: {
                        minHeight: 56,
                        '@media (min-width:0px) and (orientation: landscape)': {
                            minHeight: 48
                        },
                        '@media (min-width:600px)': {
                            minHeight: 64
                        }
                    }
                },
                overrides: {},
                palette: {
                    common: {
                        black: '#000',
                        white: '#fff'
                    },
                    type: 'light',
                    primary: {
                        '50': '#ECECEE',
                        '100': '#C5C6CB',
                        '200': '#9EA1A9',
                        '300': '#7D818C',
                        '400': '#5C616F',
                        '500': '#3C4252',
                        '600': '#353A48',
                        '700': '#2D323E',
                        '800': '#262933',
                        '900': '#1E2129',
                        A100: '#C5C6CB',
                        A200: '#9EA1A9',
                        A400: '#5C616F',
                        A700: '#2D323E',
                        main: '#3C4252',
                        light: '#7D818C',
                        dark: '#2D323E',
                        contrastText: '#fff'
                    },
                    secondary: {
                        light: '#29b6f6',
                        main: '#039be5',
                        dark: '#0288d1',
                        contrastText: '#fff'
                    },
                    error: {
                        '50': '#ffebee',
                        '100': '#ffcdd2',
                        '200': '#ef9a9a',
                        '300': '#e57373',
                        '400': '#ef5350',
                        '500': '#f44336',
                        '600': '#e53935',
                        '700': '#d32f2f',
                        '800': '#c62828',
                        '900': '#b71c1c',
                        A100: '#ff8a80',
                        A200: '#ff5252',
                        A400: '#ff1744',
                        A700: '#d50000',
                        main: '#f44336',
                        light: '#e57373',
                        dark: '#d32f2f',
                        contrastText: '#fff'
                    },
                    grey: {
                        '50': '#fafafa',
                        '100': '#f5f5f5',
                        '200': '#eeeeee',
                        '300': '#e0e0e0',
                        '400': '#bdbdbd',
                        '500': '#9e9e9e',
                        '600': '#757575',
                        '700': '#616161',
                        '800': '#424242',
                        '900': '#212121',
                        A100: '#d5d5d5',
                        A200: '#aaaaaa',
                        A400: '#303030',
                        A700: '#616161'
                    },
                    contrastThreshold: 3,
                    tonalOffset: 0.2,
                    text: {
                        primary: 'rgba(0, 0, 0, 0.87)',
                        secondary: 'rgba(0, 0, 0, 0.54)',
                        disabled: 'rgba(0, 0, 0, 0.38)',
                        hint: 'rgba(0, 0, 0, 0.38)'
                    },
                    divider: 'rgba(0, 0, 0, 0.12)',
                    background: {
                        paper: '#fff',
                        'default': '#fafafa'
                    },
                    action: {
                        active: 'rgba(0, 0, 0, 0.54)',
                        hover: 'rgba(0, 0, 0, 0.08)',
                        hoverOpacity: 0.08,
                        selected: 'rgba(0, 0, 0, 0.14)',
                        disabled: 'rgba(0, 0, 0, 0.26)',
                        disabledBackground: 'rgba(0, 0, 0, 0.12)'
                    }
                },
                props: {},
                shadows: [
                    'none',
                    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
                ],
                typography: {
                    htmlFontSize: 10,
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontSize: 14,
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 600,
                    fontWeightBold: 700,
                    h1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '9.6rem',
                        lineHeight: 1
                    },
                    h2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 300,
                        fontSize: '6rem',
                        lineHeight: 1
                    },
                    h3: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '4.8rem',
                        lineHeight: 1.04
                    },
                    h4: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '3.4rem',
                        lineHeight: 1.17
                    },
                    h5: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '2.4rem',
                        lineHeight: 1.33
                    },
                    h6: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: 1.6
                    },
                    subtitle1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.6rem',
                        lineHeight: 1.75
                    },
                    subtitle2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.57
                    },
                    body1: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.5
                    },
                    body2: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.4rem',
                        lineHeight: 1.43
                    },
                    button: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        lineHeight: 1.75,
                        textTransform: 'uppercase'
                    },
                    caption: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 1.66
                    },
                    overline: {
                        fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        lineHeight: 2.66,
                        textTransform: 'uppercase'
                    },
                    useNextVariants: true,
                    suppressDeprecationWarnings: true
                },
                shape: {
                    borderRadius: 4
                },
                transitions: {
                    easing: {
                        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                    },
                    duration: {
                        shortest: 150,
                        shorter: 200,
                        'short': 250,
                        standard: 300,
                        complex: 375,
                        enteringScreen: 225,
                        leavingScreen: 195
                    }
                },
                zIndex: {
                    mobileStepper: 1000,
                    appBar: 1100,
                    drawer: 1200,
                    modal: 1300,
                    snackbar: 1400,
                    tooltip: 1500
                },
                status: {
                    danger: 'orange'
                }
            }
        },
        mainTheme: {
            breakpoints: {
                keys: [
                    'xs',
                    'sm',
                    'md',
                    'lg',
                    'xl'
                ],
                values: {
                    xs: 0,
                    sm: 600,
                    md: 960,
                    lg: 1280,
                    xl: 1920
                }
            },
            direction: 'ltr',
            mixins: {
                toolbar: {
                    minHeight: 56,
                    '@media (min-width:0px) and (orientation: landscape)': {
                        minHeight: 48
                    },
                    '@media (min-width:600px)': {
                        minHeight: 64
                    }
                }
            },
            overrides: {},
            palette: {
                common: {
                    black: '#000',
                    white: '#fff'
                },
                type: 'light',
                primary: {
                    '50': '#ECECEE',
                    '100': '#C5C6CB',
                    '200': '#9EA1A9',
                    '300': '#7D818C',
                    '400': '#5C616F',
                    '500': '#3C4252',
                    '600': '#353A48',
                    '700': '#2D323E',
                    '800': '#262933',
                    '900': '#1E2129',
                    A100: '#C5C6CB',
                    A200: '#9EA1A9',
                    A400: '#5C616F',
                    A700: '#2D323E',
                    main: '#3C4252',
                    light: '#7D818C',
                    dark: '#2D323E',
                    contrastText: '#fff'
                },
                secondary: {
                    light: '#29b6f6',
                    main: '#039be5',
                    dark: '#0288d1',
                    contrastText: '#fff'
                },
                error: {
                    '50': '#ffebee',
                    '100': '#ffcdd2',
                    '200': '#ef9a9a',
                    '300': '#e57373',
                    '400': '#ef5350',
                    '500': '#f44336',
                    '600': '#e53935',
                    '700': '#d32f2f',
                    '800': '#c62828',
                    '900': '#b71c1c',
                    A100: '#ff8a80',
                    A200: '#ff5252',
                    A400: '#ff1744',
                    A700: '#d50000',
                    main: '#f44336',
                    light: '#e57373',
                    dark: '#d32f2f',
                    contrastText: '#fff'
                },
                grey: {
                    '50': '#fafafa',
                    '100': '#f5f5f5',
                    '200': '#eeeeee',
                    '300': '#e0e0e0',
                    '400': '#bdbdbd',
                    '500': '#9e9e9e',
                    '600': '#757575',
                    '700': '#616161',
                    '800': '#424242',
                    '900': '#212121',
                    A100: '#d5d5d5',
                    A200: '#aaaaaa',
                    A400: '#303030',
                    A700: '#616161'
                },
                contrastThreshold: 3,
                tonalOffset: 0.2,
                text: {
                    primary: 'rgba(0, 0, 0, 0.87)',
                    secondary: 'rgba(0, 0, 0, 0.54)',
                    disabled: 'rgba(0, 0, 0, 0.38)',
                    hint: 'rgba(0, 0, 0, 0.38)'
                },
                divider: 'rgba(0, 0, 0, 0.12)',
                background: {
                    paper: '#fff',
                    'default': '#fafafa'
                },
                action: {
                    active: 'rgba(0, 0, 0, 0.54)',
                    hover: 'rgba(0, 0, 0, 0.08)',
                    hoverOpacity: 0.08,
                    selected: 'rgba(0, 0, 0, 0.14)',
                    disabled: 'rgba(0, 0, 0, 0.26)',
                    disabledBackground: 'rgba(0, 0, 0, 0.12)'
                }
            },
            props: {},
            shadows: [
                'none',
                '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
            ],
            typography: {
                htmlFontSize: 10,
                fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                fontSize: 14,
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 600,
                fontWeightBold: 700,
                h1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 300,
                    fontSize: '9.6rem',
                    lineHeight: 1
                },
                h2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 300,
                    fontSize: '6rem',
                    lineHeight: 1
                },
                h3: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '4.8rem',
                    lineHeight: 1.04
                },
                h4: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '3.4rem',
                    lineHeight: 1.17
                },
                h5: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '2.4rem',
                    lineHeight: 1.33
                },
                h6: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '2rem',
                    lineHeight: 1.6
                },
                subtitle1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.6rem',
                    lineHeight: 1.75
                },
                subtitle2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.57
                },
                body1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    lineHeight: 1.5
                },
                body2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    lineHeight: 1.43
                },
                button: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.75,
                    textTransform: 'uppercase'
                },
                caption: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    lineHeight: 1.66
                },
                overline: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    lineHeight: 2.66,
                    textTransform: 'uppercase'
                },
                useNextVariants: true,
                suppressDeprecationWarnings: true
            },
            shape: {
                borderRadius: 4
            },
            transitions: {
                easing: {
                    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                },
                duration: {
                    shortest: 150,
                    shorter: 200,
                    'short': 250,
                    standard: 300,
                    complex: 375,
                    enteringScreen: 225,
                    leavingScreen: 195
                }
            },
            zIndex: {
                mobileStepper: 1000,
                appBar: 1100,
                drawer: 1200,
                modal: 1300,
                snackbar: 1400,
                tooltip: 1500
            },
            status: {
                danger: 'orange'
            }
        },
        navbarTheme: {
            breakpoints: {
                keys: [
                    'xs',
                    'sm',
                    'md',
                    'lg',
                    'xl'
                ],
                values: {
                    xs: 0,
                    sm: 600,
                    md: 960,
                    lg: 1280,
                    xl: 1920
                }
            },
            direction: 'ltr',
            mixins: {
                toolbar: {
                    minHeight: 56,
                    '@media (min-width:0px) and (orientation: landscape)': {
                        minHeight: 48
                    },
                    '@media (min-width:600px)': {
                        minHeight: 64
                    }
                }
            },
            overrides: {},
            palette: {
                common: {
                    black: '#000',
                    white: '#fff'
                },
                type: 'dark',
                primary: {
                    '50': '#ECECEE',
                    '100': '#C5C6CB',
                    '200': '#9EA1A9',
                    '300': '#7D818C',
                    '400': '#5C616F',
                    '500': '#3C4252',
                    '600': '#353A48',
                    '700': '#2D323E',
                    '800': '#262933',
                    '900': '#1E2129',
                    A100: '#C5C6CB',
                    A200: '#9EA1A9',
                    A400: '#5C616F',
                    A700: '#2D323E',
                    main: '#3C4252',
                    light: '#7D818C',
                    dark: '#2D323E',
                    contrastText: '#fff'
                },
                secondary: {
                    light: '#29b6f6',
                    main: '#039be5',
                    dark: '#0288d1',
                    contrastText: '#fff'
                },
                error: {
                    '50': '#ffebee',
                    '100': '#ffcdd2',
                    '200': '#ef9a9a',
                    '300': '#e57373',
                    '400': '#ef5350',
                    '500': '#f44336',
                    '600': '#e53935',
                    '700': '#d32f2f',
                    '800': '#c62828',
                    '900': '#b71c1c',
                    A100: '#ff8a80',
                    A200: '#ff5252',
                    A400: '#ff1744',
                    A700: '#d50000',
                    main: '#f44336',
                    light: '#e57373',
                    dark: '#d32f2f',
                    contrastText: '#fff'
                },
                grey: {
                    '50': '#fafafa',
                    '100': '#f5f5f5',
                    '200': '#eeeeee',
                    '300': '#e0e0e0',
                    '400': '#bdbdbd',
                    '500': '#9e9e9e',
                    '600': '#757575',
                    '700': '#616161',
                    '800': '#424242',
                    '900': '#212121',
                    A100: '#d5d5d5',
                    A200: '#aaaaaa',
                    A400: '#303030',
                    A700: '#616161'
                },
                contrastThreshold: 3,
                tonalOffset: 0.2,
                text: {
                    primary: '#fff',
                    secondary: 'rgba(255, 255, 255, 0.7)',
                    disabled: 'rgba(255, 255, 255, 0.5)',
                    hint: 'rgba(255, 255, 255, 0.5)',
                    icon: 'rgba(255, 255, 255, 0.5)'
                },
                divider: 'rgba(255, 255, 255, 0.12)',
                background: {
                    paper: '#424242',
                    'default': '#303030'
                },
                action: {
                    active: '#fff',
                    hover: 'rgba(255, 255, 255, 0.1)',
                    hoverOpacity: 0.1,
                    selected: 'rgba(255, 255, 255, 0.2)',
                    disabled: 'rgba(255, 255, 255, 0.3)',
                    disabledBackground: 'rgba(255, 255, 255, 0.12)'
                }
            },
            props: {},
            shadows: [
                'none',
                '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
            ],
            typography: {
                htmlFontSize: 10,
                fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                fontSize: 14,
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 600,
                fontWeightBold: 700,
                h1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 300,
                    fontSize: '9.6rem',
                    lineHeight: 1
                },
                h2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 300,
                    fontSize: '6rem',
                    lineHeight: 1
                },
                h3: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '4.8rem',
                    lineHeight: 1.04
                },
                h4: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '3.4rem',
                    lineHeight: 1.17
                },
                h5: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '2.4rem',
                    lineHeight: 1.33
                },
                h6: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '2rem',
                    lineHeight: 1.6
                },
                subtitle1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.6rem',
                    lineHeight: 1.75
                },
                subtitle2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.57
                },
                body1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    lineHeight: 1.5
                },
                body2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    lineHeight: 1.43
                },
                button: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.75,
                    textTransform: 'uppercase'
                },
                caption: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    lineHeight: 1.66
                },
                overline: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    lineHeight: 2.66,
                    textTransform: 'uppercase'
                },
                useNextVariants: true,
                suppressDeprecationWarnings: true
            },
            shape: {
                borderRadius: 4
            },
            transitions: {
                easing: {
                    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                },
                duration: {
                    shortest: 150,
                    shorter: 200,
                    'short': 250,
                    standard: 300,
                    complex: 375,
                    enteringScreen: 225,
                    leavingScreen: 195
                }
            },
            zIndex: {
                mobileStepper: 1000,
                appBar: 1100,
                drawer: 1200,
                modal: 1300,
                snackbar: 1400,
                tooltip: 1500
            },
            status: {
                danger: 'orange'
            }
        },
        toolbarTheme: {
            breakpoints: {
                keys: [
                    'xs',
                    'sm',
                    'md',
                    'lg',
                    'xl'
                ],
                values: {
                    xs: 0,
                    sm: 600,
                    md: 960,
                    lg: 1280,
                    xl: 1920
                }
            },
            direction: 'ltr',
            mixins: {
                toolbar: {
                    minHeight: 56,
                    '@media (min-width:0px) and (orientation: landscape)': {
                        minHeight: 48
                    },
                    '@media (min-width:600px)': {
                        minHeight: 64
                    }
                }
            },
            overrides: {},
            palette: {
                common: {
                    black: '#000',
                    white: '#fff'
                },
                type: 'light',
                primary: {
                    '50': '#ECECEE',
                    '100': '#C5C6CB',
                    '200': '#9EA1A9',
                    '300': '#7D818C',
                    '400': '#5C616F',
                    '500': '#3C4252',
                    '600': '#353A48',
                    '700': '#2D323E',
                    '800': '#262933',
                    '900': '#1E2129',
                    A100: '#C5C6CB',
                    A200: '#9EA1A9',
                    A400: '#5C616F',
                    A700: '#2D323E',
                    main: '#3C4252',
                    light: '#7D818C',
                    dark: '#2D323E',
                    contrastText: '#fff'
                },
                secondary: {
                    light: '#29b6f6',
                    main: '#039be5',
                    dark: '#0288d1',
                    contrastText: '#fff'
                },
                error: {
                    '50': '#ffebee',
                    '100': '#ffcdd2',
                    '200': '#ef9a9a',
                    '300': '#e57373',
                    '400': '#ef5350',
                    '500': '#f44336',
                    '600': '#e53935',
                    '700': '#d32f2f',
                    '800': '#c62828',
                    '900': '#b71c1c',
                    A100: '#ff8a80',
                    A200: '#ff5252',
                    A400: '#ff1744',
                    A700: '#d50000',
                    main: '#f44336',
                    light: '#e57373',
                    dark: '#d32f2f',
                    contrastText: '#fff'
                },
                grey: {
                    '50': '#fafafa',
                    '100': '#f5f5f5',
                    '200': '#eeeeee',
                    '300': '#e0e0e0',
                    '400': '#bdbdbd',
                    '500': '#9e9e9e',
                    '600': '#757575',
                    '700': '#616161',
                    '800': '#424242',
                    '900': '#212121',
                    A100: '#d5d5d5',
                    A200: '#aaaaaa',
                    A400: '#303030',
                    A700: '#616161'
                },
                contrastThreshold: 3,
                tonalOffset: 0.2,
                text: {
                    primary: 'rgba(0, 0, 0, 0.87)',
                    secondary: 'rgba(0, 0, 0, 0.54)',
                    disabled: 'rgba(0, 0, 0, 0.38)',
                    hint: 'rgba(0, 0, 0, 0.38)'
                },
                divider: 'rgba(0, 0, 0, 0.12)',
                background: {
                    paper: '#fff',
                    'default': '#fafafa'
                },
                action: {
                    active: 'rgba(0, 0, 0, 0.54)',
                    hover: 'rgba(0, 0, 0, 0.08)',
                    hoverOpacity: 0.08,
                    selected: 'rgba(0, 0, 0, 0.14)',
                    disabled: 'rgba(0, 0, 0, 0.26)',
                    disabledBackground: 'rgba(0, 0, 0, 0.12)'
                }
            },
            props: {},
            shadows: [
                'none',
                '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
            ],
            typography: {
                htmlFontSize: 10,
                fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                fontSize: 14,
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 600,
                fontWeightBold: 700,
                h1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 300,
                    fontSize: '9.6rem',
                    lineHeight: 1
                },
                h2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 300,
                    fontSize: '6rem',
                    lineHeight: 1
                },
                h3: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '4.8rem',
                    lineHeight: 1.04
                },
                h4: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '3.4rem',
                    lineHeight: 1.17
                },
                h5: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '2.4rem',
                    lineHeight: 1.33
                },
                h6: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '2rem',
                    lineHeight: 1.6
                },
                subtitle1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.6rem',
                    lineHeight: 1.75
                },
                subtitle2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.57
                },
                body1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    lineHeight: 1.5
                },
                body2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    lineHeight: 1.43
                },
                button: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.75,
                    textTransform: 'uppercase'
                },
                caption: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    lineHeight: 1.66
                },
                overline: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    lineHeight: 2.66,
                    textTransform: 'uppercase'
                },
                useNextVariants: true,
                suppressDeprecationWarnings: true
            },
            shape: {
                borderRadius: 4
            },
            transitions: {
                easing: {
                    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                },
                duration: {
                    shortest: 150,
                    shorter: 200,
                    'short': 250,
                    standard: 300,
                    complex: 375,
                    enteringScreen: 225,
                    leavingScreen: 195
                }
            },
            zIndex: {
                mobileStepper: 1000,
                appBar: 1100,
                drawer: 1200,
                modal: 1300,
                snackbar: 1400,
                tooltip: 1500
            },
            status: {
                danger: 'orange'
            }
        },
        footerTheme: {
            breakpoints: {
                keys: [
                    'xs',
                    'sm',
                    'md',
                    'lg',
                    'xl'
                ],
                values: {
                    xs: 0,
                    sm: 600,
                    md: 960,
                    lg: 1280,
                    xl: 1920
                }
            },
            direction: 'ltr',
            mixins: {
                toolbar: {
                    minHeight: 56,
                    '@media (min-width:0px) and (orientation: landscape)': {
                        minHeight: 48
                    },
                    '@media (min-width:600px)': {
                        minHeight: 64
                    }
                }
            },
            overrides: {},
            palette: {
                common: {
                    black: '#000',
                    white: '#fff'
                },
                type: 'dark',
                primary: {
                    '50': '#ECECEE',
                    '100': '#C5C6CB',
                    '200': '#9EA1A9',
                    '300': '#7D818C',
                    '400': '#5C616F',
                    '500': '#3C4252',
                    '600': '#353A48',
                    '700': '#2D323E',
                    '800': '#262933',
                    '900': '#1E2129',
                    A100: '#C5C6CB',
                    A200: '#9EA1A9',
                    A400: '#5C616F',
                    A700: '#2D323E',
                    main: '#3C4252',
                    light: '#7D818C',
                    dark: '#2D323E',
                    contrastText: '#fff'
                },
                secondary: {
                    light: '#29b6f6',
                    main: '#039be5',
                    dark: '#0288d1',
                    contrastText: '#fff'
                },
                error: {
                    '50': '#ffebee',
                    '100': '#ffcdd2',
                    '200': '#ef9a9a',
                    '300': '#e57373',
                    '400': '#ef5350',
                    '500': '#f44336',
                    '600': '#e53935',
                    '700': '#d32f2f',
                    '800': '#c62828',
                    '900': '#b71c1c',
                    A100: '#ff8a80',
                    A200: '#ff5252',
                    A400: '#ff1744',
                    A700: '#d50000',
                    main: '#f44336',
                    light: '#e57373',
                    dark: '#d32f2f',
                    contrastText: '#fff'
                },
                grey: {
                    '50': '#fafafa',
                    '100': '#f5f5f5',
                    '200': '#eeeeee',
                    '300': '#e0e0e0',
                    '400': '#bdbdbd',
                    '500': '#9e9e9e',
                    '600': '#757575',
                    '700': '#616161',
                    '800': '#424242',
                    '900': '#212121',
                    A100: '#d5d5d5',
                    A200: '#aaaaaa',
                    A400: '#303030',
                    A700: '#616161'
                },
                contrastThreshold: 3,
                tonalOffset: 0.2,
                text: {
                    primary: '#fff',
                    secondary: 'rgba(255, 255, 255, 0.7)',
                    disabled: 'rgba(255, 255, 255, 0.5)',
                    hint: 'rgba(255, 255, 255, 0.5)',
                    icon: 'rgba(255, 255, 255, 0.5)'
                },
                divider: 'rgba(255, 255, 255, 0.12)',
                background: {
                    paper: '#424242',
                    'default': '#303030'
                },
                action: {
                    active: '#fff',
                    hover: 'rgba(255, 255, 255, 0.1)',
                    hoverOpacity: 0.1,
                    selected: 'rgba(255, 255, 255, 0.2)',
                    disabled: 'rgba(255, 255, 255, 0.3)',
                    disabledBackground: 'rgba(255, 255, 255, 0.12)'
                }
            },
            props: {},
            shadows: [
                'none',
                '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
            ],
            typography: {
                htmlFontSize: 10,
                fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                fontSize: 14,
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 600,
                fontWeightBold: 700,
                h1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 300,
                    fontSize: '9.6rem',
                    lineHeight: 1
                },
                h2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 300,
                    fontSize: '6rem',
                    lineHeight: 1
                },
                h3: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '4.8rem',
                    lineHeight: 1.04
                },
                h4: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '3.4rem',
                    lineHeight: 1.17
                },
                h5: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '2.4rem',
                    lineHeight: 1.33
                },
                h6: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '2rem',
                    lineHeight: 1.6
                },
                subtitle1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.6rem',
                    lineHeight: 1.75
                },
                subtitle2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.57
                },
                body1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    lineHeight: 1.5
                },
                body2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    lineHeight: 1.43
                },
                button: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.75,
                    textTransform: 'uppercase'
                },
                caption: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    lineHeight: 1.66
                },
                overline: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    lineHeight: 2.66,
                    textTransform: 'uppercase'
                },
                useNextVariants: true,
                suppressDeprecationWarnings: true
            },
            shape: {
                borderRadius: 4
            },
            transitions: {
                easing: {
                    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                },
                duration: {
                    shortest: 150,
                    shorter: 200,
                    'short': 250,
                    standard: 300,
                    complex: 375,
                    enteringScreen: 225,
                    leavingScreen: 195
                }
            },
            zIndex: {
                mobileStepper: 1000,
                appBar: 1100,
                drawer: 1200,
                modal: 1300,
                snackbar: 1400,
                tooltip: 1500
            },
            status: {
                danger: 'orange'
            }
        },
        mainThemeDark: {
            breakpoints: {
                keys: [
                    'xs',
                    'sm',
                    'md',
                    'lg',
                    'xl'
                ],
                values: {
                    xs: 0,
                    sm: 600,
                    md: 960,
                    lg: 1280,
                    xl: 1920
                }
            },
            direction: 'ltr',
            mixins: {
                toolbar: {
                    minHeight: 56,
                    '@media (min-width:0px) and (orientation: landscape)': {
                        minHeight: 48
                    },
                    '@media (min-width:600px)': {
                        minHeight: 64
                    }
                }
            },
            overrides: {},
            palette: {
                common: {
                    black: '#000',
                    white: '#fff'
                },
                type: 'dark',
                primary: {
                    '50': '#ECECEE',
                    '100': '#C5C6CB',
                    '200': '#9EA1A9',
                    '300': '#7D818C',
                    '400': '#5C616F',
                    '500': '#3C4252',
                    '600': '#353A48',
                    '700': '#2D323E',
                    '800': '#262933',
                    '900': '#1E2129',
                    A100: '#C5C6CB',
                    A200: '#9EA1A9',
                    A400: '#5C616F',
                    A700: '#2D323E',
                    main: '#3C4252',
                    light: '#7D818C',
                    dark: '#2D323E',
                    contrastText: '#fff'
                },
                secondary: {
                    light: '#29b6f6',
                    main: '#039be5',
                    dark: '#0288d1',
                    contrastText: '#fff'
                },
                error: {
                    '50': '#ffebee',
                    '100': '#ffcdd2',
                    '200': '#ef9a9a',
                    '300': '#e57373',
                    '400': '#ef5350',
                    '500': '#f44336',
                    '600': '#e53935',
                    '700': '#d32f2f',
                    '800': '#c62828',
                    '900': '#b71c1c',
                    A100: '#ff8a80',
                    A200: '#ff5252',
                    A400: '#ff1744',
                    A700: '#d50000',
                    main: '#f44336',
                    light: '#e57373',
                    dark: '#d32f2f',
                    contrastText: '#fff'
                },
                grey: {
                    '50': '#fafafa',
                    '100': '#f5f5f5',
                    '200': '#eeeeee',
                    '300': '#e0e0e0',
                    '400': '#bdbdbd',
                    '500': '#9e9e9e',
                    '600': '#757575',
                    '700': '#616161',
                    '800': '#424242',
                    '900': '#212121',
                    A100: '#d5d5d5',
                    A200: '#aaaaaa',
                    A400: '#303030',
                    A700: '#616161'
                },
                contrastThreshold: 3,
                tonalOffset: 0.2,
                text: {
                    primary: '#fff',
                    secondary: 'rgba(255, 255, 255, 0.7)',
                    disabled: 'rgba(255, 255, 255, 0.5)',
                    hint: 'rgba(255, 255, 255, 0.5)',
                    icon: 'rgba(255, 255, 255, 0.5)'
                },
                divider: 'rgba(255, 255, 255, 0.12)',
                background: {
                    paper: '#424242',
                    'default': '#303030'
                },
                action: {
                    active: '#fff',
                    hover: 'rgba(255, 255, 255, 0.1)',
                    hoverOpacity: 0.1,
                    selected: 'rgba(255, 255, 255, 0.2)',
                    disabled: 'rgba(255, 255, 255, 0.3)',
                    disabledBackground: 'rgba(255, 255, 255, 0.12)'
                }
            },
            props: {},
            shadows: [
                'none',
                '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
            ],
            typography: {
                htmlFontSize: 10,
                fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                fontSize: 14,
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 600,
                fontWeightBold: 700,
                h1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 300,
                    fontSize: '9.6rem',
                    lineHeight: 1
                },
                h2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 300,
                    fontSize: '6rem',
                    lineHeight: 1
                },
                h3: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '4.8rem',
                    lineHeight: 1.04
                },
                h4: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '3.4rem',
                    lineHeight: 1.17
                },
                h5: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '2.4rem',
                    lineHeight: 1.33
                },
                h6: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '2rem',
                    lineHeight: 1.6
                },
                subtitle1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.6rem',
                    lineHeight: 1.75
                },
                subtitle2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.57
                },
                body1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    lineHeight: 1.5
                },
                body2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    lineHeight: 1.43
                },
                button: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.75,
                    textTransform: 'uppercase'
                },
                caption: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    lineHeight: 1.66
                },
                overline: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    lineHeight: 2.66,
                    textTransform: 'uppercase'
                },
                useNextVariants: true,
                suppressDeprecationWarnings: true
            },
            shape: {
                borderRadius: 4
            },
            transitions: {
                easing: {
                    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                },
                duration: {
                    shortest: 150,
                    shorter: 200,
                    'short': 250,
                    standard: 300,
                    complex: 375,
                    enteringScreen: 225,
                    leavingScreen: 195
                }
            },
            zIndex: {
                mobileStepper: 1000,
                appBar: 1100,
                drawer: 1200,
                modal: 1300,
                snackbar: 1400,
                tooltip: 1500
            },
            status: {
                danger: 'orange'
            }
        },
        mainThemeLight: {
            breakpoints: {
                keys: [
                    'xs',
                    'sm',
                    'md',
                    'lg',
                    'xl'
                ],
                values: {
                    xs: 0,
                    sm: 600,
                    md: 960,
                    lg: 1280,
                    xl: 1920
                }
            },
            direction: 'ltr',
            mixins: {
                toolbar: {
                    minHeight: 56,
                    '@media (min-width:0px) and (orientation: landscape)': {
                        minHeight: 48
                    },
                    '@media (min-width:600px)': {
                        minHeight: 64
                    }
                }
            },
            overrides: {},
            palette: {
                common: {
                    black: '#000',
                    white: '#fff'
                },
                type: 'light',
                primary: {
                    '50': '#ECECEE',
                    '100': '#C5C6CB',
                    '200': '#9EA1A9',
                    '300': '#7D818C',
                    '400': '#5C616F',
                    '500': '#3C4252',
                    '600': '#353A48',
                    '700': '#2D323E',
                    '800': '#262933',
                    '900': '#1E2129',
                    A100: '#C5C6CB',
                    A200: '#9EA1A9',
                    A400: '#5C616F',
                    A700: '#2D323E',
                    main: '#3C4252',
                    light: '#7D818C',
                    dark: '#2D323E',
                    contrastText: '#fff'
                },
                secondary: {
                    light: '#29b6f6',
                    main: '#039be5',
                    dark: '#0288d1',
                    contrastText: '#fff'
                },
                error: {
                    '50': '#ffebee',
                    '100': '#ffcdd2',
                    '200': '#ef9a9a',
                    '300': '#e57373',
                    '400': '#ef5350',
                    '500': '#f44336',
                    '600': '#e53935',
                    '700': '#d32f2f',
                    '800': '#c62828',
                    '900': '#b71c1c',
                    A100: '#ff8a80',
                    A200: '#ff5252',
                    A400: '#ff1744',
                    A700: '#d50000',
                    main: '#f44336',
                    light: '#e57373',
                    dark: '#d32f2f',
                    contrastText: '#fff'
                },
                grey: {
                    '50': '#fafafa',
                    '100': '#f5f5f5',
                    '200': '#eeeeee',
                    '300': '#e0e0e0',
                    '400': '#bdbdbd',
                    '500': '#9e9e9e',
                    '600': '#757575',
                    '700': '#616161',
                    '800': '#424242',
                    '900': '#212121',
                    A100: '#d5d5d5',
                    A200: '#aaaaaa',
                    A400: '#303030',
                    A700: '#616161'
                },
                contrastThreshold: 3,
                tonalOffset: 0.2,
                text: {
                    primary: 'rgba(0, 0, 0, 0.87)',
                    secondary: 'rgba(0, 0, 0, 0.54)',
                    disabled: 'rgba(0, 0, 0, 0.38)',
                    hint: 'rgba(0, 0, 0, 0.38)'
                },
                divider: 'rgba(0, 0, 0, 0.12)',
                background: {
                    paper: '#fff',
                    'default': '#fafafa'
                },
                action: {
                    active: 'rgba(0, 0, 0, 0.54)',
                    hover: 'rgba(0, 0, 0, 0.08)',
                    hoverOpacity: 0.08,
                    selected: 'rgba(0, 0, 0, 0.14)',
                    disabled: 'rgba(0, 0, 0, 0.26)',
                    disabledBackground: 'rgba(0, 0, 0, 0.12)'
                }
            },
            props: {},
            shadows: [
                'none',
                '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
                '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
                '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
                '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
                '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
                '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
                '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
                '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
                '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
                '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
                '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
                '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
                '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
                '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
                '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
                '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
                '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
                '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
                '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
                '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
            ],
            typography: {
                htmlFontSize: 10,
                fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                fontSize: 14,
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 600,
                fontWeightBold: 700,
                h1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 300,
                    fontSize: '9.6rem',
                    lineHeight: 1
                },
                h2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 300,
                    fontSize: '6rem',
                    lineHeight: 1
                },
                h3: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '4.8rem',
                    lineHeight: 1.04
                },
                h4: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '3.4rem',
                    lineHeight: 1.17
                },
                h5: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '2.4rem',
                    lineHeight: 1.33
                },
                h6: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '2rem',
                    lineHeight: 1.6
                },
                subtitle1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.6rem',
                    lineHeight: 1.75
                },
                subtitle2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.57
                },
                body1: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    lineHeight: 1.5
                },
                body2: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.4rem',
                    lineHeight: 1.43
                },
                button: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.75,
                    textTransform: 'uppercase'
                },
                caption: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    lineHeight: 1.66
                },
                overline: {
                    fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    lineHeight: 2.66,
                    textTransform: 'uppercase'
                },
                useNextVariants: true,
                suppressDeprecationWarnings: true
            },
            shape: {
                borderRadius: 4
            },
            transitions: {
                easing: {
                    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
                    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
                },
                duration: {
                    shortest: 150,
                    shorter: 200,
                    'short': 250,
                    standard: 300,
                    complex: 375,
                    enteringScreen: 225,
                    leavingScreen: 195
                }
            },
            zIndex: {
                mobileStepper: 1000,
                appBar: 1100,
                drawer: 1200,
                modal: 1300,
                snackbar: 1400,
                tooltip: 1500
            },
            status: {
                danger: 'orange'
            }
        }
    },
    navbar: {
        foldedOpen: false,
        mobileOpen: false
    },
    message: {
        state: null,
        options: {
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
            },
            autoHideDuration: 6000,
            message: 'Hi',
            variant: null
        }
    },
    dialog: {
        state: false,
        options: {
            children: 'Hi'
        }
    },
    routes: {},
    analyticsDashboardApp: {
        widgets: {
            data: null
        }
    }
}

export default Fuse;
