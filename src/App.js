import React from "react";
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
import Favorites from "./components/Favorites/Favorites.js";
import Footer from "./components/footer/Footer.js";
import TestPage from "./pages/TestPage";
import Header from "./components/header/Header";

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
            <Route path="/tags/:id" component={TagsPage}/>
            <Route path="/service/:id" component={ServicePage}/>
            <Route path="/politics" component={Politics}/>
            <Route path="/collaboration" component={Collaboration}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/order" component={OrderPage} />
            <Route path="/favorites" component={Favorites}/>
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
