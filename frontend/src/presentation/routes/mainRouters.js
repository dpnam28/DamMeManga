import Home from "../pages/Home";
import AuthForm from "../pages/AuthForm";
import OnlyHeader from "../Layouts/OnlyHeader";

export const mainRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: AuthForm, layout: OnlyHeader },
];
