// eslint-disable-next-line
import React, { Component, createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!isDarkMode);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// export class ThemeProvider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDarkMode: true,
//     };
//     this.toggleTheme = this.toggleTheme.bind(this);
//   }
//   toggleTheme() {
//     this.setState((st) => ({
//       isDarkMode: !st.isDarkMode,
//     }));
//   }
//   render() {
//     return (
//       <ThemeContext.Provider
//         value={{ ...this.state, toggleTheme: this.toggleTheme }}
//       >
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }
