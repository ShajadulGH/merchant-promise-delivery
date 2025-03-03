import {
  DashBoard,
  Delivery,
  Invoice,
  Store,
  Issue,
  Taka,
  Coverage,
  Operator,
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
      icon: Delivery,
      href: "/deliveries",
    },
    {
      title: "invoice",
      icon: Invoice,
      href: "/invoice-list",
    },
    {
      title: "store",
      icon: Store,
      href: "/store",
    },
    {
      title: "report issue",
      icon: Issue,
      href: "/issue-history",
    },
    {
      title: "pricing plan",
      icon: Taka,
      href: "/pricing-plan",
    },
    {
      title: "coverage area",
      icon: Coverage,
      href: "/coverage-area",
    },
    {
      title: "operators",
      icon: Operator,
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
            icon: Delivery,
            href: "/deliveries",
          },
          {
            title: "invoice",
            icon: Invoice,
            href: "/invoice-list",
          },
          {
            title: "store",
            icon: Store,
            href: "/store",
          },
          {
            title: "report issue",
            icon: Issue,
            href: "/issue-history",
          },
          {
            title: "pricing plan",
            icon: Taka,
            href: "/pricing-plan",
          },
          {
            title: "coverage area",
            icon: Coverage,
            href: "/coverage-area",
          },
          {
            title: "operators",
            icon: Operator,
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
        icon: DashBoard,
        href: "/dashboard",
      },
      {
        title: "deliveries",
        icon: Delivery,
        href: "/deliveries",
      },
      {
        title: "invoice",
        icon: Invoice,
        href: "/invoice-list",
      },
      {
        title: "store",
        icon: Store,
        href: "/store",
      },
      {
        title: "report issue",
        icon: Issue,
        href: "/issue-history",
      },
      {
        title: "pricing plan",
        icon: Taka,
        href: "/pricing-plan",
      },
      {
        title: "coverage area",
        icon: Coverage,
        href: "/coverage-area",
      },
      {
        title: "operators",
        icon: Operator,
        href: "/operators",
      },
    ],
  },
};
