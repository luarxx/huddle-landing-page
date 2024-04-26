import "./App.css";
import { Content } from "./components/content";
import { Header } from "./components/header/header";
import { MidImages } from "./components/midImages";

function App() {
  return (
    <div className="sm:flex sm:flex-row h-screen sm:h-screen bg-background-mobile sm:bg-background-desktop bg-no-repeat bg-Violet">
      <Header />
      <MidImages />
      <Content />
    </div>
  );
}

export default App;
