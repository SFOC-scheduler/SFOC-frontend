import { Switch, BrowserRouter, Route } from "react-router-dom";
import Welcome from "./route/Welcome";
import Login from "./route/Login";
import Main from "./route/Main";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Main></Main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
