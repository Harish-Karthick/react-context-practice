import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "english",
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage(inputLanguage) {
    this.setState({ language: inputLanguage });
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export const withLangugageContext = (Component) => (props) => {
  return (
    <LanguageContext.Consumer>
      {(value) => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
  );
};
