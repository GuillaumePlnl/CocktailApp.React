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
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };

  const defaultTheme = {
    themeName: null,
    theme: null,
    toggleTheme: null,
  }


  export const ThemeContext = React.createContext(defaultTheme);

