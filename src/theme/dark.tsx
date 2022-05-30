import common from './common';

import { ThemeColors, ThemeClassNames, ThemeGradients, Theme } from '../types/theme';

const colors: ThemeColors = {
    ...common.colors,
    dark: "#0a0a0a",
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

const darkTheme: Theme = {
    name: "dark",
    maskStrength: "strong",
    colors,
    gradients,
    classNames
};

export default darkTheme;