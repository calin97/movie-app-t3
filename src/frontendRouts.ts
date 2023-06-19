export interface HeaderLinkInfo {
  text: string;
  href: string;
}
export type HeaderLinkInfos = Array<HeaderLinkInfo>;
export const HeaderLinkInfos: HeaderLinkInfos = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Movies List",
    href: "/moviesList",
  },
  {
    text: "About Us",
    href: "/aboutUs",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];
