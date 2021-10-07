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
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
