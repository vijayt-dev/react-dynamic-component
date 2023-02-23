export const config = [
  {
    component: "breadcrumb",
    id: "breadcrumb",
    ariaLabel: "breadcrumb",
    children: [
      {
        component: "breadcrumbItem",
        id: "breadcrumbItem",
        className: "breadcrumb-item",
        children: [
          {
            component: "link",
            id: "link",
            href: "/",
            children: "Home",
          },
        ],
      },
      {
        component: "breadcrumbItem",
        className: "breadcrumb-item active",
        ariaCurerent: "page",
        children: "Profile",
      },
    ],
  },
  {
    component: "card",
    id: "card",
    className: "card text-center",
    styles: [
      {
        name: "width",
        value: "18rem",
      },
    ],
    children: [
      {
        component: "img",
        id: "img",
        src: "https://randomuser.me/api/portraits/men/97.jpg",
        className: "card-img-top",
        alt: "profile pic",
      },
      {
        component: "body",
        id: "body",
        className: "card-body",
        children: [
          {
            component: "title",
            id: "title",
            className: "card-title",
            tag: "h5",
            children: "John Deo",
          },
          {
            component: "text",
            id: "text",
            className: "card-text",
            children: "Front-End Developer",
          },
          {
            component: "button",
            id: "btn",
            className: "btn btn-primary",
            children: "Contact",
          },
        ],
      },
    ],
  },
];
