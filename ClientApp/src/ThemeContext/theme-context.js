import React from 'react';


// function ThemeTogglerButton() {
//   return(
//     <ThemeContext.Consumer>
//       {({theme, toggleTheme}) => (
//         <button
//           onClick={toggleTheme}
//           style={{backgroundColor: theme.background}}>
//           Toggle Theme
//         </button>
//       )}
//     </ThemeContext.Consumer>
//   );
// }
//export default ThemeTogglerButton;



export const themes = {
    light: {
      foreground: '#25221c',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#3a342c',
      background: '#d3d3d3',
    },
  };
//#3a342c
  const defaultTheme = {
    themeName: themes.light,
    theme: themes.light,
    toggleTheme: null,
  }


  export const ThemeContext = React.createContext(defaultTheme);

