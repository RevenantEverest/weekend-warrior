/* COLORS */
export interface MDBThemeColors {
    primary: string
};

export interface CommonThemeColors {
    primary: string,
    secondary: string,
    mdb: MDBThemeColors
};

export interface ThemeColors extends CommonThemeColors {
    dark: string,
    darkLight: string,
    background: string,
    card: string,
    cardLight: string,
    cardDark: string,
    button: string,
    text: string,
    mutedText: string
};

/* GRADIENTS */
export interface CommonThemeGradients {
    primary: string,
    secondary: string
};

export interface ThemeGradients extends CommonThemeGradients {

};

/* CLASSNAMES */
export interface CommonThemeClassNames {

};

export interface ThemeClassNames extends CommonThemeClassNames {
    
};

/* MAIN */
export interface Theme {
    name: string,
    maskStrength: "light" | "slight" | "strong",
    colors: ThemeColors,
    gradients: ThemeGradients,
    classNames: ThemeClassNames
}