interface ObjectStyle {
  title: string;
  dropDown: boolean;
  subMenu?: string[];
}
// data
export const NavInfo: ObjectStyle[] = [
  {
    title: "Home",
    dropDown: true,
    subMenu: ["Home Page 1", "Home Page 2"],
  },
  {
    title: "About",
    dropDown: false,
  },
  {
    title: "Services",
    dropDown: true,
    subMenu: ["Service Page", "Service Details"],
  },
  {
    title: "Projects",
    dropDown: true,
    subMenu: ["Projects Page", "Projects Details"],
  },
  {
    title: "Blog",
    dropDown: true,
    subMenu: ["Blog Page", "Blog Details"],
  },
  {
    title: "Team",
    dropDown: true,
    subMenu: ["Team Page", "Team Details"],
  },
  {
    title: "Contact",
    dropDown: false,
  },
];
