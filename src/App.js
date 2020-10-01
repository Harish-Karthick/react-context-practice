// eslint-disable-next-line
import React, { Component } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import PageContent from "./PageContent";
import Navbar from "./Navbar";
import Form from "./Form";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}
// class App extends Component {
//   render() {
//     return (
//       <ThemeProvider>
//         <LanguageProvider>
//           <PageContent>
//             <Navbar />
//             <Form />
//           </PageContent>
//         </LanguageProvider>
//       </ThemeProvider>
//     );
//   }
// }

// export default App;
