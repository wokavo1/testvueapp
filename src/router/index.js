import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import RegSuccess from "@/pages/RegSuccess";
import SecondPage from "@/pages/SecondPage";

const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/registration",
        component: Registration,
    },
    {
        path: "/registration/success",
        component: RegSuccess,
    },
    {
        path: "/secondpage",
        component: SecondPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
