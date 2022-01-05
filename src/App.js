import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import ContactDetails from "./container/Contacts/ContactDetails";
import About from "./routes/About";
import Contacts from "./routes/Contacts";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Header />
      <main style={{ marginTop: "80px" }} className="text-center">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts}></Route>
          <Route path="/contacts/:id" component={ContactDetails}></Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
