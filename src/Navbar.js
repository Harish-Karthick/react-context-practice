import React, { Component } from "react";
import "flag-icon-css/css/flag-icon.min.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { ThemeContext } from "./context/ThemeContext";
import { withLangugageContext } from "./context/LanguageContext";
import styles from "./styles/NavBarStyles";

const textContent = {
  english: {
    search: "Search",
    flagIconClass: "flag-icon flag-icon-gb flag-icon-squared",
  },
  french: {
    search: "Chercher",
    flagIconClass: "flag-icon flag-icon-fr flag-icon-squared",
  },
  spanish: {
    search: "Buscar",
    flagIconClass: "flag-icon flag-icon-es flag-icon-squared",
  },
};

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { classes } = this.props;
    const { isDarkMode, toggleTheme } = this.context;
    const { language } = this.props.languageContext;
    const { search, flagIconClass } = textContent[language];
    return (
      <div className={classes.root}>
        <AppBar position='static' color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span className={flagIconClass}></span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withLangugageContext(withStyles(styles)(Navbar));
