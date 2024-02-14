import { Switch, BrowserRouter, Route } from "react-router-dom";
import Welcome from "./route/Welcome";
import Login from "./route/Login";
import Main from "./route/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome></Welcome>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/main">
          <Main></Main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
