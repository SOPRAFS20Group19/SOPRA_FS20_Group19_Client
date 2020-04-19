import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { GameGuard } from "../routeProtectors/GameGuard";
import GameRouter from "./GameRouter";
import MapRouter from "./MapRouter";
import { MapGuard } from "../routeProtectors/MapGuard";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import Login from "../../login/Login";
import Registration from "../../registration/Registration";
import Maps from "../../maps/Maps";
import UserProfile from "../../userprofile/UserProfile";
import {Game} from "../../game/Game";
import ProfileUser from "../../ProfileUser/ProfileUser";
import ProfileEdit from "../../ProfileEdit/ProfileEdit"

/**
 * Main router of your application.
 * In the following class, different routes are rendered. In our case, there is a Login Route with matches the path "/login"
 * and another Router that matches the route "/game".
 * The main difference between these two routes is the following:
 * /login renders another component without any sub-route
 * /map renders a Router that contains other sub-routes that render in turn other react components
 * Documentation about routing in React: https://reacttraining.com/react-router/web/guides/quick-start
 */
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route
              path="/map"
              render={() => (
                  <MapRouter base={"/map"} />
              )}
            />
            <Route
                path="/userprofile"
                exact
                render={() => <ProfileUser />}
            />
            <Route
                path="/userprofile/edit"
                exact
                render={() => <ProfileEdit />}
            />
              <Route
                  path="/dashboard"
                  exact
                  render={() => <Game />}
              />
            <Route
              path="/login"
              exact
              render={() => (
                //<LoginGuard>
                  <Login />
                //</LoginGuard>
              )}
            />
            <Route
                path="/registration"
                exact
                render={() => (
                    <Registration />
                    )}
              />
            <Route path="/" exact render={() => <Redirect to={"/map"} />} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
/*
* Don't forget to export your component!
 */
export default AppRouter;
