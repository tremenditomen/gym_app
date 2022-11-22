import "./App.css";
import Header from "./components/header";
import {Body,Form} from "./components/body";
import Footer from "./components/footer";

function App() {
  return (
    <div className=" flex flex-col justify-between px-8 pb-8 h-screen">
      <Header />
      <Body />
      <Form />
      <Footer />

    </div>
   
  );
}

export default App;
