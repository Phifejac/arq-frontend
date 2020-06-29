/*!

=========================================================
* Paper Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Buttons from "views/components/Buttons.js";
import Calendar from "views/Calendar.js";
import Charts from "views/Charts.js";
import Dashboard from "views/Dashboard.js";
import ExtendedForms from "views/forms/ExtendedForms.js";
import ExtendedTables from "views/tables/ExtendedTables.js";
import FullScreenMap from "views/maps/FullScreenMap.js";
import GoogleMaps from "views/maps/GoogleMaps.js";
import GridSystem from "views/components/GridSystem.js";
import Icons from "views/components/Icons.js";
import LockScreen from "views/pages/LockScreen.js";
import Login from "views/pages/Login.js";
import Notifications from "views/components/Notifications.js";
import Panels from "views/components/Panels.js";
import ReactTables from "views/tables/ReactTables.js";
import Register from "views/pages/Register.js";
import RegularForms from "views/forms/RegularForms.js";
import RegularTables from "views/tables/RegularTables.js";
import SweetAlert from "views/components/SweetAlert.js";
import Timeline from "views/pages/Timeline.js";
import Typography from "views/components/Typography.js";
import UserProfile from "views/pages/UserProfile.js";
import ValidationForms from "views/forms/ValidationForms.js";
import VectorMap from "views/maps/VectorMap.js";
import Widgets from "views/Widgets.js";
import Wizard from "views/forms/Wizard.js";
import Transactions from "pages/deal-capture/Transactions";
import Blotter from "pages/Blotter";
import Applications from "pages/applications/Applications";
import TradeInstance from "pages/TradeInstace";
import InternalReports from "pages/internal-reports/InternalReports";
import CollateralCalls from "pages/internal-reports/CollateralCalls";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Deal Capture",
    icon: "nc-icon nc-book-bookmark",
    state: "pagesCollapse",
    views: [
      {
        path: "/transactions",
        name: "Transactions",
        mini: "T",
        component: Transactions,
        layout: "/admin",
      },
      {
        path: "/blotter",
        name: "Blotter",
        mini: "B",
        component: Blotter,
        layout: "/admin",
      },
      {
        path: "/tradeinstance",
        name: "Trade Instance",
        mini: "R",
        component: TradeInstance,
        layout: "/admin",
      },
      {
        path: "/bondmanager",
        name: "Bond Manager",
        mini: "LS",
        component: Dashboard,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Reports",
    icon: "nc-icon nc-layout-11",
    state: "componentsCollapse",
    views: [
      {
        path: "/internalreports",
        name: "Internal Reports",
        mini: "IR",
        component: InternalReports,
        layout: "/admin",
      },
      {
        path: "/cashtransfers",
        name: "Cash Transfers",
        mini: "CT",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/collateralcalls",
        name: "Collateral Calls",
        mini: "CC",
        component: CollateralCalls,
        layout: "/admin",
      },
      {
        path: "/repocollateralcalls",
        name: "Repo Collateral Calls",
        mini: "RCC",
        component: Dashboard,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/applications",
    name: "Applications",
    icon: "nc-icon nc-app",
    component: Applications,
    layout: "/admin",
  },
  {
    path: "/administration",
    name: "Admin",
    icon: "nc-icon nc-settings",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/pll",
    name: "PnL",
    icon: "nc-icon nc-money-coins",
    component: Dashboard,
    layout: "/admin",
  },
];

export default routes;
