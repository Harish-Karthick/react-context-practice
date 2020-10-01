import React, { Component } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      width: "100vw",
      height: "100vh",
      backgroundColor: isDarkMode ? "#212121" : "#efefef",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}
