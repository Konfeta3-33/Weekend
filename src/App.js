import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./tailwind.output.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import TagsPage from "./pages/TagsPage";
import EventPage from "./pages/EventPage";
import Politics from "./components/politics/Politics.js";
import Collaboration from "./components/collaboration/Collaboration.js";
import Contacts from "./components/contacts/Contacts.js";
import OrderPage from "./pages/OrderPage";
import Favorites from "./components/Favorites/Favorites.js";
import CollaborationForm from "./components/collaboration/CollaborationForm.js";
import Footer from "./components/footer/Footer.js";
import TestPage from "./pages/TestPage";
import Header from "./components/header/Header";
import Modal from "./components/Modal";
import PopUp from "./components/PopUp";

const queryClient = new QueryClient()

function App() {
  const [modalActive, setModalActive] = useState(false);
  
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (Cookies.getJSON("city") === void 0) {
      setModalActive(true);
    } else {
      setCity(Cookies.getJSON("city"));
    }
  }, []);

  useEffect(() => {
    if (city !== null) {
      Cookies.set("city", city, { expires: 10 });
    }
  }, [city]);

  return (
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <Router>
          <Header city={city} setCity={setCity} />
          <Modal active={modalActive} setActive={setModalActive}>
            <PopUp setActive={setModalActive} setCity={setCity} />
          </Modal>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/categories/:id" component={CategoryPage}/>
            <Route path="/tags/:id" component={TagsPage}/>
            <Route path="/event/:id" component={EventPage}/>
            <Route path="/politics" component={Politics}/>
            <Route path="/collaboration" component={Collaboration}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/order" component={OrderPage} />
            <Route path="/favorites" component={Favorites}/>
            <Route path="/collaborationForm" component={CollaborationForm}/>
            <Route path="/test" component={TestPage} />
          </Switch>
          <Footer/>
        </Router>
      </React.StrictMode>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App
