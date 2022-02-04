export const NavItems = [
  {
    id: 1,
    icon: "pe-7s-cart",
    label: "Products",
  },
  {
    id: 2,
    parentId: 1,
    label: "New Product",
    to: "/products/create",
  },
  {
    id: 3,
    parentId: 1,
    label: "Product List",
    to: "/products",
  },
  {
    id: 4,
    icon: "pe-7s-portfolio",
    label: "Departments",
  },
  {
    id: 5,
    parentId: 4,
    label: "New Department",
    to: "/departments/create",
  },
  {
    id: 6,
    parentId: 4,
    label: "Department List",
    to: "/departments",
  },
  {
    id: 7,
    icon: "pe-7s-ticket",
    label: "Categories",
  },
  {
    id: 8,
    parentId: 7,
    label: "New Category",
    to: "/categories/create",
  },
  {
    id: 9,
    parentId: 7,
    label: "Categories List",
    to: "/categories",
  },
];
