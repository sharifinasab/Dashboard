/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Assessment from "@material-ui/icons/Assessment";
import Person from "@material-ui/icons/Person";
import Supervisor from "@material-ui/icons/SupervisorAccount";
import Gift from "@material-ui/icons/CardGiftcard";
import Delete from "@material-ui/icons/Delete";
import Notifications from "@material-ui/icons/Notifications";
import Store from "@material-ui/icons/Store";
import PermIdentity from "@material-ui/icons/PermIdentity";
import Confirmation from "@material-ui/icons/ConfirmationNumber";
import Map from "@material-ui/icons/Map";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  // {
  //   path: "/users",
  //   name: "کاربر",
  //   rtlName: "کاربر",
  //   icon: Person,
  //   component: DashboardPage,
  //   layout: "/admin",
  //   children: [
      {
        path: "/citizen",
        name: "شهروند",
        rtlName: "شهروند",
        icon: Person,
        component: DashboardPage,
        layout: "/admin"
      },
      {
        path: "/contractor",
        name: "پیمانکار",
        rtlName: "پیمانکار",
        icon: Supervisor,
        component: DashboardPage,
        layout: "/admin"
      },
      {
        path: "/agent",
        name: "مامور",
        rtlName: "مامور",
        icon: PermIdentity,
        component: DashboardPage,
        layout: "/admin"
      },
  //   ]
  // },
  {
    path: "/recycles",
    name: "تعریف",
    rtlName: "پسماند",
    icon: Delete,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "محصول",
    rtlName: "محصول",
    icon: Gift,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/areas",
    name: "مناطق",
    rtlName: "مناطق",
    icon: Map,
    component: UpgradeToPro,
    layout: "/admin"
  },
  {
    path: "/stations",
    name: "ایستگاه ثابت",
    rtlName: "ایستگاه ثابت",
    icon: Store,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/requests",
    name: "تایید درخواست",
    rtlName: "تایید درخواست",
    icon: Confirmation,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "ارسال پیام و نظرسنجی",
    rtlName: "ارسال پیام و نظرسنجی",
    icon: Notifications,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "گزارشات",
    rtlName: "گزارشات",
    icon: Assessment,
    component: NotificationsPage,
    layout: "/admin"
  },
  /*{
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },*/
];

export default dashboardRoutes;
