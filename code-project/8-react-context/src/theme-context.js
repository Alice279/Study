import React from "react";

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark, //默认值，当Provider里没有赋值时才会使用默认值
    toogleTheme: () => {},
})