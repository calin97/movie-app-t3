import Link from "next/link";
import { HeaderLinkInfo } from "~/frontendRouts";
interface NavbarLinkPropType {
  headerLinkInfo: HeaderLinkInfo;
}
function NavbarLink(props: NavbarLinkPropType) {
  return (
    <Link href={props.headerLinkInfo.href}>{props.headerLinkInfo.text}</Link>
  );
}

export default NavbarLink;
