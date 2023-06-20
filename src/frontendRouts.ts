export interface HeaderLinkInfo {
  text: string;
  href: string;
  id: string;
}
export type HeaderLinkInfos = Array<HeaderLinkInfo>;
export const HeaderLinkInfos: HeaderLinkInfos = [
  {
    text: "Home",
    href: "/",
    id: "home",
  },
  {
    text: "Movies List",
    href: "/moviesList",
    id: "movieList",
  },
  {
    text: "About Us",
    href: "/aboutUs",
    id: "aboutUs",
  },
  {
    text: "Contact",
    href: "/contact",
    id: "contact",
  },
];
