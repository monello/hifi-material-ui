import Header from "./ui/Header";

// Temp import, just for testing
import { LoremIpsum } from "react-lorem-ipsum";

function App() {
  return (
    <div className="App">
      <Header />
      <LoremIpsum
        p={50}
        avgWordsPerSentence={10}
        avgSentencesPerParagraph={10}
      />
    </div>
  );
}

export default App;
