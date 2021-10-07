import Header from "./ui/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route extact path="/" component={() => <div>Home Page</div>}></Route>
          <Route extact path="/services" component={() => <div>Services Page</div>}></Route>
          <Route extact path="/customsoftware" component={() => <div>Custom Software Page</div>}></Route>
          <Route extact path="/mobileapps" component={() => <div>Mobile Apps Page</div>}></Route>
          <Route extact path="/websites" component={() => <div>Websites Page</div>}></Route>
          <Route extact path="/revolution" component={() => <div>The Revolution Page</div>}></Route>
          <Route extact path="/about" component={() => <div>About Us Page</div>}></Route>
          <Route extact path="/contact" component={() => <div>Contact Us Page</div>}></Route>
          <Route extact path="/estimate" component={() => <div>Free Estimates Page</div>}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
