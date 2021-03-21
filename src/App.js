import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import "./tailwind.output.css"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import MainPage from "./pages/MainPage"
import CategoryPage from "./pages/CategoryPage"
import TagsPage from "./pages/TagsPage"
import EventPage from "./pages/EventPage"
import Politics from "./components/politics/Politics.js"
import Collaboration from "./components/collaboration/Collaboration.js"
import Contacts from "./components/contacts/Contacts.js"
import OrderPage from "./pages/OrderPage"
import Footer from "./components/footer/Footer.js"
import logo from "./images/logo.png"
import TestPage from "./pages/TestPage"

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <React.StrictMode>
                <Router>
                    <div className="mb-3 flex items-center border">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="logo"
                                className="justify-self-start"
                                style={{ width: 159 }}
                            />
                        </Link>
                        <h3 className="m-auto">Здесь будет хэдэр</h3>
                    </div>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route
                            path="/categories/:id"
                            component={CategoryPage}
                        />
                        <Route path="/tags" component={TagsPage} />
                        <Route path="/event" component={EventPage} />
                        <Route path="/politics" component={Politics} />
                        <Route
                            path="/collaboration"
                            component={Collaboration}
                        />
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/order" component={OrderPage} />
                        <Route path="/test" component={TestPage} />
                    </Switch>
                    <Footer />
                </Router>
            </React.StrictMode>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default App
