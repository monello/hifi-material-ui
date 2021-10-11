import React from 'react';
import Header from "./ui/Header";
import Footer from './ui/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div style={{ height: "900px" }}>Home Page<p>Foo</p></div>}></Route>
          <Route exact path="/services" component={() => <div>Services Page</div>}></Route>
          <Route exact path="/customsoftware" component={() => <div>Custom Software Page</div>}></Route>
          <Route exact path="/mobileapps" component={() => <div>Mobile Apps Page</div>}></Route>
          <Route exact path="/websites" component={() => <div>Websites Page</div>}></Route>
          <Route exact path="/revolution" component={() => <div>The Revolution Page</div>}></Route>
          <Route exact path="/about" component={() => <div>About Us Page</div>}></Route>
          <Route exact path="/contact" component={() => <div>Contact Us Page</div>}></Route>
          <Route exact path="/estimate" component={() => <div>Free Estimates Page</div>}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
