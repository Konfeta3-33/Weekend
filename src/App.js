import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./tailwind.output.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import TagsPage from "./pages/TagsPage";
import ServicePage from "./pages/ServicePage";
import Politics from "./components/politics/Politics.js";
import Collaboration from "./components/collaboration/Collaboration.js";
import Contacts from "./components/contacts/Contacts.js";
import OrderPage from "./pages/OrderPage";
import CollaborationForm from "./components/collaboration/CollaborationForm.js";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header";
import Modal from "./components/Modal";
import PopUp from "./components/PopUp";
import SearchPage from './pages/SearchPage';
import Favorites from "./components/Favorites";

const queryClient = new QueryClient();

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [city, setCity] = useState(null);
  const [favorites, setFavorites] = useState(() => Cookies.getJSON("favorites") || []);

  useEffect(() => {
    if (Cookies.getJSON("city") === void 0) {
      setModalActive(true);
    } else {
      setCity(Cookies.getJSON("city"));
    }
  }, []);

  useEffect(() => {
    if (city) {
      Cookies.set("city", city, { expires: 180 });
    }
  }, [city]);

  const toggleFavorites = (event, item) => {
    event.stopPropagation();
    const alreadyFavorite = favorites.indexOf(item.id) > -1;
    const newFavorites = alreadyFavorite ? favorites.filter((id) => id !== item.id) : [...favorites, item.id];
    setFavorites(newFavorites);
  };

  useEffect(() => {
    Cookies.set("favorites", JSON.stringify(favorites), { expires: 180 });
  }, [favorites]);

  return (
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <Router>
          <Header city={city} setCity={setCity}/>
          <Modal active={modalActive} setActive={setModalActive}>
            <PopUp setActive={setModalActive} setCity={setCity}/>
          </Modal>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/categories/:id"
                   component={() => CategoryPage(toggleFavorites, favorites)}/>
            <Route path="/tags/:id" component={() => TagsPage(toggleFavorites, favorites)}/>
            <Route path="/service/:id" component={() => ServicePage(toggleFavorites, favorites)}/>
            <Route path="/politics" component={Politics}/>
            <Route path="/collaboration" component={Collaboration}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/order/:id" component={OrderPage}/>
            <Route path="/favorites" component={() => <Favorites toggleFavorites={toggleFavorites} favorites={favorites}/>}/>
            <Route path="/collaborationForm" component={CollaborationForm}/>
            <Route path="/services/:name" component={() => SearchPage(toggleFavorites, favorites)}/>
          </Switch>
          <Footer/>
        </Router>
      </React.StrictMode>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
