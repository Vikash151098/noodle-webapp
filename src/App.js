import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BrandsByCountry from "./components/Brands/BrandsByCountry";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Home from "./routes/Home";
import { getBrands } from "./services/brandsServices";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, [])
  return (
    <>
      <Header />
      <main style={{ marginTop: "80px" }} className="text-center">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:country" component={BrandsByCountry} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
