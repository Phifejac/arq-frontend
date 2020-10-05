import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footer/Footer.js";


import Login from "pages/auth/Login";
import Register from "pages/auth/Register";

var ps;

class Pages extends React.Component {
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.fullPages);
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    const routes = [
      {
        collapse: true,
        name: "Pages",
        icon: "nc-icon nc-book-bookmark",
        state: "pagesCollapse",
        views: [
          {
            path: "/login",
            name: "Login",
            mini: "L",
            component: Login,
            layout: "/auth",
          },
          {
            path: "/register",
            name: "Register",
            mini: "R",
            component: Register,
            layout: "/auth",
          },
        ],
      },
    ];
    return (
      <>
        <AuthNavbar />
        <div className="wrapper wrapper-full-page" ref="fullPages">
          <div className="full-page section-image">
            <Switch>{this.getRoutes(routes)}</Switch>
            {/* <Login/> */}
            <Footer fluid />
          </div>
        </div>
      </>
    );
  }
}

export default Pages;
