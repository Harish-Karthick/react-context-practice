// eslint-disable-next-line
import React, { Component, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function PageContent({ children }) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    width: "100vw",
    height: "100vh",
    backgroundColor: isDarkMode ? "#212121" : "#efefef",
  };
  return <div style={styles}>{children}</div>;
}
// export default class PageContent extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isDarkMode } = this.context;
//     const styles = {
//       width: "100vw",
//       height: "100vh",
//       backgroundColor: isDarkMode ? "#212121" : "#efefef",
//     };
//     return <div style={styles}>{this.props.children}</div>;
//   }
// }
