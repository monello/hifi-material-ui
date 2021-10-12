import React, { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";

import { LoremIpsum } from "react-lorem-ipsum";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path="/" component={TempHomePage}></Route>
          <Route exact path="/services" component={TempServicesPage}></Route>
          <Route
            exact
            path="/customsoftware"
            component={TempCustomSoftwarePage}
          ></Route>
          <Route
            exact
            path="/mobileapps"
            component={TempMobileAppsPage}
          ></Route>
          <Route exact path="/websites" component={TempWebsitesPage}></Route>
          <Route
            exact
            path="/revolution"
            component={TempRevolutionPage}
          ></Route>
          <Route exact path="/about" component={TempAboutPage}></Route>
          <Route exact path="/contact" component={TempContactPage}></Route>
          <Route
            exact
            path="/estimate"
            component={TempFreeEstimatestPage}
          ></Route>
        </Switch>
        <Footer
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

const TempHomePage = () => (
  <div>
    <h1>Home Page</h1>
    <LoremIpsum p={6} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
  </div>
);

const TempServicesPage = () => (
  <div>
    <h1>Services Page</h1>
    <LoremIpsum p={6} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
  </div>
);

const TempCustomSoftwarePage = () => (
  <div>
    <h1>Custom Software Page</h1>
    <LoremIpsum p={6} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
  </div>
);
const TempMobileAppsPage = () => (
  <div>
    <h1>Modile Apps Page</h1>
    <LoremIpsum p={6} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
  </div>
);
const TempWebsitesPage = () => (
  <div>
    <h1>Websites Page</h1>
    <LoremIpsum p={6} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
  </div>
);
const TempRevolutionPage = () => (
  <div>
    <h1>The Revolution Page</h1>
    <LoremIpsum p={6} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
  </div>
);
const TempAboutPage = () => (
  <div>
    <h1>About Page</h1>
    <LoremIpsum p={6} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
  </div>
);

const TempContactPage = () => (
  <div>
    <h1>Contact Page</h1>
    <LoremIpsum p={6} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
  </div>
);

const TempFreeEstimatestPage = () => (
  <div>
    <h1>Free Estimates Page</h1>
    <LoremIpsum p={6} avgWordsPerSentence={10} avgSentencesPerParagraph={10} />
  </div>
);

export default App;
