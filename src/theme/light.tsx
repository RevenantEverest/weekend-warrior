import common from './common';

import { ThemeColors, ThemeClassNames, ThemeGradients, Theme } from '../types/theme';

const colors: ThemeColors = {
    ...common.colors,
    dark: "",
    darkLight: "",
    background: "",
    card: "",
    cardLight: "",
    cardDark: "",
    button: "",
    text: "",
    mutedText: ""
};

const classNames: ThemeClassNames = {
    ...common.classNames
};

const gradients: ThemeGradients = {
    primary: `linear-gradient(40deg, ${colors.secondary}, ${colors.primary})`,
    secondary: `linear-gradient(40deg, ${colors.secondary}, ${colors.primary})`
};

const lightTheme: Theme = {
    name: "light",
    maskStrength: "light",
    colors,
    gradients,
    classNames
};

export default lightTheme;