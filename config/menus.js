import {
  Application,
  Chart,
  Components,
  DashBoard,
  Stacks2,
  Map,
  Grid,
  Files,
  Graph,
  ClipBoard,
  Cart,
  Envelope,
  Messages,
  Monitor,
  ListFill,
  Calendar,
  Flag,
  Book,
  Note,
  ClipBoard2,
  Note2,
  Note3,
  BarLeft,
  BarTop,
  ChartBar,
  PretentionChartLine,
  PretentionChartLine2,
  Google,
  Pointer,
  Map2,
  MenuBar,
  Icons,
  ChartArea,
  Building,
  Building2,
  Sheild,
  Error,
  Diamond,
  Heroicon,
  LucideIcon,
  CustomIcon,
  Mail,
} from "@/components/svg";

export const menusConfig = {
  mainNav: [
    {
      title: "dashboard",
      icon: DashBoard,
      href: "/dashboard",
    },
    {
      title: "deliveries",
      icon: Envelope,
      href: "/deliveries",
    },
    {
      title: "invoice",
      icon: Messages,
      href: "/invoice-list",
    },
    {
      title: "store",
      icon: Envelope,
      href: "/store",
    },
    {
      title: "report issue",
      icon: Envelope,
      href: "/issue-history",
    },
    {
      title: "pricing plan",
      icon: Envelope,
      href: "/pricing-plan",
    },
    {
      title: "coverage area",
      icon: Envelope,
      href: "/coverage-area",
    },
    {
      title: "operators",
      icon: Envelope,
      href: "/operators",
    },
    // {
    //   title: "Menu",
    //   icon: DashBoard,
    //   child: [
    //     {
    //       title: "dashboard",
    //       icon: DashBoard,
    //       href: "/dashboard",
    //     },
    //     {
    //       title: "deliveries",
    //       icon: Envelope,
    //       href: "/deliveries",
    //     },
    //     {
    //       title: "invoice",
    //       icon: Messages,
    //       href: "/chat",
    //     },
    //     {
    //       title: "store",
    //       icon: Envelope,
    //       href: "/email",
    //     },
    //   ],
    // },
  ],
  sidebarNav: {
    modern: [
      {
        title: "Menu",
        icon: DashBoard,
        child: [
          {
            title: "dashboard",
            icon: DashBoard,
            href: "/dashboard",
          },
          {
            title: "deliveries",
            icon: Envelope,
            href: "/deliveries",
          },
          {
            title: "invoice",
            icon: Messages,
            href: "/invoice-list",
          },
          {
            title: "store",
            icon: Envelope,
            href: "/store",
          },
          {
            title: "report issue",
            icon: Envelope,
            href: "/issue-history",
          },
          {
            title: "pricing plan",
            icon: Envelope,
            href: "/pricing-plan",
          },
          {
            title: "coverage area",
            icon: Envelope,
            href: "/coverage-area",
          },
          {
            title: "operators",
            icon: Envelope,
            href: "/operators",
          },
        ],
      },
    ],
    classic: [
      {
        isHeader: true,
        title: "menu",
      },
      {
        title: "dashboard",
        icon: Messages,
        href: "/dashboard",
      },
      {
        title: "deliveries",
        icon: Envelope,
        href: "/deliveries",
      },
      {
        title: "invoice",
        icon: Messages,
        href: "/invoice-list",
      },
      {
        title: "store",
        icon: Envelope,
        href: "/store",
      },
      {
        title: "report issue",
        icon: Envelope,
        href: "/issue-history",
      },
      {
        title: "pricing plan",
        icon: Envelope,
        href: "/pricing-plan",
      },
      {
        title: "coverage area",
        icon: Envelope,
        href: "/coverage-area",
      },
      {
        title: "operators",
        icon: Envelope,
        href: "/operators",
      },
    ],
  },
};
