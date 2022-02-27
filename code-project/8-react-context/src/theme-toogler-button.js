import {ThemeContext} from './theme-context'

function ThemeTooglerButton() {
    return(
        <ThemeContext.Consumer>
            {({theme, toogleTheme}) => (
                <button onClick={toogleTheme}
                  style={{backgroundColor: theme.background}}>
                    Toogle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    )
}