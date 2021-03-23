import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
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
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import logo from "./images/logo.png";
import { CookiesProvider } from 'react-cookie';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/categories/:id" component={CategoryPage}/>
            <Route path="/tags" component={TagsPage}/>
            <Route path="/event" component={EventPage}/>
            <Route path="/politics" component={Politics}/>
            <Route path="/collaboration" component={Collaboration}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/order" component={OrderPage} />
            <Route path="/favorites" component={Favorites}/>
          </Switch>
          <Footer/>
        </Router>
      </React.StrictMode>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App
