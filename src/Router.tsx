import { Switch, BrowserRouter, Route } from "react-router-dom";
import Welcome from "./route/Welcome";
import Login from "./route/Login";
import Main from "./route/Main/Main";
import NotFound from "./route/NotFound";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Welcome></Welcome>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/main/:teamName" component={Main}>
          <Main></Main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
