import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MapRouter from "./MapRouter";
import { ProfileGuard } from "../routeProtectors/ProfileGuard";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import Login from "../../login/Login";
import Registration from "../../registration/Registration";
import ProfileUser from "../../userProfile/UserProfile";
import ProfileEdit from "../../editProfile/EditProfile";
import Users from "../../users/Users";
import AboutUs from "../../AboutUs/AboutUs";
import {MapGuard} from "../routeProtectors/MapGuard";
import LocationInformationPage from "../../locationInformationPage/LocationInformationPage";
import ProfilePage from "../../userProfile/ProfilePage";

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
                render={() => 
                <ProfileGuard>
                  <ProfileUser />
                </ProfileGuard>
                }
            />
            <Route
                path="/userprofile/edit"
                exact
                render={() => 
                <ProfileGuard>
                  <ProfileEdit />
                </ProfileGuard>
                
              }
            />
              <Route
                  path="/users"
                  exact
                  render={() =>
                      <ProfileGuard>
                          <Users />
                      </ProfileGuard>

                  }
              />
              <Route
                  exact
                  path={'/user/:userId'}
                  render={() => <ProfileGuard><ProfilePage /></ProfileGuard>}
              />
            <Route
              path="/login"
              exact
              render={() => (
                <LoginGuard>
                  <Login />
                </LoginGuard>
              )}
            />
            <Route
                path="/registration"
                exact
                render={() => (
                    <Registration />
                    )}
              />
              <Route
                  path="/aboutUs"
                  exact
                  render={() => (
                      <AboutUs />
                  )}
              />
            <Route path="/" exact render={() => <Redirect to={"/login"} />} /> 
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
