import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

import './App.css';

function App() {
  const name = "Feisbrut";
  const nav = [
    { link: "/", label: "Home" },
    { link: "/messages", label: "Messages" },
    { link: "/friends", label: "Friends" },
  ];

  return (
    <div>
       <Header name={name} links={nav} />
       <Home />
      <Footer />
      
    </div>
  );
}

export default App;
