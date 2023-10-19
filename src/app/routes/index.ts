import express from "express";
import { UserRoute } from "../modules/user/user.route";
import { AuthRoute } from "../modules/auth/auth.route";
import { ServiceRoute } from "../modules/service/service.route";
import { OrderRoute } from "../modules/orders/order.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoute,
  },
  {
    path: "/users",
    route: UserRoute,
  },
  {
    path: "/services",
    route: ServiceRoute,
  },
  {
    path: "/orders",
    route: OrderRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
