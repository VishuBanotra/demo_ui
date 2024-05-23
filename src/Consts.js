import AccessDenied from "./assets/Dashboard/AccessDenied.svg";
import Account from "./assets/Dashboard/Account.svg";
import CRM from "./assets/Dashboard/CRM.svg";
import Crypto from "./assets/Dashboard/Crypto.svg";
import KnowledgeBase from "./assets/Dashboard/KnowledgeBase.svg";
import Project from "./assets/Dashboard/Project.svg";
import Sales from "./assets/Dashboard/Sales.svg";
import Welcome from "./assets/Dashboard/Welcome.svg";

import Appointment from "./assets/Dashboard/Body/CardIcons/Appointments.svg";
import Email from "./assets/Dashboard/Body/CardIcons/Email.svg";
import Leads from "./assets/Dashboard/Body/CardIcons/Leads.svg";
import Proposals from "./assets/Dashboard/Body/CardIcons/Proposals.svg";

import Incr from "./assets/Dashboard/Body/Incr.svg";
import Decr from "./assets/Dashboard/Body/Decr.svg";

export const linkData_1 = [
  {
    label: "Project",
    icon: Project,
  },
  {
    label: "CRM",
    icon: CRM,
  },
  {
    label: "Sales",
    icon: Sales,
  },
  {
    label: "Crypto",
    icon: Crypto,
  },
  {
    label: "Knowledge Base",
    icon: KnowledgeBase,
  },
  {
    label: "Account",
    icon: Account,
  },
];

export const linkData_2 = [
  {
    label: "Welcome",
    icon: Welcome,
  },
  {
    label: "Access Denied",
    icon: AccessDenied,
  },
];

export const mockCardData = [
  {
    label: "New Leads",
    number: 63,
    stats: +5.5,
    icon: Leads,
    month: "this month",
    smallIcon: Incr,
  },
  {
    label: "Email",
    number: 25,
    stats: "+2.6",
    icon: Email,
    month: "this month",
    smallIcon: Incr,
  },
  {
    label: "Proposals",
    number: 49,
    stats: "-0.7",
    icon: Proposals,
    month: "this month",
    smallIcon: Decr,
  },
  {
    label: "Appointments",
    number: 12,
    stats: "+2.6",
    icon: Appointment,
    month: "this month",
    smallIcon: Incr,
  },
];

export const barGraphData = {
  labels: [
    "21 January",
    "22 January",
    "23 January",
    "24 January",
    "25 January",
    "26 January",
    "27 January",
  ],
  datasets: [
    {
      label: "",
      data: [40, 60, 70, 80, 90, 100, 110],
      backgroundColor: ["#4F46E5"],
      barThickness: 20,
    },
    {
      label: "",
      data: [30, 50, 60, 70, 80, 90, 100, 110],
      backgroundColor: ["#10B981"],
      barThickness: 20,
    },
  ],
};
