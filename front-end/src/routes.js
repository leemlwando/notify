import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
import SendSMS from "views/sms-processing/send.jsx";
import Groups from "views/contacts/groups.jsx";
import Contacts from "views/contacts/contacts.jsx";
import Schedules from "components/datetime/single.jsx";
import Campaigns from "views/schedules/campaigns.jsx";
import MsgTemplate from "views/sms/smstemplate.jsx";
import Users from "views/users/index.jsx";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/sendsms",
    name: "SendSMS",
    icon: "ni ni-circle-08 text-pink",
    component: SendSMS,
    layout: "/admin"
  },
  {
    path: "/smstemplate",
    name: "SMS Template",
    icon: "ni ni-circle-08 text-pink",
    component: MsgTemplate,
    layout: "/admin"
  },
  {
    path: "/managegroups",
    name: "Manage Groups",
    icon: "ni ni-circle-08 text-pink",
    component: Groups,
    layout: "/admin"
  },
  {
    path: "/managecontacts",
    name: "Manage Contacts",
    icon: "ni ni-circle-08 text-pink",
    component: Contacts,
    layout: "/admin"
  },
  {
    path: "/maulesnageschedules",
    name: "Manage Contacts",
    icon: "ni ni-circle-08 text-pink",
    component: Schedules,
    layout: "/admin"
  },
  {
    path: "/managecampaigns",
    name: "Manage Campaigns",
    icon: "ni ni-circle-08 text-pink",
    component: Campaigns,
    layout: "/admin"
  },
  {
    path: "/apikeys",
    name: "API Keys", 
    icon: "ni ni-circle-08 text-pink",
    component: Groups,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users", 
    icon: "ni ni-circle-08 text-pink",
    component: Users,
    layout: "/admin"
  },
];
export default routes;
