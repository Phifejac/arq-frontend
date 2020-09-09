import Home from "pages/home/Home";
import Reports from "pages/reports/Reports";
import PnL from "pages/pnl/PnL";
import Settings from "pages/Settings/Settings";
import Menu from "pages/transactions/Menu";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: "nc-icon nc-bank",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: "nc-icon nc-book-bookmark",
    component: Menu,
    layout: "/admin",
  },
  {
    path: "/pnl",
    name: "P&L",
    icon: "nc-icon nc-money-coins",
    component: PnL,
    layout: "/admin",
  },
  {
    path: "/internalreports",
    name: "Reports",
    icon: "nc-icon nc-layout-11",
    component: Reports,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Admin",
    icon: "nc-icon nc-settings",
    component: Settings,
    layout: "/admin",
  },
];

export default routes;
