import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/Index";
import Typography from "@/views/Typography";
import HelperClasses from "@/views/HelperClasses";
import WidgetsCardBasic from "@/views/Widgets/Cards/Basic";
import WidgetsCardColored from "@/views/Widgets/Cards/Colored";
import WidgetsCardNoHeader from "@/views/Widgets/Cards/NoHeader";
import WidgetsInfoBox1 from "@/views/Widgets/Infobox/1";
import WidgetsInfoBox2 from "@/views/Widgets/Infobox/2";
import WidgetsInfoBox3 from "@/views/Widgets/Infobox/3";
import WidgetsInfoBox4 from "@/views/Widgets/Infobox/4";
import WidgetsInfoBox5 from "@/views/Widgets/Infobox/5";
import UserInterfaceAlerts from "@/views/UserInterface/Alerts";
import UserInterfaceAnimations from "@/views/UserInterface/Animations";
import UserInterfaceColors from "@/views/UserInterface/Colors";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        alias: "/home",
        name: "Home",
        component: Index,
        meta: {
            breadcrumb: [],
        },
    },
    {
        path: "/typography",
        name: "Typography",
        component: Typography,
        meta: {
            bcLinkText: "Typography",
        },
    },
    {
        path: "/helperClasses",
        name: "HelperClasses",
        component: HelperClasses,
        meta: {
            bcLinkText: "Helper Classes",
        },
    },
    {
        path: "/Widgets",
        name: "Widgets",
        component: {
            render(c) {
                return c("router-view");
            },
        },
        meta: {
            bcLinkText: "Widgets",
        },
        children: [
            {
                path: "Cards",
                name: "Widgets_Cards",
                meta: {
                    bcLinkText: "Cards",
                    icon: {
                        text: "",
                    },
                },
                component: {
                    render(c) {
                        return c("router-view");
                    },
                },
                children: [
                    {
                        path: "Basic",
                        name: "Widgets_Cards_Basic",
                        component: WidgetsCardBasic,
                        meta: {
                            bcLinkText: "Basic",
                        },
                    },
                    {
                        path: "Colored",
                        name: "Widgets_Cards_Colored",
                        component: WidgetsCardColored,
                        meta: {
                            bcLinkText: "Colored",
                        },
                    },
                    {
                        path: "NoHeader",
                        name: "Widgets_Cards_NoHeader",
                        component: WidgetsCardNoHeader,
                        meta: {
                            bcLinkText: "No Header",
                            icon: {
                                type: "material",
                                class: "cloak",
                                text: "cloak",
                            },
                        },
                    },
                ],
            },
            {
                path: "Infobox",
                name: "Widgets_Infobox",
                component: {
                    render(c) {
                        return c("router-view");
                    },
                },
                meta: {
                    bcLinkText: "Infobox",
                },
                children: [
                    {
                        path: "1",
                        name: "Widgets_Infobox_1",
                        component: WidgetsInfoBox1,
                        meta: {
                            bcLinkText: "1",
                        },
                    },
                    {
                        path: "2",
                        name: "Widgets_Infobox_2",
                        component: WidgetsInfoBox2,
                        meta: {
                            bcLinkText: "2",
                        },
                    },
                    {
                        path: "3",
                        name: "Widgets_Infobox_3",
                        component: WidgetsInfoBox3,
                        meta: {
                            bcLinkText: "3",
                        },
                    },
                    {
                        path: "4",
                        name: "Widgets_Infobox_4",
                        component: WidgetsInfoBox4,
                        meta: {
                            bcLinkText: "4",
                        },
                    },
                    {
                        path: "5",
                        name: "Widgets_Infobox_5",
                        component: WidgetsInfoBox5,
                        meta: {
                            bcLinkText: "5",
                        },
                    },
                ],
            },
        ],
    },
    {
        path: "/UserInterface",
        name: "UserInterface",
        component: {
            render(c) {
                return c("router-view");
            },
        },
        meta: {
            bcLinkText: "User Interface",
        },
        children: [
            {
                path: "Alerts",
                name: "UserInterface_Alerts",
                component: UserInterfaceAlerts,
                meta: {
                    bcLinkText: "Alerts",
                    /*
                    bcDynamic: true
                    bcGetter: "activeUser", // <breadcrumb> will use this getter to get the user from vuex
                    bcLinkText: user => user.name, // once we have the user, we use this function to format the LinkText dnynamically,
                    bcLoadingText: "Loading Username..." // This will be shown while Data is loading
                    */
                },
            },
            {
                path: "Animations",
                name: "UserInterface_Animations",
                component: UserInterfaceAnimations,
                meta: {
                    bcLinkText: "Animations",
                },
            },
            {
                path: "Colors",
                name: "UserInterface_Colors",
                component: UserInterfaceColors,
                meta: {
                    bcLinkText: "Colors",
                },
            },
        ],
    },
];

const router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
